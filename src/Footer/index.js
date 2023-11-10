import { FooterContainer } from "./FooterContainer";

const Footer = ({ ratesData }) => {
    const ratesUpdateDate = new Date(2023, 9, 25);
    const daysDifference = (Date.now() - ratesUpdateDate.getTime()) / 1000 / 3600 / 24;

    return (
        <FooterContainer
            $hidden={!ratesData.fetchStatus}
        >
            Uwaga, wszystkie pola są wymagane.
            Kursy walut pochodzą z google i były aktualne {Math.floor(daysDifference)} dni temu.
        </FooterContainer>
    )
};

export default Footer;