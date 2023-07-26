import React from 'react';
import {FlexWrapper} from "src/components/flex-wrapper/FlexWrapper";
import {StyledAvatar} from "src/components/styled-avatar/StyledAvatar";
import Ava from "src/assets/images/img&bg.png";
import {CoverImg, CoverImgWrapper, TextWrapper} from "src/layout/section/Main";
import {UserName} from "src/components/user-name/UserName";
import {Icon} from "src/components/icon/Icon";
import PostImg from "src/assets/images/post-img.webp";
import {Title} from "src/layout/posts/Posts";
import styled from "styled-components";
import {Line} from "src/components/line/Line";

export const Post = () => {
    return (
        <>
            <Line/>
            <FlexWrapper padding={'20px 0'} align={'center'}>
                <StyledAvatar src={Ava} width={'80'} height={'80'}/>
                <PostWrapper>
                    <TextWrapper>
                        <UserName name={'Charles'} surName={'Deo'} size={'16px'} lineHeight={'22px'}/>
                        <Title>
                            15 min ago
                        </Title>
                    </TextWrapper>
                    <Icon iconId={'more'} width="24" height="24" viewBox="0 0 24 24"/>
                </PostWrapper>
            </FlexWrapper>

            <CoverImgWrapper>
                <CoverImg src={PostImg}/>
            </CoverImgWrapper>

            <FlexWrapper align={'center'} padding={'20px 0'} gap={'15px'}>
                <UserName name={'Charles'} surName={'Deo'} size={'16'}/>
                <Title>
                    New Blazer out here... $500!!!!!!
                </Title>
            </FlexWrapper>
            <FlexWrapper gap={'50px'} padding={'0 0 15px 0'}>
                <StyledSpan><Icon iconId={'favoriteBorder'} height={'26'} width={'26'}
                                  viewBox={'0 0 26 26'}/> 1,498</StyledSpan>
                <StyledSpan><Icon iconId={'chat'} height={'26'} width={'26'} viewBox={'0 0 26 26'}/> 3,000</StyledSpan>
            </FlexWrapper>
        </>
    );
};


const PostWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const StyledSpan = styled.span`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #490057;
`
