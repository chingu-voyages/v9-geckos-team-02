import React from 'react';
import CurrentCartContainer from '../../components/containers/CurrentCartContainer';

const Cart = () => (
  <div className="container">
    <div className="row">
      <br />

      <div class="col-md-8 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
        <CurrentCartContainer />
      </div>

      <div className='col-md-4 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6'>
        <div className="panel panel-default">
          <div className="panel-heading text-center">
            <h4>Order Summary</h4>
          </div>
          <div className="panel-body"></div>
        </div>
      </div>

      

    </div>
  </div>
);

export default Cart;