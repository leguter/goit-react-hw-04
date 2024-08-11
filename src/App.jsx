import SearchBar from './components/SearchBar/SearchBar'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import axios from 'axios';
import iziToast from 'izitoast';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    async function getImgs() {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos?client_id=vKuo5q6BtAb4eyT7HMIcPesAbRlmfSav8y4iXt9ouF0"
        );
        if (response.data.results.length === 0) {
          iziToast.error("There is no matches to your request, try again");
          return;
        } else {
          setData(response.data.results);
        }
      } catch (error) {
        iziToast.error(error);
      }
    }
     getImgs();
  },[])
  return (
    <>
      <SearchBar />
      <ImageGallery dataImg={data} />
    </>
  )
}

export default App
