import React from 'react';
import styled from "styled-components";
import {Menu} from "src/layout/menu/Menu";
import {Input} from "src/components/input/Input";
import {StyledName, UserName} from "src/components/userName/UserName";
import {StyledAvatar} from "src/components/styledAvatar/StyledAvatar";
import Ava from 'src/assets/images/Profile photo.png'


export const Header = () => {
    return (
        <>
            <StyledHeader>
                <Menu/>
                <Input/>
                {/*<StyledBox>*/}
                    {/*<StyledName color={'green'}>*/}
                        <UserName  name={'Aiym'} surName={'Vector'}/>
                    {/*</StyledName>*/}

                    <StyledAvatar width={'60px'} height={'60px'} src={Ava}/>
                {/*</StyledBox>*/}

            </StyledHeader>
        </>

    );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`

