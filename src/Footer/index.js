import { FooterContainer } from "./styled";

export const Footer = ({ ratesData }) => {

    const fetchDate = () => {
        const fetchIsoDate = new Date(ratesData.date);

        return fetchIsoDate.toLocaleString();
    };

    return (
        <FooterContainer
            $hidden={!ratesData.fetchStatus}
        >
            <strong>Uwaga, wszystkie pola są wymagane.</strong><br/>
            Kursy walut pobrano z app.currencyapi.com w dniu {fetchDate()}
        </FooterContainer>
    )
};