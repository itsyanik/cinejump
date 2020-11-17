import Featured from './featured.js';
import Popular from './popular.js';
import NowPlaying from './nowPlaying.js';
import Trailers from './trailers.js';
class App {
  static async init() {
    await Featured.init();
    await Popular.init();
    await NowPlaying.init();
    Trailers.init();
  }
}

export default App;
