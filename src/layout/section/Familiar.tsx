import React from 'react';
import styled from "styled-components";
import {StyledAbout} from "src/layout/section/About";
import {FlexWrapper} from "src/components/flexWrapper/FlexWrapper";
import {StyledAvatar} from "src/components/styledAvatar/StyledAvatar";
import UserAva from 'src/assets/images/img&bg.png'
import {UserName} from "src/components/userName/UserName";
import {UserInfo} from "src/components/user-info/UserInfo";


export const Familiar = () => {
    return (
        <StyledFamiliar>
            <h2>You might know</h2>
            <FlexWrapper direction={'column'} >
                <UserInfo/>
                <UserInfo/>
                <UserInfo/>
            </FlexWrapper>
        </StyledFamiliar>
    );
};

export const StyledFamiliar = styled(StyledAbout)`
  align-items: center;
`
export const StyledEmail = styled.div`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #490057;
  opacity: 0.5;
`
