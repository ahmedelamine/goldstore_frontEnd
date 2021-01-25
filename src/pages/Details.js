import React, { useContext, useState, useRef, useEffect } from "react";
import { DataContext } from "../context";
import { useParams } from "react-router-dom";
import { ErrorHero } from "../components";


// import img1 from "../images/rings/1.jpg";

function Details() {
  const { getProduct } = useContext(DataContext);
  const params = useParams();
  const [data] = useState(getProduct(params.id)[0]);
  const [mainPicture, setMainPicture] = useState("");
  const inputRef = useRef();
  const id = params.id;
  
  useEffect(() => {
    const testid = localStorage.getItem(id);
    if (testid) {
      inputRef.current.checked = true;
    }
    if(data) {
      setMainPicture(data.pictures[0])
    }
    
  }, [id, data]);

  const handleChange = (id) => {
    const myStorage = window.localStorage;

    const testid = myStorage.getItem(id);
    if (testid) {
      myStorage.removeItem(`${id}`);
    } else {
      myStorage.setItem(`${id}`, id);
    }
  };

  if(!data) {
    return(<div className="error">
    <ErrorHero
      title="404"
      subTitle="Product Not Found"
      buttonText="Go Back To Products"
      des="/products"
    />
  </div>)
  }
  
  return (
    <>
      <div className="details">
        <div className="left">
          <div className="selected-img">
            <img src={mainPicture} alt="goldstore" />
          </div>

          <div className="imgs">
            {data.pictures.map((item) => (
              <div
                key={item}
                className="img"
                onClick={() => setMainPicture(item)}
              >
                <img src={item} alt="goldstore" />
              </div>
            ))}
          </div>
        </div>

        <div className="right">
          <h2>{data.name}</h2>
          <span>
            <strong>Price: </strong>{data.productprice} DA
          </span>
          <span>
            <strong>Weight: </strong>
            {data.weight}
          </span>
          <span>
            <strong>Gold Type: </strong>
            {data.country}
          </span>
          <h3>Details :</h3>
          <p className="details">{data.description}</p>
          <form className="compare">
            <input
              type="checkbox"
              id={data.id}
              name="compare"
              value={data.id}
              ref={inputRef}
              onChange={() => handleChange(id)}
            />
            <label htmlFor={data.id}>Add to compare</label>
          </form>
        </div>
      </div>
    </>
  );
}

export default Details;
