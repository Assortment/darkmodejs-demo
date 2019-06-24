import { Link } from "gatsby"
import styled from "@emotion/styled"

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.background.backdrop};
  transition: background-color 0.15s ease-out;
`

export const Content = styled.div`
  max-width: 700px;
  width: 95%;
  padding: 2rem;
  text-align: center;
  color: ${props => props.theme.text.body};
  background-color: ${props => props.theme.background.contentArea};
  border-radius: 0.5rem;
  transition: all 0.15s ease-out;

  > *:last-child {
    margin-bottom: 0;
  }
`

export const Heading = styled.h1`
  color: ${props => props.theme.text.heading};
`

export const StyledLink = styled(Link)`
  color: ${props => props.theme.text.heading};
  text-decoration-color: ${props => props.theme.text.body};

  &:hover {
    text-decoration-color: ${props => props.theme.text.heading};
  }
`
