import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import PageTitle from '../components/PageTitle'
import TextContainer from '../components/TextContainer'
import * as Styled from '../styles/pages/desflies'

SwiperCore.use([Navigation])

function Desfiles() {
  const items = [
    {
      id: 1,
      content:
        'Integrar a sustentabilidade ao design e à produção de todos os eventos de moda',
    },
    {
      id: 2,
      content: 'Eliminar o plástico descartável e instalar fontes de água',
    },
    {
      id: 3,
      content:
        'Fazer upcycling e redistribuir para dar uma segunda vida à decoração e aos materiais',
    },
    {
      id: 4,
      content: 'Reutilizar materiais durante toda a produção',
    },
    {
      id: 5,
      content: 'Classificar e reciclar resíduos',
    },
    {
      id: 6,
      content: 'Minimizar o uso de combustíveis fósseis',
    },
    {
      id: 7,
      content: 'Viajar com eficiência e reduzir vôos não essenciais',
    },
    {
      id: 8,
      content: 'Implementar compensação operacional de carbono',
    },
    {
      id: 9,
      content: ' Doar 1% por cento em prol o planeta',
    },
    {
      id: 10,
      content:
        'Oferecer refeições responsáveis e minimizar o desperdício de alimentos',
    },
  ]

  return (
    <>
      <PageTitle>Desfiles</PageTitle>
      <Styled.PageContent>
        <TextContainer>
          De fato, o tanto que já se falava de sustentabilidade na moda acaba
          sendo direcionado mais a questões relacionadas a cadeia de
          fornecedores, a escolha de materiais e aumento de sobrevida das
          roupas. Mas e os desfiles? Especialmente os realizados por grandes
          marcas de luxo com budget para criar 15 minutos de uma experiência que
          pode perdurar por anos na nossa memória. O desfile ainda é uma das
          mais fortes ferramentas de marketing da moda, mas qual o preço disso?
        </TextContainer>
        <TextContainer>
          Descarte de cenários, acúmulo de lixo causado por embalagens
          plásticas, restos de catering, impressão do convite que será jogado no
          lixo, excesso do uso de energia elétrica e viagens de avião por parte
          de convidados, modelos e outros profissionais são apenas alguns dos
          pontos que podemos destacar.
        </TextContainer>
        <TextContainer>
          Portanto, os produtores de eventos e desfiles não podem ficar de fora
          desta discussão e deste momento em que ao menos parte da indústria se
          esforça para mudar o mindset.
        </TextContainer>
        <TextContainer>
          Pois Bureau Betak, com o fundador Alex de Betak são os pioneiros em
          fazer desfiles com essa pegada ecológica .No ano de 2021, eles
          receberam a certificação ISO 20121, um selo internacional para
          gerenciamento de eventos sustentáveis. Como resultado, todos os
          projetos realizados pelo Bureau Betak (que tem sedes em Paris, Nova
          York e Xangai) serão projetados (da compra à produção) com uma
          abordagem mais sustentável ao meio ambiente.
        </TextContainer>
        <TextContainer>
          O fundador Alex de Betak estabeleceu 10 “mandamentos verdes” que
          guiará sua equipe em todas as produções. Eles incluem uma política de
          plásticos de uso único zero, reciclagem de 100% dos resíduos de
          eventos e redução de 25% de suas emissões de CO2 até 2022.
        </TextContainer>
        <Styled.PageContainer>
          <Styled.Row>
            <Styled.ListTitle>Bureau e os 10 mandamentos</Styled.ListTitle>
            <Styled.ContentList>
              {items.map((item) => (
                <Styled.ListItem key={item.id}>
                  <span>
                    {item.id.toLocaleString('pt-BR', {
                      minimumIntegerDigits: 2,
                    })}
                  </span>
                  {item.content}
                </Styled.ListItem>
              ))}
            </Styled.ContentList>
            <Styled.ImagesCarousel>
              <Swiper slidesPerView={1} navigation>
                <SwiperSlide>
                  <Image
                    width={500}
                    height={500}
                    src='/assets/images/carousel-1.svg'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={500}
                    height={500}
                    src='/assets/images/carousel-2.svg'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={500}
                    height={500}
                    src='/assets/images/carousel-3.svg'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={500}
                    height={500}
                    src='/assets/images/carousel-4.svg'
                  />
                </SwiperSlide>
              </Swiper>
            </Styled.ImagesCarousel>
          </Styled.Row>
          <Styled.Row>
            <Styled.DesfileTitle>
              Saint Laurent - Primavera Verão 2020, Praias de Malibu
            </Styled.DesfileTitle>
            <Styled.DesfileCarousel>
              <Swiper slidesPerView='auto' navigation spaceBetween={36}>
                <SwiperSlide>
                  <Image
                    width={176}
                    height={264}
                    src='/assets/images/carousel-5.svg'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={176}
                    height={264}
                    src='/assets/images/carousel-6.svg'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={176}
                    height={264}
                    src='/assets/images/carousel-7.svg'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={176}
                    height={264}
                    src='/assets/images/carousel-8.svg'
                  />
                </SwiperSlide>
              </Swiper>
            </Styled.DesfileCarousel>
            <Styled.DesfileTitle>
              Jacquemus - Primavera Verão 2020, Sul da França
            </Styled.DesfileTitle>
            <Styled.DesfileCarousel>
              <Swiper slidesPerView='auto' navigation spaceBetween={36}>
                <SwiperSlide>
                  <Image
                    width={176}
                    height={264}
                    src='/assets/images/carousel-9.svg'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={176}
                    height={264}
                    src='/assets/images/carousel-10.svg'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={176}
                    height={264}
                    src='/assets/images/carousel-11.svg'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={176}
                    height={264}
                    src='/assets/images/carousel-12.svg'
                  />
                </SwiperSlide>
              </Swiper>
            </Styled.DesfileCarousel>
          </Styled.Row>
        </Styled.PageContainer>
      </Styled.PageContent>
    </>
  )
}

export default Desfiles
