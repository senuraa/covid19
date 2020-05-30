import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Logo from '../../atoms/Logo';

const Container = styled.div`
    width: 100%;
    height: 60px;
    backgroundcolor: #20232a;
`;

const NavBar = (props) => {
    const { title } = props;
    return (
        <Container>
            <Logo>{title}</Logo>
        </Container>
    );
};

NavBar.propTypes = {
    title: PropTypes.string,
};
NavBar.defaultProps = {
    title: 'C19',
};

export default NavBar;
