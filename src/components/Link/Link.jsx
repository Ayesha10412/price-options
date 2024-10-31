import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
    return (
       
            
                  <li className='mr-6 hover:bg-yellow-500 px-6' >
                    <a href={route.path} > {route.name} </a>
                    </li>
            

      
    );
};

Link.propTypes ={
    route: PropTypes.object.isRequired,
    
}

export default Link;