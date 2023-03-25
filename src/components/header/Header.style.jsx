import styled, { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { MyContext } from "../../context/Mycontext";
import {  HiMoon, HiOutlineSun } from "react-icons/hi";


const StyledHeader = styled.nav`
width: 1000px;

ul{
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    li{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
}
`
const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    height: 40px;
    width: 40px;
    color: ${props => props.theme.colors.softDark};
    cursor: pointer;
`

const Button = ({ Icon, size, children, onClick, color }) => {
    return (
      <StyledButton size={size} color={color} onClick={onClick}>
        {Icon ?  <Icon size={size} color={color} /> : <></>}
        {children}
      </StyledButton>
    );
  };
  
export  const Header = ({ Icon, size, color, onClick }) =>{
    const { handleTheme } = useContext(MyContext)
    return(
        <StyledHeader>
            <ul>
                <li> 
                    <Button>
                        {Icon ? <Icon size={size} color={color}  onClick={onClick}/> : <></>}
                    </Button>
                </li>
                <li>
                    <Button Icon={HiMoon} size={30} onClick={handleTheme}/>
                </li>
            </ul>
        </StyledHeader>
    )

} 
