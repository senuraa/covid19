import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImg } from './logo.svg';

const LogoWrap = styled.div`
    border-right: 1px #e8e9e9 solid;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const Logo = () => {
    return (
        <LogoWrap>
            <LogoImg height="70px" />
        </LogoWrap>
    );
};

export default Logo;
