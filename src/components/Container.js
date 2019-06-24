import styled from "@emotion/styled"

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.background.backdrop};
  transition: background-color 0.15s ease-out;
`
