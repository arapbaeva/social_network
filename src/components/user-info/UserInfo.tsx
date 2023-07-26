import React from 'react';
import {StyledAvatar} from "src/components/styled-avatar/StyledAvatar";
import UserAva from "src/assets/images/img&bg.png";
import { UserName} from "src/components/user-name/UserName";
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

export const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  gap: 24px
`

