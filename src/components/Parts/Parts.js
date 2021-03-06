import React from 'react';
import { Link } from 'react-router-dom';

const Parts = ({ part }) => {
    const { name, description, img, minOrder, availableQuantity, price, _id } = part;
    return (
        <div className="card card-compact bg-base-100 shadow-xl w-fit">
            <figure><img className='' src={img} width={350} height={200} alt="parts" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Min order: {minOrder} units</p>
                <p>Available quantity: {availableQuantity} units</p>
                <p>Price: ${price} /unit</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/purchase/${_id}`}>Order Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Parts;