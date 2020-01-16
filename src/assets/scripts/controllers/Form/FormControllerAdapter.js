import FormView from './FormView';
import FormController from './FormController';

export default class FormControllerAdapter {
  constructor(...parameters) {
    return new FormController(...parameters, new FormView());
  }
}
