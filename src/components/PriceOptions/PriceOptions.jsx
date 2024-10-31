import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    const gymPricingOptions = [
          {
            "id": "1",
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to gym floor",
              "Locker room access",
              "Free introductory fitness assessment"
            ]
          },
          {
            "id": "2",
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
              "Access to gym floor and cardio equipment",
              "Locker room and shower access",
              "Free introductory fitness assessment",
              "Access to one group class per week"
            ]
          },
          {
            "id": "3",
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
              "24/7 gym access",
              "Locker room, showers, and sauna access",
              "Free introductory fitness assessment",
              "Unlimited group classes",
              "1 personal training session per month",
              "Access to the pool and wellness area"
            ]
          },
          {
            "id": "4",
            "name": "Annual Membership",
            "price": 499.99,
            "features": [
              "Access to all gym areas",
      
            ]
        }
    ]

    return (
        <div>
            
            <h2 className='text-4xl font-bold mb-5'>Best price in the town</h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-8'>
          {
                gymPricingOptions.map(option=><PriceOption key={option.id} option={option}   ></PriceOption>)
            }
          </div>
        </div>
    );
};

export default PriceOptions;