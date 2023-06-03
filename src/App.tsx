import './App.css';
import styled from 'styled-components';
import {Header} from "src/layout/header/Header";
import {Main} from "src/layout/section/Main";
import {Menu} from "src/layout/menu/Menu";
import {About} from "src/layout/section/About";
import {Posts} from "src/layout/section/Posts";



function App() {
    return (
        <GridContainer>
<GridItem><Menu/></GridItem>
<GridItem><Header/></GridItem>
<GridItem><Main/></GridItem>
<GridItem><About/></GridItem>
<GridItem><Posts/></GridItem>
<GridItem>6</GridItem>
<GridItem>7</GridItem>
<GridItem>8</GridItem>


        </GridContainer>
    );
}

export default App;

const GridContainer = styled.div`
   height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-auto-rows: minmax(auto, auto);
  //justify-items: center;
  //align-items: center;
  gap: 25px;
  
  @media screen and (max-width: 1200px){
  &{
    grid-template-columns: repeat(4, 1fr);
  }

    @media screen and (max-width: 576px){
      &{
        grid-template-columns: repeat(2, 1fr);
      }
}
`;

const GridItem = styled.div`
background-color: aqua;
  
  &:nth-child(1){
    grid-column: 1/2;
    grid-row: 1/8;
  }
  
  &:nth-child(2){
    grid-column: 2/5;
    grid-row:1/2;
    margin-top: 18px;
  }
  &:nth-child(3){
    grid-column: 2/5;
    grid-row:2/3;
  }

  &:nth-child(4){
    grid-column: 2/3;
    grid-row:3/5;
  }

  &:nth-child(5){
    grid-column: 3/4;
    grid-row:3/7;
  }
  &:nth-child(6){
    grid-column: 4/5;
    grid-row:3/4;
  }

  &:nth-child(7){
    grid-column: 4/5;
    grid-row:4/7;
  }

  &:nth-child(8){
    grid-column: 2/5;
    grid-row:7/8;
  }
  @media screen and (max-width: 576px){
    &:nth-child(1){
      grid-column: 1/5;
      grid-row: 1/2;
    }
    &:nth-child(2){
      grid-column: 1/5;
      grid-row:2/3;
    }
    &:nth-child(3){
      grid-column: 1/5;
      grid-row:3/4;
    }
    &:nth-child(4){
      grid-column: 1/5;
      grid-row:4/5;
    }
    &:nth-child(5){
      grid-column: 1/5;
      grid-row:5/6;
    }
    &:nth-child(6){
      grid-column: 1/5;
      grid-row:6/7;
    }

    &:nth-child(7){
      grid-column: 1/5;
      grid-row:7/8;
    }
    &:nth-child(8){
      grid-column: 1/5;
      grid-row:8/8;
    }
  }
`