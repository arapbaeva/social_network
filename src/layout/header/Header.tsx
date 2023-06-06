import React from 'react';
import styled from "styled-components";
import {Input} from "src/components/input/Input";
import {UserName} from "src/components/userName/UserName";
import {StyledAvatar} from "src/components/styledAvatar/StyledAvatar";
import Ava from "src/assets/images/img&bg.png";
import {LogOut} from "src/components/logout/LogOut";
import {FlexWrapper} from "src/components/flexWrapper/FlexWrapper";


export const Header = () => {
    return (
        <>

            <StyledHeader>
                <Input/>
                    <FlexWrapper align={'center '} justify={'space-around'}>
                            <UserName name={'Aiym'} surName={'Vector'}/>

                            <LogOut/>

                        <StyledAvatar width={'60px'} height={'60px'} src={Ava}/>


                    </FlexWrapper>

            </StyledHeader>
        </>

    );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`

