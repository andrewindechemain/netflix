import React from 'react';
import styled from 'styled-components';

const Infoplacard = ()=> {
  return(
        <>
        <Container>
        <h1 id="intro-text">Watch everywhere.</h1>
        <span id="first-line">Stream unlimited movies and TV shows</span>
        <span id="second-line">on your phone, tablet, laptop,and TV.</span>
        </Container>
        </>
      );
    }

const Container = styled.div`
  text-align: left;
  display: grid;
  padding-top:1em;
  padding-left:14em;
  padding-bottom: 4em;
  border-top:solid hsla(0, 0%, 50%,30%) 8px;
  border-bottom:solid hsla(0, 0%, 50%,30%) 8px;
@media only screen and (max-width: 768px){
  position: absolute:
  line-height: 2;
  font-size:18px;
  padding: 2em 1em 4em;
  margin:0px;
  gap:10px;
  #first-line,#second-line{
    font-size: 16px;
  }
  #intro-text,#first-line,#second-line{
    margin: 10px;
    line-height: 16px;
  }
}
`;
export default Infoplacard;
