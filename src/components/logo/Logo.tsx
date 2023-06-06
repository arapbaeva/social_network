import React from 'react';
import {Icon} from "src/components/icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo>
                <Icon iconId={'subtract'} width="38" height="38" viewBox="0 0 38 38"/>
            <LogoSpan>
                ЗММ
            </LogoSpan>

        </StyledLogo>

    );
};

const StyledLogo= styled.div`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #FFFFFF;
 
  
  
`
const LogoSpan = styled.span`

`


