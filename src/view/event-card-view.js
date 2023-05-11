import {createElement} from '../render.js';

function createEventCard() {
  return `
    <form class="event event--edit" action="#" method="post">
  
      <section class="event__details">
  
      </section>
    </form>
  `;
}

export default class EventCardView {
  getTemplate() {
    return createEventCard();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
