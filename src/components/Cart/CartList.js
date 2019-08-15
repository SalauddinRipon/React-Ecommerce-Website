import React, { Component } from 'react'
import CartItem from './CartItem'
export default function CartList({value}) {

const {card} = value
console.log(value,card);

        return (
            <div className="container-fluid">
               {card.map(item => {
                   return   <CartItem key={item.id} 
                   item={item} value={value} />
               })}
       
            </div>
        )
    }