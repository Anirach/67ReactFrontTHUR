const Hello = ({ name, message }) => {
   
  return (
      <div>
        <h1>{name} {message}</h1>
      </div>
    );
}

import PropTypes from 'prop-types';

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default Hello;