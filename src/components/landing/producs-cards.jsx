import { useNavigate } from "react-router-dom";

const ProductsCards = ({
  img,
  name,
  gene,
  age,
  price,
  type,
  size,
  free,
  onClick,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="product-card" onClick={onClick}>
        <img src={img} alt="product-img" />
        <h3>{name}</h3>
        <div className="product-additional-info">
          {gene && (
            <p className="product-gene">
              Gene: <span className="dynamic-gene">{gene}</span>
            </p>
          )}
          {gene && age && <p className="dot-symbol">&#128900;</p>}
          {age && (
            <p className="product-age">
              Age: <span className="dynamic-age">{age}</span>
            </p>
          )}
          {type && (
            <p className="product-type">
              Type: <span className="dynamic-type">{type}</span>
            </p>
          )}
          {type && size && <p className="dot-symbol">&#128900;</p>}
          {size && (
            <p className="product-size">
              Size: <span className="dynamic-size">{size}</span>
            </p>
          )}
        </div>
        <p className="product-price">{price}</p>
        {free && (
          <div className="product-free">
            <img src="../../../public/gift-box.svg" alt="gift-box" />
            <p className="dot-symbol">&#128900;</p>
            <p>{free}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsCards;
