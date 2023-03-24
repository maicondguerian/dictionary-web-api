import styled from "styled-components";
import {  HiMoon, HiOutlineSun } from "react-icons/hi";
import { useContext } from "react";
import { MyContext } from "../../context/Mycontext";


const StyledHeader = styled.nav`
width: 100%;




ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
    padding: 0;

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

const Button = ({ Icon, size, color, children, onClick }) => {

    return (
      <StyledButton size={size} color={color} onClick={onClick}>
        {Icon ?  <Icon size={size} color={color} /> : <></>}
        {children}
      </StyledButton>
    );
  };
  
export  const Header = ({Icon, size, color, name}) =>{
    const { handleTheme } = useContext(MyContext)
    return(
        <StyledHeader>
            <ul>
                <li> {Icon ? <Icon size={size} color={color} /> : <></>} </li>
                <li> 
                    <Button Icon={HiMoon} size={30} onClick={handleTheme}/>
                 </li>
            </ul>
        </StyledHeader>
    )

} 

// export const StyledButton = styled.button`
//     size: 60px;
//     width: 200px;
//     padding: 1rem;
//     border: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: ${props => props.theme.colors.softBlue};
//     box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);

//     color: ${props => props.theme.colors.white};

// &:hover{
//     background-color: ${props => props.theme.colors.midBlue};
//     box-shadow: 0 0.875rem 1.75rem rgb(31 50 81 / 25%), 0 0.625rem 0.625rem rgb(31 50 81 / 22%);
//     transition: all 0.3s ease-in-out;
// } 

// `
// StyledButton.defaultProps = {
//     children: 'custom-styled-button'
    
// }


// export const ButtonWithIcon = ({ onClick, Icon, children }) => {
//     return (
//       <StyledButton onClick={onClick}>
//         {Icon ? <Icon size={40}/> : <></>}
//         {children}
//       </StyledButton>
//     );
//   };
  

