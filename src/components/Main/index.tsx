import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.ShadowSquare>
      <S.Logo
        src="/img/jollyRoger.png"
        alt="logo, desenho de um crânio com chapéu de palha e dois ossos cruzados, como numa  bandeira pirata"
      />
      <S.Title>One Price Games</S.Title>
      <S.Description>
        A boilerplate for a website using NextJS + Typescript + Styled
        Components!
      </S.Description>
      <S.Illustration
        src="/img/onepiecelogo.png"
        alt="logo do desenho one piece, uma caveira de pirata com um chapéu de palha e o nome   one piece ao lado"
      />
    </S.ShadowSquare>
  </S.Wrapper>
)

export default Main
