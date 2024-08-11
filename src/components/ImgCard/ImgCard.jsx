
const ImgCard =  ({
    smallImg,
    description,
}) => {
    return (
    <div>
      <img src={smallImg} alt={description} />
    </div>
  );
}

export default ImgCard