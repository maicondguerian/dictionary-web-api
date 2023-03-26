import {  useState } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Header } from "./components/header/Header.style"
import { theme, darkThemeColor } from "./theme/theme"
import { Container } from "./container/Div.style";
import { SearchBar } from "./components/search/Input";
import { Content } from "./components/content/Content";
import { MyContext } from "./context/Mycontext";
import { TfiBook } from "react-icons/tfi";
import {  HiMoon, HiOutlineSun } from "react-icons/hi";
import { getWordInformations } from "./api/api";

function App() {
  const [toggleTheme, settoggleTheme] = useState(theme);
  const [keyboard, setKeyboard] = useState('');
  const [wordList, setWordList] = useState([]);
  const [iconTheme, setIconTheme] = useState(toggleTheme === theme ? HiMoon : HiOutlineSun)

  const handleKeyboard = (e) => {
    setKeyboard(e.target.value);
  }

  const handleTheme = () => {
    if (toggleTheme === theme) {
      settoggleTheme(darkTheme);
      setIconTheme(HiOutlineSun);
    } else {
      settoggleTheme(theme);
      setIconTheme(HiMoon);
    }
  }
  // useEffect(()=> {
  //   console.log(iconTheme)
  // },[toggleTheme])
  const handlekeyBoardEnter = (event) => {
    if (keyboard !== '' && event.key === "Enter"){
      getWordInformations(keyboard)
      .then(data => {
        setWordList(data);
      })
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
      <MyContext.Provider value={{ handleTheme, handleKeyboard, handlekeyBoardEnter, keyboard, wordList, setWordList }}>
        <Container>
          <Header Icon={TfiBook} size={35} color={'#000f'} />
          <SearchBar />
          <Content />
        </Container>
      </MyContext.Provider>
    </ThemeProvider>
  )
}

export default App;

