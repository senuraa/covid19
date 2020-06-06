import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.a`
    color: #000;
    display: flex;
    height: 100%;
    padding: 0 1rem;
    align-items: center;
    &:hover {
        border-bottom: 3px solid #000;
    }
`;
const MenuItem = (props) => {
    const { text } = props;
    return <Text>{text}</Text>;
};

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
};

export default MenuItem;
