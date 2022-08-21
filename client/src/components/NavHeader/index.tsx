import React from 'react'
import images from '../../images';
import { StyledHeader } from './index.styled';

const NavHeader = () => (
    <StyledHeader>
        <img src={images.fullBrandLogo} alt="Finimize" width="160px" />
    </StyledHeader>
)

export default NavHeader
