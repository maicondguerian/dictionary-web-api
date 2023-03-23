import styled from "styled-components";

const StyledContent = styled.main`
    width: 100%;

    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        padding: 0;

      li:last-of-type{
        background-color: #0077ff2f;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 80px;

        svg{
            margin-left: 0.5rem;
        }
        
      }
    }

    h1{
        font-size: 55px;
        font-weight: 600;
        color: ${props => props.theme.colors.softDark};
    }
`

export const Main = ( {Icon, size, color} ) => {
    return(
       <StyledContent>
            <ul>
                <li><h1>Keyboard</h1></li>
                <li>  {Icon? <Icon size={size} color={color} /> : <></>} </li>
            </ul>
       </StyledContent> 
    )
}