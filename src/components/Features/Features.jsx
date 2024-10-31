import React from 'react';
import { GoCheckCircleFill } from "react-icons/go";
import PropTypes from 'prop-types';
const Features = ({feature}) => {
    return (
        <div className='mt-5 text-sm text-left '>
            <p className='flex items-center gap-2'><GoCheckCircleFill className='text-green-500  '></GoCheckCircleFill>  {feature} </p>
        </div>
    );
};

Features.propTypes ={
    feature: PropTypes.string,
}
export default Features;