import FormController from './FormController.js';

export default class FormControllerAdapter {
  constructor(state, steps, stage) {
    return new FormController({ state, steps, stage });
  }
}
