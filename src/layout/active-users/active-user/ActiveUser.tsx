import React from 'react';
import {StyledUserInfo} from "src/components/user-info/UserInfo";
import {StyledAvatar} from "src/components/styled-avatar/StyledAvatar";
import UserAva from "src/assets/images/img&bg.png";
import {UserName} from "src/components/user-name/UserName";
import {StyledEmail} from "src/layout/section/Familiar";
import {Title} from "src/layout/posts/Posts";

export const ActiveUser = () => {
    return (
        <StyledUserInfo>
            <StyledAvatar src={UserAva} width={'34px'} height={'34px'}/>
            <div>
                <UserName name={'Eddie'} surName={'Lobanovskii'} fontWeight={'400'}/>
                <StyledEmail>Online</StyledEmail>
            </div>
            <Title size={'8px'} weight={'400'} lineHeight={'11px'} opacity={'0.4 '}>
                1 min ago
            </Title>
        </StyledUserInfo>
    );
};

