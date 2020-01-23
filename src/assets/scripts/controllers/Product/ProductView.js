import Step from '../../libraries/Step';

import { getElements, renderDOM, breakLineByIndex } from '../../utils';
import { getIconName } from '../_helpers';

export default class ProductView extends Step.View {
  init() {
    this.ui = {
      productItem: getElements('[data-js-product]')[0],
    }
  }

  getProductTemplateMap(products) {
    return products.map(this.getProductTemplate).join('');
  }

  getProductTemplate({
    name,
    price,
    url,
    alt,
    warnings
  }) {
    return `
      <div class="c-product">
        <div class="c-product__container">
          <h2 class="c-product__title o-title o-title--highlight">
            ${breakLineByIndex(name)}
          </h2>
          <div class="c-product__price o-text--light">
            $${price}
          </div>
          <figure class="c-product__figure">
            <img src="${url}" alt="${alt}" class="c-product__image">
          </figure>
          <ul class="c-product__warnings">
            ${
              warnings.map(warning => `
                <li class="c-product__warnings__item">
                  <span class="c-product__warnings__icon">
                    <svg class="o-icon o-icon--fluid o-icon--${warning.icon}">
                      <use xlink:href="images/icons.svg#svg-${warning.icon}" />
                    </svg>
                  </span>
                  <span class="c-product__warnings__text">
                    ${warning.text}
                  </span>
                </li>
              `).join('')
            }
          </ul>
        </div>
      </div>
    `;
  }

  renderProduct(htmlString) {
    renderDOM(htmlString, this.ui.productItem);
  }
}
