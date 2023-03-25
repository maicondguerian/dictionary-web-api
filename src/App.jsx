import {  useState } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Header } from "./components/header/Header.style"
import { theme, darkThemeColor } from "./theme/theme"
import { StyledDiv } from "./container/Div.style";
import { SearchBar } from "./components/search/Input";
import {  TfiVolume } from "react-icons/tfi";
import { Content } from "./components/content/Content";
import { MyContext } from "./context/Mycontext";
import { TfiBook } from "react-icons/tfi";



function App() {
  const [toggleTheme, settoggleTheme] = useState(theme);
  const [keyboard, setKeyboard] = useState('');
  const [inpWord, setInpWord] = useState('');

  const handleKeyboard = (e) => {
    setKeyboard(e.target.value);
  }

  const handleWord = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyboard}`)
      .then((resp) => resp.json())
      .then(data => {
        data.forEach((data) => {
          console.log(data.phonetics[0])
          console.log(data.word)
          console.log(data.meanings[2].definitions[3])
          setInpWord(data)
        })
      })
  }

  const handleTheme = () => {
    if (toggleTheme === theme) {
      settoggleTheme(darkTheme);
    } else {
      settoggleTheme(theme);
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
          <Header Icon={TfiBook} size={35} props={'#000c'} />
          <SearchBar />
          <Content Icon={TfiVolume} size={55} color={'#0079ff'} />
        </StyledDiv>
      </MyContext.Provider>
    </ThemeProvider>
  )
}

export default App;

