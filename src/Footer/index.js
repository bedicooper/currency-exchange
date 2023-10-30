import styled from "styled-components";

const FooterContainer = styled.div`
    padding: 10px 20px;
    color: #ddd;
`;

const Footer = () => {
    const ratesUpdateDate = new Date(2023, 9, 25);
    const daysDifference = (Date.now() - ratesUpdateDate.getTime()) / 1000 / 3600 / 24;

    return (
        <FooterContainer>
            Uwaga, wszystkie pola są wymagane.
            Kursy walut pochodzą z google i były aktualne {Math.floor(daysDifference)} dni temu.
        </FooterContainer>
    )
};

export default Footer;