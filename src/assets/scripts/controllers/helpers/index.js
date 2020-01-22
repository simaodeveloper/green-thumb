import { getClosestElementByClass } from '../../utils';

export const optionsHandler = (context, option) => {
  if (context.step.state.values.includes(option.value)) {
    const state = { ...context.step.state };
    state.currentValue = option.value;
    context.stage.setStepState(state);
    context.view.setOptionActive(option);
  }
}

export const optionActiveHandler = (context, optionInput) => {
  const ACTIVE_CLASS = 'is--activated';
  const optionItem = getClosestElementByClass(optionInput, 'c-options__item');

  context.ui.optionItems.forEach(option => option.classList.remove(ACTIVE_CLASS));
  optionItem.classList.add(ACTIVE_CLASS);
}
