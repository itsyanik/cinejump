import Popular from "./popular.js";
export default class Trailers {
  static init() {
    this.buildTrailers();
    this.getVideoData();
  }

  static async getVideoData() {
    const popular = await Popular.getPopular();
    const videos = popular.map(async (pop) => {
      const { id, title } = pop;
      const videoData = await fetch(`${window.location}api/video/${id}`);

      return [videoData.json(), title];
    });

    return await videos;
  }

  static async buildTrailers() {
    const videoData = await this.getVideoData();
    const videoContainers = Array.from(
      document.querySelectorAll(".trailersContainer .container")
    );
    const iframe = "<iframe src='' type='text/html' frameborder='0'/>";
    const movieNameSpan = "<span></span>";

    videoContainers.forEach((container) => {
      container.innerHTML = iframe;
      container.innerHTML += movieNameSpan;
    });

    const videoIframes = await document.querySelectorAll("iframe");
    const iframeSpan = await document.querySelectorAll(
      ".trailersContainer .container span"
    );

    videoData.map(async (data, idx) => {
      const [pendingPromise, name] = await data;
      const { results } = await pendingPromise;
      const [{ key }] = results;

      if (videoIframes[idx]) {
        videoIframes[idx].src = `http://www.youtube.com/embed/${key}`;
        iframeSpan[idx].innerHTML = name;
      }
    });
  }
}
