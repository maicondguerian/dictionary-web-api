import styled from "styled-components";
import { BiBook, BiMoon } from "react-icons/bi";


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
export  const Header = ({Icon, size, color}) =>{
    return(
        <StyledHeader>
            <ul>
                <li> {Icon ? <Icon size={size} color={color} /> : <></>} </li>
                <li> <input type="radio" name="" id="" /><BiMoon size={20} /> </li>
            </ul>
        </StyledHeader>
    )

} 

// export const StyledButton = styled.button`
//     height: 60px;
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
  

