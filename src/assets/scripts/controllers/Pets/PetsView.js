import Step from '../../libraries/Step';
import { getElements } from '../../utils';
import { optionActiveHandler } from '../helpers';

export default class PetsView extends Step.View {
  init() {
    this.ui = {
      options: getElements('[data-js-options]', this.el)[0],
      optionItems: getElements('.c-options__item', this.el)
    };
  }

  setOptionActive(optionInput) {
    optionActiveHandler(this, optionInput);
  }
}
