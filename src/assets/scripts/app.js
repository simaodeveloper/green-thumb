import steps from './state.js';

import HomeController from './controllers/Home/HomeController.js';
import SunController from './controllers/Sun/SunController.js';
import WaterController from './controllers/Water/WaterController.js';
import PetsController from './controllers/Pets/PetsController.js';
import FormController from './controllers/Form/FormController.js';

import Stage from './libraries/Stage.js';

class Application {

  static start() {

    // Set Initial State
    const stage = new Stage({
      el: '[data-js-stage]',
      steps,
      initialStep: 0,
      canStart: true,
      stepControllers: {
        Home: HomeController,
        Sun: SunController,
        Water: WaterController,
        Pets: PetsController,
        Form: FormController
      }
    });
  }
}

Application.start();
