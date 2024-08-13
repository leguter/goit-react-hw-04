import ImgCard from "../ImgCard/ImgCard";
import css from './ImageGallery.module.css'
const ImageGallery = ({ dataImgs }) => {
  return (
    <ul className={css.list}>
      { dataImgs.map(dataImg => {
        return (
          <li key={dataImg.id} className={css.item}>
            <ImgCard
              smallImg={dataImg.urls.small}
              description={dataImg.description}
            />
          </li>
        );
        
      })}
    </ul>
    
  );
}

export default ImageGallery