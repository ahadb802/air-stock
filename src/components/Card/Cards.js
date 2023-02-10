import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import PropTypes from 'prop-types';

function Cards({
  name, rank, priceUsd, symbol, image,
}) {
  return (
    <CardGroup>
      <Card style={{ width: '18rem', color: 'black' }}>
        <Card.Header className="head">
          <span>
            RANK :
            {rank}
          </span>
          <span>
            {symbol}
            <img src={image} alt="" />
          </span>
        </Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Price : $
            {Math.round(priceUsd * 100) / 100}
          </Card.Text>
          <Button variant="info">Details</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  priceUsd: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Cards;
