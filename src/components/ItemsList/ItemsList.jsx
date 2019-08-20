import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';

import { Container } from '@material-ui/core';

import Item from './Item';

import { API } from '../../constants/api';
import { addToCart } from '../../store/cartStore';

import './ItemsList.css';

class ItemsList extends React.Component {
  state = { items: [] };

  componentDidMount() {
    Axios.get(`${API}/items`).then((response) => {
      this.setState({ items: response.data });
    });
  }

  renderItems = () =>
    this.state.items.map((item) =>
      <Item key={item.id} item={item} addToCart={this.props.addToCart} />);

  render() {
    return <Container className="items-card">{this.renderItems()}</Container>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (priceInfo) => dispatch(addToCart(priceInfo)),
});

ItemsList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(ItemsList);
