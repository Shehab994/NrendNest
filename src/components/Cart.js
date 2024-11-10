import React from 'react'


export default function Cart(props) {
    return (
        <div className="cart">
            <img src={props.img1} alt='pic' />
            <div className="name">{props.name}</div>
            <div className="ratings">
                <div className="price">Price : {props.price}</div>
                <div className="rate"><i className="bi bi-star-fill"></i> {props.ratings}</div>
            </div>
            <div className="buttons">
                <button>Add Cart</button>
                <button>Explore</button>
            </div>
        </div>
    )
}
