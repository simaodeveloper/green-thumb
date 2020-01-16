import steps from './state.js';

import HomeController from './controllers/Home/HomeController.js';
import SunControllerAdapter from './controllers/Sun/SunControllerAdapter.js';
import WaterControllerAdapter from './controllers/Water/WaterControllerAdapter.js';
import PetsControllerAdapter from './controllers/Pets/PetsControllerAdapter.js';
import ProductListController from './controllers/ProductList/ProductListController.js';
import ProductDetailController from './controllers/ProductDetail/ProductDetailController.js';
import FormController from './controllers/Form/FormController.js';

import Stage from './libraries/Stage.js';

class Application {

  static start() {

    // Set Initial State
    const stage = new Stage({
      el: '[data-js-stage]',
      steps,
      initialStep: 1,
      canStart: true,
      stepControllers: {
        Home: HomeController,
        Sun: SunControllerAdapter,
        Water: WaterControllerAdapter,
        Pets: PetsControllerAdapter,
        ProductList: ProductListController,
        ProductDetail: ProductDetailController,
        Form: FormController
      }
    });
  }
}

Application.start();
