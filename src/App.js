
    

import Images from './components/image-list/Images';
import { LoaderProvider } from './context/loader.provider';
import { ImagesProvider } from './context/images.provider';

function App() {
  return (
    <LoaderProvider>
      <ImagesProvider>
        <Images />
         <Search/>
        </ImagesProvider>
    </LoaderProvider>
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */

  );
}

export default App;
