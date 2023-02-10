import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function Cards({
  priceUsd, symbol, image,
}) {
  return (
    <Card className="card">
      <Card.Body className="card-b d-flex">
        <img src={image} alt="" />
        <div className="card-bd">
          <Card.Title className="text">{symbol}</Card.Title>
          <Card.Text>
            $
            {Math.round(priceUsd * 100) / 100}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

Cards.propTypes = {
  symbol: PropTypes.string.isRequired,
  priceUsd: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Cards;
