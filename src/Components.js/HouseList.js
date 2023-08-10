import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

// import { HouseContext } from './HouseContext';

import House from './House';

import { Link } from 'react-router-dom';

import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [sortOption, setSortOption] = useState('');

  const housesCollectionRef = collection(db, 'PropertyRecord');

  useEffect(() => {
    const getHouses = async () => {
      const querySnapshot = await getDocs(housesCollectionRef);
      const housesData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setHouses(housesData);
    };

    getHouses();
  }, []);

  useEffect(() => {
    const applyFilter = () => {
      let sortedHouses = [...houses];

      if (sortOption === 'bigToSmall') {
        sortedHouses.sort((a, b) => b.area - a.area);
      } else if (sortOption === 'smallToBig') {
        sortedHouses.sort((a, b) => a.area - b.area);
      }

      setFilteredHouses(sortedHouses);
    };

    applyFilter();
  }, [houses, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className="mb-20">
      <h1 className="drop-shadow-xl shadow-black text-transparent bg-clip-text bg-gradient-to-r to-inblue/50 from-inblue pb-5 pt-5 md:pb-10 md:pt-10 text-3xl xl:text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12">
        Our Properties
      </h1>

      <div className="container mx-auto">
        <div className="flex items-center justify-end mr-6 mb-4">
          <label htmlFor="sortOption" className="mr-2 font-medium">
            Sort By Area:
          </label>
          <select
            id="sortOption"
            className="px-3 py-1 border border-gray-300 rounded-md outline-none"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="">-- Select Option --</option>
            <option value="bigToSmall">Big to Small</option>
            <option value="smallToBig">Small to Big</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {filteredHouses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
