import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

import SVG from './logo.js';

import config from '../../../config.json';

function L({ className, mode }) {
  //console.log(SVG)
  return SVG({className,mode});

}


L.propTypes = {
  className: PropTypes.string.isRequired,
};

const Logo = styled(L)`
  margin: 40px auto;
  max-width:300px;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 10px;
  }
`;

export default Logo;