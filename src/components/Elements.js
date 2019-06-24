import styled from "@emotion/styled"

export const Heading = styled.h1`
  color: ${props => props.theme.text.heading};
`

export const Anchor = styled.a`
  color: ${props => props.theme.text.heading};
  text-decoration-color: ${props => props.theme.text.body};

  &:hover {
    text-decoration-color: ${props => props.theme.text.heading};
  }
`
