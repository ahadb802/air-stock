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
    <div className="detail-container">
      <div className="detail-wrapper">
        <Link to="/" type="button"><CloseButton /></Link>
        {
          filtere.map((item) => (
            <div key={item.id}>
              <div className="header">
                <img src={item.icon} alt={item.name} />
                <h1>{item.name}</h1>

              </div>
              <ListGroup as="ol" numbered className="items-list">
                <ListGroup.Item as="li">
                  Rank :
                  {item.rank}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Price :
                  {Math.round(item.price * 100) / 100 }
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Price in BTC :
                  {Math.round(item.priceBtc * 100) / 100 }
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Volume :
                  {Math.round(item.volume * 100) / 100 }
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  MarketCap :
                  {Math.round(item.marketCap * 100) / 100 }
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Available Supply :
                  {Math.round(item.availableSupply * 100) / 100 }
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Total Supply :
                  {Math.round(item.totalSupply * 100) / 100 }
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Price Change in 1h :
                  {Math.round(item.priceChange1h * 100) / 100 }
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Price Change in 1d :
                  {Math.round(item.priceChange1d * 100) / 100 }
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Price Change in 1w :
                  {Math.round(item.priceChange1w * 100) / 100 }
                </ListGroup.Item>

              </ListGroup>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Details;
