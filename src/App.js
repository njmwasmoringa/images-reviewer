import logo from './logo.svg';
import './App.css';
import { Search } from './components/search/search';
import {LoaderProvider} from './context/loader.provider'
import {ImagesProvider} from './context/images.provider'


function App() {
  return (
   
    <LoaderProvider>
      <ImagesProvider>
        <Search/>
        </ImagesProvider>
    </LoaderProvider>
    
  );
}

export default App;
