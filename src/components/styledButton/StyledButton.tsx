import styled, {css} from "styled-components";


type StyledButtonPropsType = {
    border?: string
}
 export const StyledButton = styled.button<StyledButtonPropsType>`
  border: ${props=>props.border || 'none'};
  width: 172px;
  height: 44.67px;
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #A303A0;
   border-radius: 10px;
`