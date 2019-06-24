import styled from "@emotion/styled"

export const Content = styled.div`
  position: relative;
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
