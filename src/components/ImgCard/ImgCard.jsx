
const ImgCard =  ({
    smallImg,
    description,
}) => {
    return (
    <div>
      <img src={smallImg} alt={description} width='300' height='300'/>
    </div>
  );
}

export default ImgCard