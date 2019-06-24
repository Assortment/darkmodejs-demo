import React, { useEffect, useState } from "react"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import GitHubButton from "react-github-btn"

import globalStyles from "../globalStyles"
import themes from "../themes"
import SEO from "../components/Seo"
import { Container } from "../components/Container"
import { Content } from "../components/Content"
import { Heading, StyledLink } from "../components/Elements"

const IndexPage = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    setTheme("dark")
  }, [])

  return (
    <ThemeProvider theme={themes[theme]}>
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
}

export default IndexPage
