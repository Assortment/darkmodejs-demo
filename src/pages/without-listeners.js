import React from "react"
import { Link } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import globalStyles from "../globalStyles"
import themes from "../themes"
import SEO from "../components/seo"
import { Heading } from "../components/Elements"
import { Container } from "../components/Container"
import { Content } from "../components/Content"

const IndexPage = () => {
  return (
    <ThemeProvider theme={themes['no-preference']}>
      <Global styles={globalStyles} />
      <SEO title="Home" />
      <Container>
        <Content>
          <Heading>darkmodejs-demo: no listeners</Heading>
          <p>
            Using the returned removeListeners functionm allows you to remove the DARK and LIGHT query listeners, which is useful if you only want to theme to work on one page.
          </p>
          <p>Try changing your Operating System's theme and you'll notice this page won't change, yet <Link to="/">the homepage will</Link>.</p>
        </Content>
      </Container>
    </ThemeProvider>
  )
}

export default IndexPage
