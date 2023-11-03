import styled, { css } from "styled-components";

export const Wrapper = styled.form`
    color: ${({ theme }) => theme.secondaryColor};
    background-color: ${({ theme }) => theme.primaryColor};
    border: 2px solid ${({ theme }) => theme.secondaryColor};
    border-radius: 10px;
    padding: 20px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
    padding: 20px 0px;

    @media (max-width: 524px) {
        grid-template-columns: 1fr;
    }

    ${({ $clock }) => $clock && css`
        grid-template-columns: 1fr;
        text-align: right;
        border-bottom: none;
        padding: 0px;
        font-family: 'Inconsolata', monospace;
    `}

    ${({ $button }) => $button && css`
        grid-template-columns: 1fr;
        border-bottom: none;
    `}

    ${({ $result }) => $result && css`
        grid-template-columns: 1fr;
        border-bottom: none;
        font-size: 20px;
        text-align: center;
        padding: 0;
    `}
`;

export const Field = styled.input`
    width: 100%;
    text-align: center;
    background-color: ${({ theme }) => theme.accentColor};
    border: none;
    color: ${({ theme }) => theme.secondaryColor};
    padding: 4px;
    transition: 200ms ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.accentHover};
    }
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.secondaryColor};
    padding: 8px;
    transition: 200ms ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.accentHover};
    }
`;