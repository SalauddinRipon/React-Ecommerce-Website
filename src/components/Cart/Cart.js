import React, { Component } from 'react';
import Title from '../Title';
import CartColums from './CartColums';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../Context';
import CartList from './CartList';
import CartTotal from './CartTotal'
export default class Cart extends Component {
    render() {
        return (
            <section>
            <ProductConsumer>
            {value => {
                const {card} =value;
                if (card.length > 0) {
                    return (
                        <React.Fragment>
                        <Title name="Your" title="cart"/>
               <CartColums/>
               <CartList value={value} />
               <CartTotal value={value} />
               </React.Fragment>
                    )
                }
                else {
                    return  <EmptyCart/>;
                }
            } }
            </ProductConsumer>
              
              
            </section>
        );
    }
}
