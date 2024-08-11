import ImgCard from "../ImgCard/ImgCard";
const ImageGallery = (getImgs) => {
   getImgs()
  return (
    <ul>
      {/* {dataImg.map} */}
      <li>
        <ImgCard />
      </li>
    </ul>
  );
}

export default ImageGallery