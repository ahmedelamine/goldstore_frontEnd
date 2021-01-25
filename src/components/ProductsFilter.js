import React, {useContext, useState} from "react";
import { DataContext } from "../context";

function ProductsFilter() {
  const { priceD, handleFilter } = useContext(DataContext);
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: 0
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setFilter((prevFilter) => {
      return {...prevFilter, [name]: value};
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  handleFilter(filter);
  }
  return (
    <div className="filter">
      <form onSubmit={handleSubmit}>
        <p>Filter By Price: </p>
        <label htmlFor="min">Min price DA</label>
        <input
          id="min"
          type="number"
          min={priceD.minP}
          max={filter.maxPrice || priceD.maxP}
          name="minPrice"
          placeholder="Min price"
          onChange={handleChange}
        />
        <label htmlFor="max">Max price DA</label>
        <input
          id="max"
          type="number"
          min={filter.minPrice || priceD.minP}
          max={priceD.maxP}
          name="maxPrice"
          placeholder="Max price"
          onChange={handleChange}
        />
        <button type="submit">Filter</button>
        
      </form>
    </div>
  );
}

export default ProductsFilter;
