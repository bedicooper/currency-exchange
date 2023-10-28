import "./style.css";

const Footer = () => {
    const ratesUpdateDate = new Date(2023, 9, 25);
    const daysDifference = (Date.now() - ratesUpdateDate.getTime()) / 1000 / 3600 / 24;

    return (
        <div className="footer">
            Uwaga, wszystkie pola są wymagane.
            Kursy walut pochodzą z google i były aktualne {Math.floor(daysDifference)} dni temu.
        </div>
    )
};

export default Footer;