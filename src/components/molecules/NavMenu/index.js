import React from 'react';
import styled from 'styled-components';
import MenuItem from 'components/atoms/MenuItem';
import ListItem from 'components/atoms/ListItem';

const List = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
`;

const NavMenu = (props) => {
    const { countries } = props;
    const items = countries.map((country, idx) => {
        const key = `${country.code}-${idx}`;
        return (
            <ListItem key={key}>
                <MenuItem text={country.title} />
            </ListItem>
        );
    });
    return <List>{items}</List>;
};

export default NavMenu;
