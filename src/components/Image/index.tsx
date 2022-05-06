import NextImage from 'next/image'
import * as Styled from './styles'

interface ImageProps {
  width: number
  height: number
  src: string
}

function Image({ width, height, src }: ImageProps) {
  return (
    <Styled.ImageContainer>
      <NextImage width={width} height={height} src={src} />
    </Styled.ImageContainer>
  )
}

export default Image
