import {
  getElements,
  getClosestElementByAttribute
} from '../helpers/index.js';

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
      let element = getClosestElementByAttribute(event.target, 'data-stage-command');

      if (element) {
        const commands = element.dataset;
        this[commands.stageCommand]();
      }
    });
  }

  prev() {
    this.getCurrentStepInstance().leave('prev');

    if (this.currentStep <= this.minIndexStep) {
      return false;
    }

    if (this.currentStep > this.minIndexStep) {
      --this.currentStep;
    }

    this.getCurrentStepInstance().enter('prev');
  }

  next() {
    this.getCurrentStepInstance().leave('next');

    if (this.currentStep >= this.maxIndexStep) {
      return false;
    }

    if (this.currentStep < this.maxIndexStep) {
      ++this.currentStep;
    }

    this.getCurrentStepInstance().enter('next');
  }

  start() {

    const stepInstance = this.getCurrentStepInstance();

    if ('start' in stepInstance) {
      stepInstance.start();
    }
  }

  getCurrentStepInstance() {
    const step = this.getCurrentStep();
    const Controller = this.getControllerBylabel(step.label);

    if (!this.stepsInstances) {
      this.stepsInstances = {};
    }

    if (!(step.label in this.stepsInstances)) {
      this.stepsInstances[step.label] = new Controller(step, this.steps, this);
    }

    return this.stepsInstances[step.label];
  }

  getCurrentStep() {
    return this.steps[this.currentStep];
  }

  getControllerBylabel(label) {
    return this.stepControllers[label];
  }

  setStepState(newStepState) {
    this.steps[this.currentStep] = {...newStepState};
  }
}
