import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
    padding: 10px 20px;
    color: ${({ theme }) => theme.color.secondary};

    ${({ $hidden }) => $hidden && css`
        display: none;
    `}
`;
