import React from 'react';
import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({option}) => {

const {name, price, features} = option

    return (
        <div className='bg-blue-500 rounded-md p-5 text-white'>
            <h2 className='text-center '>
                <span className='text-4xl font-bold'>{price} </span>
                <span className='text-xl'>/mon</span>
                </h2>

                <h4 className='text-lg text-center'> 
                    {name}
                </h4>
                {
                    features.map((feature,index)=><Features key={index} feature={feature} ></Features>)
                }
                <button className='btn bg-green-800 text-white font-bold text-sm mt-8 
                border-none hover:bg-green-300'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes={
    option: PropTypes.object,
}
export default PriceOption;