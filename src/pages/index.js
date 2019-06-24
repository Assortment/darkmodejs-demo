import React from "react"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import GitHubButton from "react-github-btn"

import globalStyles from "../styles/globalStyles"
import SEO from "../components/seo"
import { Container, Content, Heading, StyledLink } from "../styles/styles"

const lightTheme = {
  text: {
    heading: "#000000",
    body: "#777777",
  },
  background: {
    backdrop: "#F7F7F7",
    contentArea: "#EEEEEE",
  },
}

const darkTheme = {
  text: {
    heading: "#FFF",
    body: "#c2c2c2",
  },
  background: {
    backdrop: "#100e17",
    contentArea: "#16141f",
  },
}

const IndexPage = () => (
  <ThemeProvider theme={lightTheme}>
    <Global styles={globalStyles} />
    <SEO title="Home" />
    <Container>
      <Content>
        <Heading>darkmodejs-demo</Heading>
        <p>
          A demonstration of how you can use the @assortment/darkmodejs npm
          package to theme your website based on a user's Operating System
          theme, thanks to the matchMedia API and prefers-color-scheme media
          queries.
        </p>
        <p>
          This example has been created with Emotion and the{" "}
          <StyledLink to="https://emotion.sh/docs/emotion-theming">
            emotion-theming
          </StyledLink>{" "}
          package. You can view the code for this on Github, or look at the
          darkmodejs package with the links below
        </p>
        <StyledLink to="https://www.npmjs.com/package/@assortment/darkmodejs">
          <img
            src="https://img.shields.io/npm/v/@assortment/darkmodejs.svg"
            alt="NPM: @assortment/darkmodejs"
          />
        </StyledLink>
        &nbsp;&nbsp;
        <GitHubButton
          href="https://github.com/assortment/darkmodejs"
          data-show-count="true"
          aria-label="Star assortment/darkmodejs on GitHub"
        >
          Star
        </GitHubButton>
      </Content>
    </Container>
  </ThemeProvider>
)

export default IndexPage
