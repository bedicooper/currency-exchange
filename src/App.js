import Main from "./Main";
import Header from "./Header";
import Container from "./Container";
import Section from "./Section";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <Main >
      <Header title={"Przelicznik walut"} />
      <Container >
        <Section
          content={<Form />}
        />
        <Section
          content={"Podaj wartości i waluty aby móc obliczyć."}
        />
      </Container >
      <Footer title={"Uwaga, wszystkie pola są wymagane."} />
    </Main >
  );
}

export default App;