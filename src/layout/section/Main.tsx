import React from 'react';
import styled from "styled-components";
import IMG from 'src/assets/images/cover-image.webp'
import {StyledAvatar} from "src/components/styled-avatar/StyledAvatar";
import Ava from "src/assets/images/img&bg.png";
import {UserName} from "src/components/user-name/UserName";
import {StyledButton} from "src/components/styled-button/StyledButton";

export const Main = () => {
    return (
        <StyledMain>
            <CoverImgWrapper>
                <CoverImg src={IMG}/>
                <EditCoverButton>
                    Edit Cover Photo
                </EditCoverButton>
            </CoverImgWrapper>

            <AvatarWrapper>
                <StyledAvatar width={'200px'} height={'200px'} src={Ava}/>
            </AvatarWrapper>
        <MainSection>
            <TextWrapper>
                <UserName name={'Aiym'} surName={'Vector'} size={'30px'} color={'#A303A0'} lineHeight={'41px'}/>
                <JobTitle>
                    UI/UX Designer
                </JobTitle>
            </TextWrapper>
            <StyledButton border={'1px solid'}>Edit Profile</StyledButton>
        </MainSection>


        </StyledMain>
    );
};

const MainSection = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 54px  35px 280px;
  
`

const StyledMain = styled.div`
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #C4C4C4;
  border-radius: 10px;
  position: relative;
`
const EditCoverButton = styled(StyledButton)`
  position: absolute;
  bottom: 36px;
  right: 54px;
  z-index: 1;
`;


export const CoverImgWrapper = styled.div`
  position: relative;
  height: 280px;
  border-radius: 5px;
  overflow: hidden;
`;
export const CoverImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-250%, -20%);
`;

export const TextWrapper = styled.div`
margin-left: 50px;
`

export const JobTitle = styled.p`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #A303A0;
  opacity: 0.7;
`

