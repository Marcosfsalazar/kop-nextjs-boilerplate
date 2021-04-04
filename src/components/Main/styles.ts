import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #c8472c;
  background-image: linear-gradient(45deg, #c8472c 26%, #0b3075 86%);
  color: #fefefe;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`

export const ShadowSquare = styled.div`
  max-width: min(60rem, 100%);
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 2rem;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 1rem 1rem 2rem 0 black;
  }
`

export const Logo = styled.img`
  width: 12rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  text-shadow: 2px 2px #000000;
  font-size: 2rem;
  font-weight: 600;
`

export const Description = styled.h2`
  margin-bottom: 2rem;
  text-shadow: 2px 2px #000000;
`

export const Illustration = styled.img`
  width: min(20rem, 100%);
`
