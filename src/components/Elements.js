import styled from "@emotion/styled"
import { Link } from "gatsby"

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
