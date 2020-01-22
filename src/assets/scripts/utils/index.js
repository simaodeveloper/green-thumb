export const getElements = (selector, context = document) => Array.from(context.querySelectorAll(selector));

export const getClosestElementByClass = (element, className) => {
  if (element === document) return null;
  return element.classList.contains(className)
    ? element
    : getClosestElementByClass(element.parentNode, className);
}

export const getClosestElementByAttribute = (element, attribute) => {
  if (element === document) return null;
  return element.hasAttribute(attribute)
    ? element
    : getClosestElementByAttribute(element.parentNode, attribute);
}

export const renderDOM = (htmlString, target) => target.innerHTML = htmlString;
