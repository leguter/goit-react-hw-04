import SearchBar from './components/SearchBar/SearchBar'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import axios from 'axios';
import iziToast from 'izitoast';
function App() {
 async function getImgs() {
   try {
     const response = await axios.get(
       "https://api.unsplash.com/photos?client_id=vKuo5q6BtAb4eyT7HMIcPesAbRlmfSav8y4iXt9ouF0",
       {}
     );
     if (response.data.results.length === 0) {
       iziToast.error("There is no matches to your request, try again");
       return;
     } else {
       return response.data
     }
   } catch (error) {
     console.error(error);
   }
 }
  return (
    <>
      <SearchBar />
      <ImageGallery dataImg={getImgs} />
    </>
  )
}

export default App
