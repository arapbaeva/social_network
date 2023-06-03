import React from 'react';
import styled from "styled-components";
import {Icon} from "src/components/icon/Icon";
import {Line} from "src/components/line/Line";

export const About = () => {
    return (
        <StyledAbout>
            <h2>About</h2>
            <ul>
                <li><Icon iconId={'person'} height={'20'} width={'20'} viewBox={'0 0 20 20'}/>Male</li>
                <Line/>
                <li><Icon iconId={'cake'} height={'20'} width={'20'} viewBox={'0 0 20 20'}/>Born June 26, 1980</li>
                <Line/>
                <li><Icon iconId={'location'} height={'20'} width={'20'} viewBox={'0 0 20 20'}/>2239 Hog Camp Road
                    Schaumburg
                </li>
                <Line/>
                <li><Icon iconId={'message'} height={'20'} width={'20'} viewBox={'0 0 20 20'}/>charles5182@ummoh.com
                </li>
                <Line/>
                <li><Icon iconId={'call'} height={'20'} width={'20'} viewBox={'0 0 20 20'}/>33757005467</li>
            </ul>

        </StyledAbout>
    );
};

export const StyledAbout = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  padding: 39px 2px 53px 22px;
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #490057;
  //opacity: 0.7;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 25px;
`

