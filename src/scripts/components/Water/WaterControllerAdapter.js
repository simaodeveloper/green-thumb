import WaterController from './WaterController.js';

export default class WaterControllerAdapter {
  constructor(state, steps, stage) {
    return new WaterController({ state, steps, stage });
  }
}
