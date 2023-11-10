import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-gap: 20px;
    justify-content: center;

    color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.color.primary};
    border: 2px solid ${({ theme }) => theme.color.secondary};
    border-radius: 10px;
    padding: 20px;

    ${({ $hidden }) => $hidden && css`
        display: none;
    `} 
`
export const ErrorPrompt = styled.p`
color: crimson;
`
const rotate = keyframes`   
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`
export const AnimatedImg = styled.img`
    justify-self: center;
    width: 32px;
    pointer-events: none;
    animation: ${rotate} infinite 1500ms linear;
`