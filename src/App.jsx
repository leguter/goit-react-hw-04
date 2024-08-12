import SearchBar from './components/SearchBar/SearchBar'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import axios from 'axios';
import iziToast from 'izitoast';
import { useEffect, useState } from 'react';
function App() {
  const [ImgData, setData] = useState([])
  useEffect(() => {
    async function getImgs() {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos?client_id=vKuo5q6BtAb4eyT7HMIcPesAbRlmfSav8y4iXt9ouF0"
          // {
          //   query: query,
          //   per_page: 12,
          //   page: page,
          // }
        );
        if (response.data.length === 0) {
          iziToast.error("There is no matches to your request, try again");
          return;
        } else {
          setData(response.data);
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
      <ImageGallery dataImgs={ImgData} />
    </>
  )
}

export default App
