import Step from '../../libraries/Step';
import api from '../../API';

import { prepareProductsToDisplay } from '../_helpers/';

export default class ProductController extends Step {
  constructor(step, steps, stage, view) {
    super(step, steps, stage, view);
    this.params = this.stage.getParams(this.step.label);
  }

  enter(direction) {
    super.enter(direction);
    this.mountProduct();
  }

  mountProduct() {

    api.getProductById(this.params.plantId)
      .then(response => this.saveProduct(response))
      .then(response => this.transformDataToDisplay(response))
      .then(products => this.view.getProductTemplateMap(products))
      .then(htmlString => this.view.renderProduct(htmlString))
  }

  transformDataToDisplay(product) {
    return prepareProductsToDisplay([product]);
  }

  saveProduct(response) {
    const state = { ...this.step.state };
    state.product = response;
    this.stage.setCurrentStepState(state);
    return state.product;
  }
}
