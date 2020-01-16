export default class WaterController {
  constructor(state, steps, stage, view) {
    this.state = state;
    this.steps = steps;
    this.stage = stage;
    this.view = view;

    this.view.transitionStart();
  }
}
