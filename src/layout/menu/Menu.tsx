import React from 'react';
import styled from "styled-components";
import {Icon} from "src/components/icon/Icon";
import {Logo} from "src/components/logo/Logo";

export const Menu = () => {
    return (
        <StyledMenu>
            <Logo />
            <ul>
                <li><a href=""><Icon iconId={'home'} height={'20'} width={'20'} viewBox={'0 0 20 20'}/>Home</a></li>
                <li><a href=""><Icon iconId={'person'} height={'20'} width={'20'} viewBox={'0 0 20 20'}/>Profile</a></li>
                <li><a href=""><Icon iconId={'vector'} height={'20'} width={'20'} viewBox={'0 0 20 20'}/>Messages</a></li>
                <li><a href=""><Icon iconId={'users'} height={'20'} width={'20'} viewBox={'0 0 20 20'} />Users</a></li>
                <li><a href=""><Icon iconId={'news'} height={'20'} width={'20'} viewBox={'0 0 20 20'} />News</a></li>
                <li><a href=""><Icon iconId={'music'} height={'20'} width={'20'} viewBox={'0 0 20 20'} />Music</a></li>
                <li><a href=""><Icon iconId={'settings'} height={'20'} width={'20'} viewBox={'0 0 20 20'} />Settings</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  background-color: #490057;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  //gap: 25px;
 
a{

  color: #FFFFFF;
  opacity: 0.7;
  text-decoration: none;
  &:hover{
    color:#FBB03B
  }
}

`

