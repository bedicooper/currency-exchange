import styled from "styled-components";

export const Header = styled.h1`
    margin: 20px 0;
    padding: 8px;
    background-color: ${({ theme }) => theme.secondaryColor};
    color: #0a0b16;
    font-family: Merriweather, serif;
    text-align: center;
    border-radius: 10px;
`;