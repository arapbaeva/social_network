import React from 'react';
import styled from "styled-components";
import {Input} from "src/components/input/Input";
import {UserName} from "src/components/user-name/UserName";
import {StyledAvatar} from "src/components/styled-avatar/StyledAvatar";
import Ava from "src/assets/images/img&bg.png";
import {LogOut} from "src/components/logout/LogOut";
import {FlexWrapper} from "src/components/flex-wrapper/FlexWrapper";


export const Header = () => {
    return (
        <StyledHeader>
            <Input/>
            <FlexWrapper align={'center '} justify={'space-around'}>
                <StyledHeaderInfo>
                    <div>
                        <UserName name={'Aiym'} surName={'Vector'}/>
                        <LogOut/>
                    </div>
                    <StyledAvatar width={'60px'} height={'60px'} src={Ava}/>
                </StyledHeaderInfo>

            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
`

const StyledHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

