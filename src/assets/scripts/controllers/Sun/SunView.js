import { getElements } from '../../helpers';

const STEP_LABEL = 'Sun';

export default class SunView {
  constructor() {
    this.el = getElements(`[data-step-label="${STEP_LABEL}"]`)[0];
    this.prevEl = getElements('[data-stage-command="prev"]', this.el)[0];
    this.nextEl = getElements('[data-stage-command="next"]', this.el)[0];
  }

  transitionStart() {
    this.el.classList.add('step--is-active');
  }

  transitionEnd() {
    this.el.classList.remove('step--is-active');
  }
}
