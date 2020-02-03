/**
 * @author Daniel Simão da Silva
 */

export default class Checkers {
  save(rule) {
    this.rules = [...(this.rules || []), rule];
    return this;
  }

  create() {
    const rules = [...this.rules];
    this.rules = [];
    return rules;
  }

  add({ name, checker, message }) {
    this[name] = ({ condition = undefined, message: error }) => {
      return this.save({
        name,
        message: error || message,
        test: checker(condition),
      });
    };
  }
}

export const checkers = new Checkers();
