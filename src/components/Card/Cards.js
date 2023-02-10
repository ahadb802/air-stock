import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Cards({
  priceUsd, symbol, image, name,
}) {
  return (

    <li className="light">
      <NavLink
        to={`Details/${name}`}
      >
        <Card.Body className="card-b d-flex">
          <div className="fav-ion">
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </div>
          <img className="coins-image" src={image} alt="" />
          <div className="card-bd">
            <Card.Title className="text">{symbol}</Card.Title>
            <Card.Text>
              $
              {Math.round(priceUsd * 100) / 100}
            </Card.Text>
          </div>
        </Card.Body>
      </NavLink>
    </li>
  );
}

Cards.propTypes = {
  symbol: PropTypes.string.isRequired,
  priceUsd: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Cards;
