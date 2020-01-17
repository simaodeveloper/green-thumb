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
    this.view.transitionStart();
  }

  enter(direction) {
    this.view.transitionStart();
  }

  leave(direction) {
    this.view.transitionEnd();
  }
}

Step.View = class StepView {
  init() {}

  setElementByLabel(label) {
    this.el = getElements(`[data-step-label="${label}"]`)[0];
  }

  transitionStart() {
    this.el.classList.add('step--is-active');
  }

  transitionEnd() {
    this.el.classList.remove('step--is-active');
  }
}
