import Featured from './featured.js';
import Popular from './popular.js';
import NowPlaying from './nowPlaying.js';
class App {
  static async init() {
    await Featured.init();
    await Popular.init();
    await NowPlaying.init();
  }
}

export default App;
