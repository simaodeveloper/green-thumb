import Step from '../../libraries/Step';
import api from '../../API';

export default class CatalogController extends Step {
  constructor(step, steps, stage, view) {
    super(step, steps, stage, view);
  }

  enter(direction) {
    super.enter(direction);

    const params = this.getParamsFromSurvey();

    api.getProductListByParams({})
      .then(response => this.view.transformDataToDisplay(response))
      .then(productList => this.view.getCardsTemplatesMap(productList))
      .then(htmlString => this.view.renderCards(htmlString))
      .then(() => this.view.sliderSetup());
  }

  leave(direction) {
    super.leave(direction);
  }

  getParamsFromSurvey() {
    const labels = ['Sun', 'Water', 'Pets'];

    return this.steps
      .filter(step => labels.includes(step.label))
      .reduce((params, step) => {
        params[`${step.label.toLowerCase()}Value`] = step.state.currentValue;
        return params;
      }, {});
  }
}
