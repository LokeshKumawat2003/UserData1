import React, { useState } from 'react';
import '../ComponetsStyle/navbar.css';

const Navbar = ({ searchquery }) => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value)
    searchquery(search)
  }
  return (
    <header>
      <nav>
        <div className="logo-box">
          <h1>Wisdom Peak Analytics</h1>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Some..."
            value={search}
            onChange={handleSearch}
          />
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
