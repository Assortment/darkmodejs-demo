import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import GitHubButton from "react-github-btn"
import darkmodejs from "@assortment/darkmodejs"

import globalStyles from "../globalStyles"
import themes from "../themes"
import SEO from "../components/seo"
import { Heading, Anchor } from "../components/Elements"
import { Container } from "../components/Container"
import { Content } from "../components/Content"
import { ThemeIndicator } from "../components/ThemeIndicator"

const IndexPage = () => {
  const [theme, setTheme] = useState("light")

  const onChange = (activeTheme, themes) => {
    switch (activeTheme) {
      case themes.DARK:
        setTheme(themes.DARK)
        console.log(`current theme: ${themes.DARK}`)
        break
      case themes.LIGHT:
        setTheme(themes.LIGHT)
        console.log(`current theme: ${themes.LIGHT}`)
        break
      case themes.NO_PREF:
        setTheme(themes.NO_PREF)
        console.log(`current theme: ${themes.NO_PREF}`)
        break
      case themes.NO_SUPP:
      default:
        setTheme(themes.NO_SUPP)
        console.log(`current theme: ${themes.NO_SUPP}`)
        break
    }
  }

  useEffect(() => {
    const dmjs = darkmodejs({ onChange });
    
    return () => {
      dmjs.removeListeners();
    }
  }, []);

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
            <Anchor href="https://emotion.sh/docs/emotion-theming">
              emotion-theming
            </Anchor>{" "}
            package. You can{" "}
            <Anchor href="https://github.com/Assortment/darkmodejs-demo">
              view the code for this
            </Anchor>{" "}
            on Github, or look at the darkmodejs package with the links below:
          </p>
          <Anchor href="https://www.npmjs.com/package/@assortment/darkmodejs">
            <img
              src="https://img.shields.io/npm/v/@assortment/darkmodejs.svg"
              alt="NPM: @assortment/darkmodejs"
            />
          </Anchor>
          &nbsp;&nbsp;
          <GitHubButton
            href="https://github.com/assortment/darkmodejs"
            data-show-count="true"
            aria-label="Star assortment/darkmodejs on GitHub"
          >
            Star
          </GitHubButton>
          <p>Click here to try out <Anchor as={Link} to="/without-listeners">removing the listeners</Anchor></p>
          <ThemeIndicator>Current theme: "{theme}"</ThemeIndicator>
        </Content>
      </Container>
    </ThemeProvider>
  )
}

export default IndexPage
