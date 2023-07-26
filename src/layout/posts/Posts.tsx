import React from 'react';
import styled from "styled-components";
import {Line} from "src/components/line/Line";
import {Post} from "src/layout/posts/post/Post";

export const Posts = () => {
    return (
        <StyledPosts>
            <StyledTitle>
                <ul>
                    <li>Followers</li>
                    <li>Following</li>
                    <li>Posts</li>
                </ul>
            </StyledTitle>
            <Post/>
            {/*<Post/>*/}
            <Line/>
        </StyledPosts>
    );
};


type TitlePropsType = {
    lineHeight?: string
    size?: string
    weight?: string
    opacity?: string
}
export const Title = styled.div<TitlePropsType>`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: ${props => props.weight || '300'};
  font-size: ${props => props.size || '10px'};
  color: #490057;
  line-height: ${props => props.lineHeight || '14px'};
  opacity: ${props => props.opacity || 'none'};
`

const StyledPosts = styled.div`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #A303A0;
  padding: 0 30px 30px 30px;
  background: #FFFFFF;
`

const StyledTitle = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 40px 144px 30px 47px;

  ul {
    display: flex;
    flex-direction: row;
  }
`



