import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Li = styled.li`
    list-style: none;
`;

const ListItem = (props) => {
    const { children } = props;
    return <Li>{children}</Li>;
};

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ListItem;
