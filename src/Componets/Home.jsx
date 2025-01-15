import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./Navbar";
import UserCart from "./UserCart";
import '../ComponetsStyle/userCart.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const searchquery = useCallback(async (text) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data);
      setFilter(
        text
          ? response.data.filter((el) =>
            el.name.toLowerCase().includes(text.toLowerCase()) ||
            el.email.toLowerCase().includes(text.toLowerCase())
          )
          : response.data
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    searchquery("");
  }, [searchquery]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    SortData(e.target.value);
  };

  const SortData = (sort) => {
    const sortedData = [...data].sort((a, b) =>
      sort === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setFilter(sortedData);
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filter.length / itemsPerPage);

  return (
    <div>
      <Navbar searchquery={searchquery} />
      <div className="select-container">
        <select value={sortOrder} onChange={handleSortChange}>
          <option>Sort By Name</option>
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>
      <div className="cart-boxs">
        {currentItems.map((el, i) => (
          <UserCart el={el} key={i} />
        ))}
      </div>


      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
