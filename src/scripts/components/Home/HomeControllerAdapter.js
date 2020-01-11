import HomeController from './HomeController.js';

export default class HomeControllerAdapter {
  constructor(state, steps, stage) {
    return new HomeController({ state, steps, stage });
  }
}
