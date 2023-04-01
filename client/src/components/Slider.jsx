import React from 'react'
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Slider = () => {
  return (
    <div className='w-[100%] h-[100vh] flex] relative overflow-hidden'>
      <div direction="left" className='flex w-[50px] h-[50px] absolute top-0 bottom-0 m-auto left-5 justify-center align-middle'>
        <ArrowBackIosIcon />
      </div>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://i.postimg.cc/13fxzcXc/hoodie-mockup-of-a-man-with-cool-locs-m10777-2.png" />
          </ImgContainer>
          <InfoContainer></InfoContainer>
        </Slide>
      </Wrapper>

      <div direction="right" className='flex w-[50px] h-[50px]  absolute top-0 bottom-0 m-auto right-5  justify-center align-middle'>
        <ArrowForwardIosIcon />
      </div>

    </div>
  )
}

export default Slider