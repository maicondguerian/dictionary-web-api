import { useState } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { StyledButton } from "./components/header/Header.style"
import {  StyledDiv } from "./container/Div.style"
import { theme, darkThemeColor } from "./theme/theme"

function App() {
const [toggleTheme, settoggleTheme] = useState(theme)

const handleTheme = () => {
  if(toggleTheme === theme){
    settoggleTheme(darkTheme)
  } else {
    settoggleTheme(theme)
  }
}
const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...darkThemeColor
  }
}
  const GlocablStyle = createGlobalStyle`
    body{
      background-color: ${props => props.theme.colors.softWhite};
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
  `

  return (
    <ThemeProvider theme={toggleTheme}>
      <GlocablStyle />
      <StyledDiv>
        <StyledButton onClick={handleTheme} />
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
