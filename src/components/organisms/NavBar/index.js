import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchBox from 'components/atoms/SearchBox';
import Logo from 'components/atoms/Logo';
import NavMenu from 'components/molecules/NavMenu';

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #fff;
    border-bottom: 1px #e8e9e9 solid;
    display: flex;
    flex-direction: row;
`;
const LContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 20%;
`;

const NavBar = (props) => {
    const { title } = props;
    const countries = [
        { title: 'USA', code: 'US' },
        { title: 'USA', code: 'US' },
        { title: 'USA', code: 'US' },
        { title: 'USA', code: 'US' },
        { title: 'USA', code: 'US' },
    ];
    return (
        <Container>
            <LContainer>
                <Logo>{title}</Logo>
                <SearchBox />
            </LContainer>
            <NavMenu countries={countries} />
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
