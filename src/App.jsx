import SearchBar from './components/SearchBar/SearchBar'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import axios from 'axios';
import iziToast from 'izitoast';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { useEffect, useState } from 'react';
function App() {
  const [ImgData, setData] = useState([])
  const [query, setQuery] = useState(null)
  const [loader, setLoader] = useState(false)
  const [err, setErr] = useState(false)
  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(12)
  const sendQuery = (searchValue) => {
 
    setQuery(searchValue);
  }
  const maxPage = Math.round(totalPages / (12 * page))
  useEffect(() => {
    async function getImgs(word, page, perPage) {
      if( word === null) return
      try {
        setLoader(true)
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=vKuo5q6BtAb4eyT7HMIcPesAbRlmfSav8y4iXt9ouF0&query=${word}&per_page=${perPage}&page=${page}`
        );
        if (response.data.results.length === 0) {
          setLoader(false)
          iziToast.error("There is no matches to your request, try again");
          setErr(true)
          return;
        } else {
          setData(response.data.results);
          setTotalPages(response.data.total)
        }
      } catch (error) {
        iziToast.error(error);
      } finally {
        setLoader(false)
      }
    }
    getImgs(
      query, page, perPage
     );
  }, [query,page,perPage])
  const loadMore = () => {
    if (maxPage > page) {
      setPage(page + 1)
      setPerPage(perPage + 12 ); 
    }
  };
  return (
    <>
      <SearchBar sendQuery={sendQuery} />
      {loader !== false && <Loader />}
      {err === true && <ErrorMessage />}
      {query !== null && (
        <ImageGallery dataImgs={ImgData} fncSubmit={sendQuery} />
      )}
      {maxPage > page && <LoadMoreBtn loadMore={loadMore} />}
    </>
  );
}

export default App
