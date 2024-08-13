import SearchBar from './components/SearchBar/SearchBar'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import axios from 'axios';
import iziToast from 'izitoast';
import { useEffect, useState } from 'react';
function App() {
  const [ImgData, setData] = useState([])
  const [query, setQuery] = useState(null)
  const sendQuery = (searchValue) => {
  if (searchValue.trim() === "") {
    iziToast.error("You need enter text for searching images");
  } else {
    setQuery(searchValue);
    }
  }
  useEffect(() => {
    async function getImgs(word, page) {
      if( word === null) return
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=vKuo5q6BtAb4eyT7HMIcPesAbRlmfSav8y4iXt9ouF0&query=${word}&per_page=12&page=${page}`
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
    getImgs(
      query, 1
     );
  },[query])
  return (
    <>
      <SearchBar sendQuery={sendQuery} />
      {query !== null && (
        <ImageGallery dataImgs={ImgData} fncSubmit={sendQuery} />
      )}
    </>
  );
}

export default App
