class Carousel {
  /**
   *
   * @param {HTMLElement} element
   * @param {Object} options
   */
  constructor(element, options = {}) {
    this.options = Object.assign(
      {},
      { slidesToScroll: 1, slidesVisible: 1 },
      options
    );
    // Structure provided by th HTML : element > root > panorama > itemsContainers > items
    this.element = element; // => #carousel
    this.root = document.getElementsByClassName("carousel__root")[0]; // => .carousel__root
    this.panorama = document.getElementsByClassName("carousel__panorama")[0]; // => .carousel__panorama
    this.itemsContainers = [...this.panorama.children]; // => .carousel__item
    this.items = [...this.itemsContainers].map((e) => e.children[0]); // => #item1, #item2, etc..
    SS;
    this.setStyle();
  }
  /**
   * Apply good dimension
   */
  setStyle() {
    this.ratio = this.items.length / this.options.slidesVisible;
    this.panorama.style.width = this.ratio * 100 + "%";
    this.itemsContainers.forEach(
      (e) =>
        (e.style.width = 100 / this.options.slidesVisible / this.ratio + "%")
    );
  }
  createNavigation() {}
}

new Carousel(document.querySelector("#carousel"), {
  slidesToScroll: 3,
  slidesVisible: 2,
});
