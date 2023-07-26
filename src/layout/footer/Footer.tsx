import React from 'react';
import {FlexWrapper} from 'src/components/flex-wrapper/FlexWrapper';
import {Line} from 'src/components/line/Line';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={'center'} align={'center'} padding={'25px'}>
                Copyright @2023
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #490057;
  opacity: 0.7;
  height: 60px;
`