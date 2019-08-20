import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ShoppingCart as ShoppingCartIcon } from '@material-ui/icons';

const ShoppingCart = ({ totalCount, totalPrice }) => (
  <div>
    <ShoppingCartIcon />
    <span className="cart-info">
      {totalCount} items, total cost: {totalPrice}
    </span>
  </div>
);

const mapStateToProps = (state) => ({
  totalPrice: state.totalPrice,
  totalCount: state.totalCount,
});

ShoppingCart.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ShoppingCart);
