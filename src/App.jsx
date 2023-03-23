import { useState } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Header } from "./components/header/Header.style"
import { theme, darkThemeColor } from "./theme/theme"
import { StyledDiv } from "./container/Div.style";
import { SearchBar } from "./components/serach/Input";
import { BiBook, BiPlay } from "react-icons/bi";
import { Main } from "./components/serach/main/Content";
import { CiPlay1 } from "react-icons/ci";


function App() {
  const [toggleTheme, settoggleTheme] = useState(theme)

  const handleTheme = () => {
    if (toggleTheme === theme) {
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
  const GlobalStyle = createGlobalStyle`
    body{
      background-color: ${props => props.theme.colors.softWhite};
      font-family: 'Roboto Serif', serif;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      outline: none;
      border: none;
    }
  `

  return (
    <ThemeProvider theme={toggleTheme}>
      <GlobalStyle />
      <StyledDiv>
        <Header Icon={BiBook} size={40} color={'gray'} />
        <SearchBar />
        <Main Icon={BiPlay} size={55} color={'#0079ff'} />
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App

