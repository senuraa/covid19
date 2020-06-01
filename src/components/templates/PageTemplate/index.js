import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    margin: 2rem auto;
    height: 100%;
`;
const PageTemplate = (props) => {
    const { header, children } = props;
    return (
        <div>
            <div>{header}</div>
            <Content>{children}</Content>
        </div>
    );
};

PageTemplate.propTypes = {
    header: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default PageTemplate;
