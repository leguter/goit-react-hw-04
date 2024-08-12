import ImgCard from "../ImgCard/ImgCard";
const ImageGallery = ({ dataImg }) => {
 console.log(dataImg)
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