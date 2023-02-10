import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cards from '../../components/Card/Cards';
import { allCoins } from '../../redux/home-reducer';
import logo from '../../images/1960x0.jpg';

const Home = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const Coins = useSelector((state) => state.coin);
  const send = useDispatch();
  useEffect(() => {
    send(allCoins());
  }, [send]);
  const filter = Coins ? Coins.filter(
    (Coin) => Coin.name
      .toLowerCase()
      .includes(
        search.toLowerCase()
              || Coin.name.toLowerCase().includes(search.toLowerCase()),
      ) || Coin.rank.toString().includes(search.toString()),
  ) : [];
  return (
    <section>
      <div className="data-handle d-flex">
        <img className="logo" src={logo} alt="" />
        <Form className="form d-flex">
          <h2 className="main-titile" style={{ color: 'white' }}>AIR STOCK</h2>
          <Form.Control
            type="search"
            placeholder="Search here"
            className="me-2"
            aria-label="Search"
            onChange={handleSearch}
            value={search}
          />
        </Form>
      </div>
      <p className="satas">Stats Of Crypto</p>
      <div className="section">
        {
                       filter.map((item) => (
                         <NavLink
                           className="cards"
                           to={`Details/${item.name}`}
                           key={item.id}
                         >
                           <Cards
                             name={item.name}
                             priceUsd={item.price}
                             rank={item.rank}
                             symbol={item.symbol}
                             image={item.icon}
                           />
                         </NavLink>
                       ))
                    }
      </div>
    </section>
  );
};
export default Home;
