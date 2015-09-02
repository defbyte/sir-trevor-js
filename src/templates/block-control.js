"use strict";

module.exports = ({title, type, icon_name}) => {
  return `
    <button class="st-block-controls__button" data-type="${type}" type="button">
      <span class="st-icon st-icon--${type}"></span>${title()}
    </button>
  `;
};
