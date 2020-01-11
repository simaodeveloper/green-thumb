import PetsController from './PetsController.js';

export default class PetsControllerAdapter {
  constructor(state, steps, stage) {
    return new PetsController({ state, steps, stage });
  }
}
