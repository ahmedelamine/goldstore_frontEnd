import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const getKeys = () => {
  var archive = [],
    keys = Object.keys(localStorage),
    i = 0,
    key;

  for (; (key = keys[i]); i++) {
    archive.push(key);
  }

  return archive;
};

function Product({ id, name, weight, pictures,price, onC }) {
  const url = `/details/${id}`;
  const inputRef = useRef();

  

  useEffect(() => {
    const testid = localStorage.getItem(id);
    if (testid) {
      inputRef.current.checked = true;
    }
  }, [id]);

  const handleChange = (id) => {
    const testid = localStorage.getItem(id);
    if (testid) {
      localStorage.removeItem(`${id}`);
    } else {
      localStorage.setItem(`${id}`, id);
    }
    if (onC) {
      onC(getKeys());
    }
  };

  return (
    <div className="product-container">
      <img src={pictures} alt="goldstore" />
      <div className="img-c-text">
        <header>
          <span className="price">{price} DA -- </span>
          <span className="gram">{weight} g</span>
        </header>
        <h4>{name}</h4>
        <Link to={url}>Details</Link>
        <form className="compare">
          <input
            type="checkbox"
            id={id}
            name="compare"
            value="id"
            ref={inputRef}
            onChange={() => handleChange(id)}
          />
          <label htmlFor={id}>Add to compare</label>
        </form>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  pictures: PropTypes.string.isRequired,
};

export default Product;
