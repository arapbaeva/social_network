import React, {FC} from 'react';
import styled, {css} from "styled-components";


type UserNameType = StyledNameType &  {
    name: string
    surName: string
}

export const UserName:FC<UserNameType> = ({name, surName, ...restProps}) => {
    return (
            <StyledName {...restProps}>{`${name} ${surName}`}</StyledName>

    );
};

type StyledNameType = {
    size?: string
    color?: string
    lineHeight?: string
}
export const StyledName = styled.span<StyledNameType>`
  font-size: ${(props) => props.size || '12px'};
  color: ${(props) => props.color || '#490057'};
  line-height: ${(props) => props.lineHeight || '16px'};
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 700;
  margin: 35px 0;
`



