import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './details.css';
import { allCoins } from '../../redux/home-reducer';

function Details() {
  const getName = useParams();
  const { name } = getName;
  const Coins = useSelector((state) => state.coin);
  const send = useDispatch();
  useEffect(() => {
    send(allCoins());
  }, [send]);

  const filtere = Coins.filter((item) => item.name === name);
  return (
    <div className="detail-wrapper">
      {
          filtere.map((item) => (
            <div key={item.id}>
              <div className="header">
                <div>
                  <Link to="/" type="button"><CloseButton /></Link>
                  <img className="images" src={item.icon} alt={item.name} />
                </div>
                <div className="d-flex data">
                  <h1>{item.name}</h1>
                  <p style={{ color: 'white' }}>
                    Price : $
                    {Math.round(item.price * 100) / 100 }
                  </p>
                </div>
              </div>
              <p className="satas">Stats Of Coin</p>
              <ListGroup as="ol" className="items-list">
                <ListGroup.Item as="li" className="list">
                  <p>Rank :</p>
                  <p>{item.rank}</p>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list">
                  <p>Price :</p>
                  <p>
                    $
                    {Math.round(item.price * 100) / 100 }
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list">
                  <p>Price in BTC :</p>
                  <p>
                    $
                    {Math.round(item.priceBtc * 100) / 100 }
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list">
                  <p>Volume :</p>
                  <p>
                    $
                    {Math.round(item.volume * 100) / 100 }
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list">
                  <p>MarketCap :</p>
                  <p>
                    $
                    {Math.round(item.marketCap * 100) / 100 }
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list">
                  <p>Available Supply :</p>
                  <p>
                    $
                    {Math.round(item.availableSupply * 100) / 100 }
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list">
                  <p>Total Supply :</p>
                  <p>
                    $
                    {Math.round(item.totalSupply * 100) / 100 }
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list">
                  <p>Price Change in 1h :</p>
                  <p>
                    {Math.round(item.priceChange1h * 100) / 100 }
                    {' '}
                    %
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list">
                  <p>Price Change in 1d :</p>
                  <p>
                    {Math.round(item.priceChange1d * 100) / 100 }
                    {' '}
                    %
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list">
                  <p>Price Change in 1w :</p>
                  <p>
                    {Math.round(item.priceChange1w * 100) / 100 }
                    {' '}
                    %
                  </p>
                </ListGroup.Item>

              </ListGroup>
            </div>
          ))
        }
    </div>
  );
}

export default Details;
