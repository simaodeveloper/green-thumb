import SunController from './SunController.js';

export default class SunControllerAdapter {
  constructor(state, steps, stage) {
    return new SunController({ state, steps, stage });
  }
}
