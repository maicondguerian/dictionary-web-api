import styled from "styled-components";

const StyledHeader = styled.nav`
display: flex;
justify-content: space-between;



/* &:hover{
    eventos
} ...tras cções de css */
`

export const StyledButton = styled.button`
height: 60px;
width: 200px;
padding: 1rem;
border: none;
background-color: ${props => props.theme.colors.softBlue};
box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);

color: ${props => props.theme.colors.white};

&:hover{
    background-color: ${props => props.theme.colors.midBlue};
    box-shadow: 0 0.875rem 1.75rem rgb(31 50 81 / 25%), 0 0.625rem 0.625rem rgb(31 50 81 / 22%);
    transition: all 0.3s ease-in-out;
    
} 

`
StyledButton.defaultProps = {
    children: 'custom-styled-button'
}
