import ImgCard from "../ImgCard/ImgCard";
const ImageGallery = ({ dataImgs }) => {
 console.log(dataImgs)
  return (
    <ul>
      {dataImgs.map((dataImg) => {
      <li key={dataImg.id}>
        <ImgCard
          smallImg={dataImg.urls.small}
          description={dataImg.alt_description}
        />
      </li>;
      })}
    </ul>
    
  );
}

export default ImageGallery