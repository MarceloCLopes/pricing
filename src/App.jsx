import styled from "styled-components";
import Pricing from "./components/Pricing";

function App() {
  return (
    <MainContainer>
      <Pricing
        headerText="Free"
        background="linear-gradient(120deg, #D4FC79 0%, #96E6A1 100%)"
        shadow="#96E6A1"
        currency="R$"
        duration="m"
        price={7}
        subTitle="Para projetos planejados"
        priceText="Traga seus designs para o próximo nível e exporte-os."
        buttonContent="Iniciar"
        data={[
          { value: false, text: "3 novos projetos / mês" },
          { value: true, text: "Biblioteca ativa" },
          { value: false, text: "Interação básica" },
        ]}
      />
      <Pricing
        headerText="Free"
        background="linear-gradient(120deg, #D4FC79 0%, #96E6A1 100%)"
        shadow="#96E6A1"
        currency="R$"
        duration="m"
        price={7}
        subTitle="Para projetos planejados"
        priceText="Traga seus designs para o próximo nível e exporte-os."
        buttonContent="Iniciar"
        data={[
          { value: false, text: "3 novos projetos / mês" },
          { value: true, text: "Biblioteca ativa" },
          { value: false, text: "Interação básica" },
        ]}
      />
      <Pricing
        headerText="Free"
        background="linear-gradient(120deg, #D4FC79 0%, #96E6A1 100%)"
        shadow="#96E6A1"
        currency="R$"
        duration="m"
        price={7}
        subTitle="Para projetos planejados"
        priceText="Traga seus designs para o próximo nível e exporte-os."
        buttonContent="Iniciar"
        data={[
          { value: false, text: "3 novos projetos / mês" },
          { value: true, text: "Biblioteca ativa" },
          { value: false, text: "Interação básica" },
        ]}
      />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f1ff;
`;

export default App;
