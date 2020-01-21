import { getElements } from '../helpers';

export default class Step {
  constructor(step, steps, stage, view) {
    this.step = step;
    this.steps = steps;
    this.stage = stage;
    this.view = view;

    this.view.setElementByLabel(this.step.label);
    this.view.init();
  }

  start() {
    this.view.start();
  }

  enter(direction) {
    this.view.start();
  }

  leave(direction) {
    this.view.leave();
  }
}

Step.View = class StepView {
  init() {}

  setElementByLabel(label) {
    this.el = getElements(`[data-step-label="${label}"]`)[0];
  }

  start() {
    this.el.classList.add('step--is-active');
  }

  leave() {
    this.el.classList.remove('step--is-active');
  }
}
