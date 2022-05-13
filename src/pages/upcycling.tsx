import NextImage from 'next/image'
import Container from '../components/Container'
import Image from '../components/Image'
import PageTitle from '../components/PageTitle'
import TextContainer from '../components/TextContainer'
import * as Styled from '../styles/pages/upcycling'

function FastFashion() {
  return (
    <>
      <PageTitle>
        <Styled.Title>Upcycling na moda</Styled.Title>
      </PageTitle>
      <Styled.PageContent>
        <TextContainer>
          Apesar de não ser uma técnica nova, mas muito comum em tempos
          economicamente incertos, o Upcycling vem ganhando a atenção de pessoas
          e empresas. Mas afinal, o que é upcycling? O termo upcycling foi
          cunhado pelo ambientalista alemão Reine Pilz, em 1994. Em 2002,
          popularizou-se com a publicação do livro Cradle to cradle: rethinking
          the way we make things (no Brasil, Cradle to cradle: criar e reciclar
          ilimitadamente), escrito pelo arquiteto americano William McDonough em
          parceria com o químico Michael Braungart. Desde então, o conceito vem
          se propagando e conquistando diferentes modelos de negócios, que
          procuram cada vez mais otimizar o ciclo de vida de seus produtos e
          adotar hábitos mais sustentáveis de produção. O upcycling nada mais é
          do que uma técnica de reaproveitamento de materiais já existentes,
          transformando peças que seriam descartadas em aterros sanitários e
          dando um novo sentido para elas. Em outras palavras, usar as sobras
          para criar algo novo. Essa tendência surgiu na década de 90, porém só
          agora estamos de fato olhando com mais atenção. Um dos motivos é
          porque estamos cada vez mais em busca de alternativas sustentáveis
          para o consumo do futuro.
        </TextContainer>
        <Container>
          <Styled.ImageContainer>
            <NextImage
              src='/assets/images/banner-1.svg'
              width={938}
              height={261}
            />
          </Styled.ImageContainer>
          <Styled.BrandTitle>
            Marcas que fazem uso do upcycling
          </Styled.BrandTitle>
          <Styled.BrandName>VENTANA</Styled.BrandName>
          <TextContainer>
            Ventana da língua espanhola, janela. Desde 2012, Gabrielle Pilloto
            traz, através de suas peças, uma janela com um novo olhar para a
            moda. “Através do nosso processo criativo, queremos desacostumar o
            olhar ao óbvio e transformar peças e tecidos do nosso cotidiano em
            arte”, explica a criadora da Ventana.
          </TextContainer>
          <TextContainer>
            <Styled.ImageContainer>
              <Image
                src='/assets/images/image-1.svg'
                width={292}
                height={365}
              />
              <Image
                src='/assets/images/image-2.svg'
                width={517}
                height={323}
              />
            </Styled.ImageContainer>
          </TextContainer>
          <Styled.BrandName>MIU MIU</Styled.BrandName>
          <TextContainer>
            Miu Miu apresentou a coleção “Upcycled”, no fim de 2020, composta
            por um garimpo de peças únicas do mundo todo dos anos 1930 a 1980,
            que originaram uma coleção exclusiva de apenas 80 vestidos.
          </TextContainer>
          <TextContainer>
            <Styled.ImageContainer>
              <Image
                src='/assets/images/image-3.svg'
                width={248}
                height={363}
              />
              <Image
                src='/assets/images/image-4.svg'
                width={248}
                height={363}
              />
              <Image
                src='/assets/images/image-5.svg'
                width={248}
                height={363}
              />
              <Image
                src='/assets/images/image-6.svg'
                width={248}
                height={363}
              />
            </Styled.ImageContainer>
          </TextContainer>
        </Container>
      </Styled.PageContent>
    </>
  )
}

export default FastFashion
