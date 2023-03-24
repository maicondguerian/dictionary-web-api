import { useEffect, useState } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Header } from "./components/header/Header.style"
import { theme, darkThemeColor } from "./theme/theme"
import { StyledDiv } from "./container/Div.style";
import { SearchBar } from "./components/serach/Input";
import { BiBook, BiPlay } from "react-icons/bi";
import { Content } from "./components/content/Content";
import { MyContext } from "./context/Mycontext";
import { callApi } from "./api/CallApi";


function App() {
  const [toggleTheme, settoggleTheme] = useState(theme);
  const [keyboard, setKeyboard] = useState('');
  const [word, setWord] = useState('');
  
  const handleKeyboard = (e) =>{
    setKeyboard(e.target.value)
  } 

  const handleWord = () => {
    callApi(word)
    .then(resp => resp.json())
    .then(data => {
      setWord(data)
    })
  }


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
      <MyContext.Provider value={{ handleTheme, handleKeyboard, handleWord }}>
        <StyledDiv>
          <Header Icon={BiBook} size={40} color={'gray'} />
          <SearchBar />
          <Content Icon={BiPlay} size={55} color={'#0079ff'} />
        </StyledDiv>
      </MyContext.Provider>
    </ThemeProvider>
  )
}

export default App

