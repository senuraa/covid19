import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchBox from 'components/atoms/SearchBox';
import Logo from 'components/atoms/Logo';

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #fff;
    border-bottom: 1px #e8e9e9 solid;
    display: flex;
    flex-direction: row;
`;

const NavBar = (props) => {
    const { title } = props;
    return (
        <Container>
            <Logo>{title}</Logo>
            <SearchBox />
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
