import Featured from './featured.js';
import Popular from './popular.js';
class App {
  static async init() {
    await Featured.init();
    await Popular.init();
  }
}

export default App;
