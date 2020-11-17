export default class Featured {
  static async init() {
    await this.buildFeatured();
  }

  static async getPopular() {
    const p = await fetch(`${window.location}api/popular`);

    return p.json();
  }

  static async buildFeatured() {
    const popular = await this.getPopular();
    const spotImgs = Array.from(document.querySelectorAll('.featured img'));
    const descriptions = Array.from(document.querySelectorAll('.description'));

    spotImgs.map((img, idx) => {
      img.src = `https://image.tmdb.org/t/p/original/${popular[idx].backdrop_path}`;
      img.alt = `${popular[idx].title}`;
    });

    descriptions.map((desc, idx) => {
      idx === 0
        ? (desc.innerHTML = `<span>${popular[idx].title}</span> ${popular[idx].overview}`)
        : (desc.innerHTML = `${popular[idx].title}`);
    });
  }
}
