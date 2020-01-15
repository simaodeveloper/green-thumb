import { getElements } from '../helpers/index.js';

export default class Stage {
  constructor({
    el,
    steps = [],
    initialStep = 0,
    stepControllers = {},
    canStart = false
  }) {
    this.el = getElements(el)[0],
    this.steps = steps;
    this.currentStep = initialStep;
    this.stepControllers = stepControllers;
    this.canStart = canStart;

    this.minIndexStep = 0;
    this.maxIndexStep = this.steps.length - 1;

    this.loadEvents();

    if (this.canStart) this.start();
  }

  loadEvents() {
    /*
      Global controls to handle transitions between each step
    */
    this.el.addEventListener('click', event => {
      const currentStepEl = getElements(`[data-step-label="${this.steps[this.currentStep].label}"]`)[0];
      const commands = event.target.dataset;


      if ('stageCommand' in commands) {
        currentStepEl.classList.remove('step--is-active');
        this[commands.stageCommand]();

        const nextStepEl = getElements(`[data-step-label="${this.steps[this.currentStep].label}"]`)[0];
        nextStepEl.classList.add('step--is-active');
      }
    });
  }

  prev() {
    if (this.currentStep <= this.minIndexStep) {
      return false;
    }

    if (this.currentStep > this.minIndexStep) {
      --this.currentStep;
    }

    this.getCurrentController();
  }

  next() {
    if (this.currentStep >= this.maxIndexStep) {
      return false;
    }

    if (this.currentStep < this.maxIndexStep) {
      ++this.currentStep;
    }

    this.getCurrentController();
  }

  start() {
    const controller = this.getCurrentController();
  }

  getCurrentController() {
    const step = this.steps[this.currentStep];
    const Controller = this.stepControllers[step.label];

    return new Controller(step, this.steps, this);
  }

  setStepState(newStepState) {
    this.steps[this.currentStep] = newStepState;
  }
}
