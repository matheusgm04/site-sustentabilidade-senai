import PageTitle from '../components/PageTitle'
import TextContainer from '../components/TextContainer'
import * as Styled from '../styles/pages/fast-fashion'

function FastFashion() {
  return (
    <>
      <PageTitle>
        <Styled.Title>
          <p>Fast Fashion</p>
          <p>x</p>
          <p>Slow Fashion</p>
        </Styled.Title>
      </PageTitle>
      <Styled.PageContent>
        <TextContainer>
          A expressão que surgiu por volta de 2004, foi criada pela jornalista
          de moda Angela Murrills. Contrapondo-se ao termo fast fashion (“moda
          rápida”, de consumo fácil), o slow fashion foi inspirado pelo conceito
          do slow food, que já reforçava a defesa do meio ambiente e dos
          pequenos produtores na perspectiva da alimentação.
        </TextContainer>
        <TextContainer>
          Ao contrário do fast fashion, sistema de produção de moda atual que
          prioriza a fabricação em massa, a globalização, a ocultação dos
          impactos ambientais do ciclo de vida do produto, o custo baseado em
          mão de obra e materiais baratos sem levar em conta aspectos sociais da
          produção, o slow fashion surgiu como uma alternativa socioambiental
          mais sustentável no mundo da moda.
        </TextContainer>
        <TextContainer>
          A prática do slow fashion preza pela diversidade; prioriza o local em
          relação ao global; promove consciência socioambiental; contribui para
          a confiança entre produtores e consumidores; pratica preços reais que
          incorporam custos sociais e ecológicos; e mantém sua produção entre
          pequena e média escalas.
        </TextContainer>
        <TextContainer>
          A verdade é que, nos bastidores de itens fashion vendidos a valores
          baixíssimos, quase sempre existe a exploração de mão de obra humana e
          o uso irresponsável de recursos naturais e outros insumos. E não se
          engane, grandes corporações com nome no mercado estão envolvidas
          nesses processos.
        </TextContainer>
        <TextContainer>
          Se o acesso de todos a produtos de maior qualidade e socioambientaL
          conscientes é dificultado por inúmeras questões. A boa notícia é que
          fazer escolhas mais sustentáveis na moda é mais simples do que parece.
          De fato, aderir ao slow fashion é criar um novo hábito, como fazer
          reciclagem ou economizar água.
        </TextContainer>
      </Styled.PageContent>
    </>
  )
}

export default FastFashion
