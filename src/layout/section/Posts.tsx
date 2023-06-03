import React from 'react';
import styled from "styled-components";
import {Line} from "src/components/line/Line";

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
            <Line/>
        </StyledPosts>
    );
};

const StyledPosts = styled.div`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #A303A0;

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

