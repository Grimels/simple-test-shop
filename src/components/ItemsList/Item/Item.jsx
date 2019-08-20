import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

import { DEFAULT_COUNT } from './constants';

import './Item.css';


class Item extends React.Component {
  state = {
    count: DEFAULT_COUNT,
  };

  increaseCount = () => this.setState((state) => ({ count: state.count + 1 }));

  decreaseCount = () => this.setState((state) => ({ count: state.count - 1 }));

  handleAddToCart = () => {
    const { item: { price }, addToCart } = this.props;
    const { count } = this.state;

    const totalPrice = count * price;

    addToCart({ count, price: totalPrice });

    this.setState({ count: DEFAULT_COUNT });
  };

  render() {
    const { name, price, image, description } = this.props.item;
    const { count } = this.state;

    return (
      <Card className="item-card">
        <CardActionArea>
          <CardMedia className="item-image" image={image} title="item image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              Price: {price} indian hryvnas
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.handleAddToCart}>
            ADD TO CART
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={this.decreaseCount}
            disabled={count <= 1}
          >
            −
          </Button>
          <span>{count}</span>
          <Button size="small" color="primary" onClick={this.increaseCount}>
            +
          </Button>
        </CardActions>
      </Card>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,

    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Item;
