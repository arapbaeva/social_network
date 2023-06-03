import React from 'react';
import {Icon} from "src/components/icon/Icon";
import styled from "styled-components";

export const Input = () => {
    return (
        <Form>
            <Box>
            <Field type={'text'} placeholder={'Search'} color={'#490057'} />
                <IconWrapper>
                    <Icon iconId={'searchIcon'}/>
                </IconWrapper>
            </Box>
        </Form>

    );
};

const Form = styled.form`
  width: 100%;
  max-width: 980px;
`

const Box = styled.div`
  position: relative;
`

const Field = styled.input.attrs(({type, placeholder, color}) => ({
    type: type,
    placeholder: placeholder,
    color: color
}))`
  //margin: 10px 0;
  width: 100%;
  height: 62px;
  background: #FFFFFF;
  border-radius: 5px;
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #490057;
  opacity: 0.7;
  padding-left: 4rem;
  border: none;
  &::placeholder{
    color: #490057;
  }
`

const IconWrapper = styled.div`
position: absolute;
  transform: translateY(-45%);
  padding: 4px;
  top:50%;
  left:25px;
`

