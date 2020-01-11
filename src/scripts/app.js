import steps from './state.js';

import HomeControllerAdapter from './components/Home/HomeControllerAdapter.js';
import SunControllerAdapter from './components/Sun/SunControllerAdapter.js';
import WaterControllerAdapter from './components/Water/WaterControllerAdapter.js';
import PetsControllerAdapter from './components/Pets/PetsControllerAdapter.js';
import FormControllerAdapter from './components/Form/FormControllerAdapter.js';

import Stage from './libraries/Stage.js';

class Application {

  static start() {

    // Set Initial State
    const stage = new Stage({
      el: '.stage',
      steps,
      initialStep: 0,
      canStart: true,
      stepControllers: {
        Home: HomeControllerAdapter,
        Sun: SunControllerAdapter,
        Water: WaterControllerAdapter,
        Pets: PetsControllerAdapter,
        Form: FormControllerAdapter
      }
    });
  }
}

Application.start();
