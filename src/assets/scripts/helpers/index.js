export const getElements = (selector, context = document) => Array.from(context.querySelectorAll(selector));
