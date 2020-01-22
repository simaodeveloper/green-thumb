import Step from '../../libraries/Step';
import api from '../../API';

import { getClosestElementByClass } from '../../utils';

export default class CatalogController extends Step {
  constructor(step, steps, stage, view) {
    super(step, steps, stage, view);
    this.loadEvents();
  }

  enter(direction) {
    super.enter(direction);

    const params = this.getParamsFromSurvey();

    api.getProductListByParams(params)
      .then(response => this.view.transformDataToDisplay(response))
      .then(productList => this.view.getCardsTemplatesMap(productList))
      .then(htmlString => this.view.renderCards(htmlString))
      .then(() => this.view.sliderSetup());
  }

  leave(direction) {
    super.leave(direction);
  }

  loadEvents() {
    this.view.ui.catalogList.addEventListener('click', event => {
      const cardButton = getClosestElementByClass(event.target, 'c-card__button');
      console.log(cardButton)
      if (cardButton) {
        console.log('plant id', cardButton.dataset.plantId);
      }
    });
  }

  getParamsFromSurvey() {
    const labels = ['Sun', 'Water', 'Pets'];

    return this.steps
      .filter(step => labels.includes(step.label))
      .reduce((params, step) => {
        let value = step.state.currentValue;
        value = value === null ? undefined : value;
        params[`${step.label.toLowerCase()}Value`] = value ;
        return params;
      }, {});
  }
}
