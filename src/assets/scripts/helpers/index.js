export const getElements = (selector, context = document) => Array.from(context.querySelectorAll(selector));

export const getClosestElementByAttribute = (element, attribute) => {
  if (element === document) return null;

  return element.hasAttribute(attribute)
    ? element
    : getClosestElementByAttribute(element.parentNode, attribute);
}

export const renderDOM = (htmlString, target) => target.innerHTML = htmlString;
