import React from 'react';
import styled from 'styled-components';

const Bottomnav = ()=> {
  return(
        <>
        <Container3>
        <ul className = "Questions" style={{paddingLeft:'0.2em'}}>Questions?Contact us.</ul>
        <Firstlist>
        <ul className="FAQ">FAQ
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
          <li>Netflix Kenya</li>
        </ul>
        </Firstlist>
        <Secondlist>
        <ul className ="Help-Center">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul className="Hidden">Blank</ul>
        </Secondlist>
        <Thirdlist>
        <ul className = "Account">
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Speed Test</li>
          <li>Only on Netflix</li>
        </ul>
        </Thirdlist>
        <Forthlist>
        <ul className ="Media-Center">
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
        <ul className="Hidden">Blank</ul>
        <ul className="Hidden">Blank</ul>
        </Forthlist>
        </Container3>
        </>
      );
    }

const Firstlist = styled.div`
display: inline-block;
padding-right:6em;
text-decoration:underline;
`;
const Secondlist = styled.div`
position: relative;
display: inline-block;
padding-right:6em;
text-decoration:underline;
`;
const Thirdlist = styled.div`
position: relative;
display: inline-block;
padding-right:6em;
text-decoration:underline;
}
`;
const Forthlist = styled.div`
position: relative;
display: inline-block;
text-decoration:underline;
`;
const Container3 = styled.div`
color:grey;
text-decoration:underline;
font-size:16px;
line-height:2em;
display: flex;
flex-flow: row no-wrap;
padding:2em 4em;
color:#D3D3D3;
.Questions{
  position: absolute;
  margin: 6px 2em;
  text-decoration: underline;
}
.FAQ ,.Help-Center,.Account,.Media-Center,.contacts{
  padding: 1.4em;
  margin:3em 2px;
  list-style: none; 
  display: flex;
  flex-direction: column;
  gap: 2px 0px;
}
@media only screen and (max-width: 768px){
  padding: 2em 4px 8em 0em;
  line-height:2em;
  font-size: 14px;
  margin:0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
.Questions{
  position: absolute;
  left:1em;
  margin:0; 
}
}
p{
padding-left:3em;
font-weight:regular;
}
`;
export default Bottomnav;
