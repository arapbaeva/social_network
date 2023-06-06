import React from 'react';
import {StyledAvatar} from "src/components/styledAvatar/StyledAvatar";
import UserAva from "src/assets/images/img&bg.png";
import {UserName} from "src/components/userName/UserName";
import {StyledEmail} from "src/layout/section/Familiar";
import styled from "styled-components";

export const UserInfo = () => {
    return (
            <StyledUserInfo>
                <StyledAvatar src={UserAva} width={'34px'} height={'34px'}/>
                <div>
                    <UserName name={'Eddie'} surName={'Lobanovskii'} fontWeight={'400'}/>
                    <StyledEmail>laboanovskiy@gmail.com</StyledEmail>
                </div>
            </StyledUserInfo>
    );
};

const StyledUserInfo = styled.div`
display: flex;
  align-items: center;
  gap:24px
`
