import Image from '../components/Image'
import PageTitle from '../components/PageTitle'
import TextContainer from '../components/TextContainer'
import * as Styled from '../styles/pages/index'

function Home() {
  return (
    <>
      <PageTitle>Moda Sustentável</PageTitle>
      <Styled.PageContent>
        <TextContainer>
          A indústria têxtil é uma das mais poluentes do mundo, sendo uma grande
          fabricante de resíduos e produtora de partículas ou gases tóxicos.
          Esses dejetos contribuem para mudanças climáticas que afetem nosso
          planeta, como alagamentos, secas, piora na qualidade de vida e
          mudanças no comportamento social das pessoas.
        </TextContainer>
        <TextContainer>
          Por isso, para a sustentabilidade, existir é preciso. A moda
          sustentável prioriza o respeito aos recursos naturais, aos animais e à
          sociedade em todas as suas etapas, valorizando inclusive as pessoas
          envolvidas na produção para incentivar o consumo consciente.
        </TextContainer>
        <TextContainer>
          Com base nesses princípios, o movimento influencia as pessoas a
          trabalharem com matérias-primas menos poluentes, também produzidas de
          forma sustentável. Os objetivos são: reduzir o desperdício e usar
          adequadamente os recursos. Logo, a sustentabilidade aplicada à moda
          propõe uma produção mais socializada, sem a exploração da mão de obra,
          com remuneração justa. Além disso, oferece peças cujo design e a
          funcionalidade favorecem o uso duradouro dos itens.
        </TextContainer>
        <Styled.ImageRow>
          <Image width={402} height={294} src='/assets/images/image-1.png' />
          <Image width={402} height={294} src='/assets/images/image-2.png' />
        </Styled.ImageRow>
      </Styled.PageContent>
    </>
  )
}

export default Home
