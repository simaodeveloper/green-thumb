import Emitter from './Emitter';

import { isObjectEmpty } from '../utils';

const globalOptions = {
  classErrorElement: 'validade--error',
  classErrorMessage: 'validade--message-error',
  tagErrorMessage: 'span',
  submitDefault: true,
};

const createElementErrorMessage = ({
  tagErrorMessage,
  classErrorMessage,
  message
}) => {
  return `<${tagErrorMessage} class="${classErrorMessage}">${message}</${tagErrorMessage}>`
};

export default class Validate extends Emitter {
  constructor({ form, rules, options}) {
    super();
    this.form = form;
    this.rules = rules;
    this.options = {...globalOptions, ...options};
    this.isValid = true;

    this.setCoreEvents();
  }

  setCoreEvents() {
    this.on('error', (element, error) => {
      const parent = element.parentNode;

      console.log(element, error);

      this.isValid = false;

      parent.classList.add(this.options.classErrorElement);

      parent.insertAdjacentHTML('afterend',
        createElementErrorMessage({
          tagErrorMessage: this.options.tagErrorMessage,
          classErrorMessage: this.options.classErrorMessage,
          message: error
        })
      );
    });

    this.on('formSubmit', elements => {});

    this.form.addEventListener('submit', event => {
      if (!this.isValid) {
        event.preventDefault();
      }

      this.validate();

      if (!this.options.submitDefault) {
        event.preventDefault();
        this.dispatch('formSubmit', this.getFields());
      }

    });
  }

  getFieldName(element) {
    return element.getAttribute('name');
  }

  getFields() {
    return Array.from(this.form.elements);
  }

  getFieldByName(name) {
    return this.getFields().find(element => this.getFieldName(element) === name);
  }

  getRuleByName(name) {
    return this.rules[name];
  }

  validate() {
    const elements = this.getFields();

    if (isObjectEmpty(this.rules)) {
      throw new Error('Please you have to insert some rules to validade the form!');
    }

    Object.keys(this.rules).forEach(ruleName => {
      const element = this.getFieldByName(ruleName);
      const rule = this.getRuleByName(ruleName);

      this.executeRuleTest(rule, element);
    });
  }

  validateByElement(element) {
    const name = this.getFieldName(element);
  }

  validateByName(name) {
    const rule = this.getRuleByName(name);
    const field = getFieldByName(name);
  }

  executeRuleTest(rule, element) {
    const ruleValidators = this.getValidatorsByRule(rule);

    for (let ruleName in ruleValidators) {
      let test = ruleValidators.methods[ruleName];

      if (!test(element.value, rule[ruleName].value)) {
        console.log(ruleName, rule[ruleName].message)
        this.dispatch('error', element, rule[ruleName].message);
      }
    }
    // if (!rule.test(element.value)) {
    //   this.dispatch('error', element, rule.message);
    //   this.rule.isValid = false;
    //   return;
    // }

    // this.rule.isValid = true;
  }

  getValidatorsByRule(rule) {
    const newRule = { ...rule};
    const methodNames = Object.keys(newRule);

    if (!newRule.methods) {
      Object.defineProperty(newRule, 'methods', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: {}
      });
    }

    methodNames.forEach(name => {
      newRule.methods[name] = Validate.methods[name];
    });

    return newRule;
  }
}

Validate.patterns = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
};

Validate.methods = {
  minLength: (value, ruleValue) => {
    return value >= ruleValue;
  },
  maxLength: (value, ruleValue) => {
    return value <= ruleValue;
  },
  required: (value, ruleValue) => {
    return value !== undefined && value !== null;
  },
  pattern: (value, ruleValue) => {
    return ruleValue.test(value);
  }
};
