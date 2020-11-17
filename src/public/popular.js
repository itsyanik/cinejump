export default class Popular {
  static async init() {
    await this.buildPopular();
  }

  static async getPopular() {
    const p = await fetch(`${window.location}api/popular`);

    return p.json();
  }

  static async buildPopular() {
    const popular = await this.getPopular();
    const popularMoviesImg = Array.from(
      document.querySelectorAll('.popular img.movie')
    );

    popularMoviesImg.map((pop, idx) => {
      // idx 0-2 is used for featured
      pop.src = `https://image.tmdb.org/t/p/original${
        popular[idx + 3].poster_path
      }`;
      pop.alt = `${popular[idx + 3].title}`;
    });
  }
}
