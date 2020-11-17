export default class Favorites {
  static init() {
    this.addClickToHears();
    this.populateFavorites();
  }

  /**
   * Local Storage manipulation
   */
  static getFavorites() {
    const store = JSON.parse(localStorage.getItem('favorites')) || [];
    return store;
  }

  static updateStore(newStore) {
    localStorage.removeItem('favorites');
    localStorage.setItem('favorites', newStore);
    this.toggleColor();
    this.populateFavorites();
  }

  static addFavorite(movie) {
    const currentFavorites = this.getFavorites();
    const updatedFavorites = [...currentFavorites, movie];

    this.updateStore(JSON.stringify(updatedFavorites));
  }

  static removeFavorite(movie) {
    const currentFavorites = this.getFavorites();
    const movieIndex = currentFavorites.findIndex(
      (favorite) => favorite.name === movie.name
    );
    currentFavorites.splice(movieIndex, 1);

    this.updateStore(JSON.stringify(currentFavorites));
  }

  static toggleFavorite(movie) {
    const favorites = this.getFavorites();
    const index = favorites.findIndex((mov) => mov.name === movie.name);

    if (index === -1) {
      return this.addFavorite(movie);
    }

    return this.removeFavorite(movie);
  }

  /**
   * DOM functions
   */
  static toggleColor(containers = null) {
    const favorites = this.getFavorites();

    if (!containers) {
      containers = document.querySelectorAll('.container');
    }

    containers.forEach((container) => {
      let heart = container.querySelector('.favorite:last-child');
      let movieContainer = container.querySelector('.movie');

      if (movieContainer) {
        const index = favorites.findIndex(
          (mov) => mov.name === movieContainer.alt
        );

        if (index !== -1) {
          heart.src = '../assets/icons/BsHeartFill-red.svg';
        } else {
          heart.src = '../assets/icons/BsHeartFill-black.svg';
        }
      }
    });
  }

  static addClickToHears() {
    const containers = document.querySelectorAll('.container');

    containers.forEach((container) => {
      const movie = container.querySelector('.movie');

      if (movie) {
        let movieObj = {};

        movieObj = { image: movie.src, name: movie.alt };

        container.addEventListener('click', () =>
          this.toggleFavorite(movieObj)
        );
      }
    });

    this.toggleColor(containers);
  }

  static populateFavorites() {
    const favorites = this.getFavorites();
    const noFavorites = document.querySelector('.noFavorite');
    const favoritesCarousel = document.querySelector('.favoritesCarosel');

    if (favorites.length) {
      noFavorites.style.display = 'none';
    } else {
      noFavorites.style.display = 'block';
    }

    favoritesCarousel.innerHTML = '';

    favorites.map((favorite) => {
      const container = document.createElement('div');
      const imgEl = document.createElement('img');

      container.classList.add('container');
      imgEl.setAttribute('src', '../assets/icons/BsHeartFill-red.svg');
      imgEl.classList.add('favorite');
      imgEl.classList.add('favorited');
      favoritesCarousel.appendChild(container);
      container.appendChild(imgEl);

      const initialState = container.innerHTML;

      container.appendChild(imgEl);
      imgEl.classList.add('movie');
      imgEl.setAttribute('src', favorite.image);
      imgEl.setAttribute('alt', favorite.name);

      container.innerHTML += initialState;
    });
  }
}
