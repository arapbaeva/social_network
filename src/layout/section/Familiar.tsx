import React from 'react';
import styled from "styled-components";
import {StyledAbout} from "src/layout/section/About";
import {FlexWrapper} from "src/components/flexWrapper/FlexWrapper";
import {StyledAvatar} from "src/components/styledAvatar/StyledAvatar";
import UserAva from 'src/assets/images/img&bg.png'
import {UserName} from "src/components/userName/UserName";


export const Familiar = () => {
    return (
        <StyledFamiliar>
            <h2>You might know</h2>
            <FlexWrapper>
                <StyledAvatar src={UserAva} width={'34px'} height={'34px'}/>
                <UserName name={'Eddie'} surName={'Lobanovskii'} fontWeight={'400'} />
                <StyledEmail>laboanovskiy@gmail.com</StyledEmail>


            </FlexWrapper>
        </StyledFamiliar>
    );
};

export const StyledFamiliar = styled(StyledAbout)`
  align-items: center;

`
const StyledEmail = styled.div`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #490057;
  opacity: 0.5;
`
