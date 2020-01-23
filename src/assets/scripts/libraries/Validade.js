import Emitter from './Emitter';

import { isObjectEmpty } from '../utils/';

const globalOptions = {
  classErrorElement: 'validade--error',
  classErrorMessage: 'validade--message-error',
  tagErrorMessage: 'span',
  submitDefault: true
};

const createElementErrorMessage = ({
  tagErrorMessage,
  classErrorMessage,
  message
}) => {
  return `<${tagErrorMessage} class="${classErrorMessage}">${message}</${tagErrorMessage}>`
};

export default class Validade extends Emitter {
  constructor({form, rules, options}) {
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

      this.isValid = false;

      element.classList.add(this.options.classErrorElement);

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
      const rule = this.getRuleByName(name);

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
    if (!rule.test(element.value)) {
      this.dispatch('error', element, rule.message);
      this.rule.isValid = false;
      return;
    }

    this.rule.isValid = true;
  }
}
