export default class nowPlaying {
  static async init() {
    await this.buildNowPlaying();
  }

  static async getNowPlaying() {
    const p = await fetch(`${window.location}api/now_playing`);

    const response = await p.json();
    return response.results;
  }

  static async buildNowPlaying() {
    const nowPlaying = await this.getNowPlaying();
    const nowPlayingImgs = Array.from(
      document.querySelectorAll('.nowPlaying img.movie')
    );

    nowPlayingImgs.map((img, idx) => {
      img.src = `https://image.tmdb.org/t/p/original${nowPlaying[idx].poster_path}`;
      img.alt = `${nowPlaying[idx].title}`;
    });
  }
}
