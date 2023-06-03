import React from 'react';
import styled from "styled-components";
import {Menu} from "src/layout/menu/Menu";
import {Input} from "src/components/input/Input";
import {StyledName, UserName} from "src/components/userName/UserName";
import {StyledAvatar} from "src/components/styledAvatar/StyledAvatar";
import Ava from "src/assets/images/img&bg.png";
import {LogOut} from "src/components/logout/LogOut";
import {FlexWrapper} from "src/components/flexWrapper/FlexWrapper";


export const Header = () => {
    return (
        <>
            <StyledHeader>
                <Input/>
<div>
    <FlexWrapper align={'center '} justify={'space-around'}  >
        <div>
            <UserName name={'Aiym'} surName={'Vector'}/>
            <LogOut/>
        </div>
            <StyledAvatar width={'60px'} height={'60px'} src={Ava}/>


    </FlexWrapper>
</div>



            </StyledHeader>
        </>

    );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`

