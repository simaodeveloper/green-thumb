import steps from './state.js';

import HomeController from './components/Home/HomeController.js';
import SunController from './components/Sun/SunController.js';
import WaterController from './components/Water/WaterController.js';
import PetsController from './components/Pets/PetsController.js';
import FormController from './components/Form/FormController.js';

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
