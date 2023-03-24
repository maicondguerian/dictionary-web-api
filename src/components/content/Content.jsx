import styled from "styled-components";

const StyledContent = styled.div`
    width: 100%;
    
    ul{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        padding: 0;

        li{
            h1{
                font-size: 55px;
                font-weight: 600;
                color: ${props => props.theme.colors.softDark};
                margin-bottom: 0;
            }
        }
        
    }
    li:last-child{
        background-color: #0077ff2f;
    }
    
    button{
        background-color: transparent;
        border:none;
        height: 80px;
        width: 80px;
        cursor: pointer;
    }
    
     span{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: 2rem;

       
        
        h1{
            font-family: 'Source Code Pro', monospace;
            font-weight: 400;
            color: ${props => props.theme.colors.skyBlue};
            margin: 0;
            margin-left: 5.5rem;
        }
        
        
    }
    
`
const StyledDiv = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;

    span:last-of-type{
        border-bottom: solid 1px;
        color: ${props => props.theme.colors.darkGray};
        width: 850px;
        margin: 2rem 1.5rem;
    }

    span{
        font-size: 28px;
        color: ${props => props.theme.colors.softDark};
    }

   
        
`

export const Content = ({ Icon, size, color }) => {
    return (
        <StyledContent>
            <ul>
                <li><h1>Keyboard</h1></li>
                <li> <button>  {Icon ? <Icon size={size} color={color} /> : <></>} </button> </li>
            </ul>
            <span>
                <h1>/ki:bod/</h1>
                <span></span>
            </span>
            <StyledDiv>
                <span>noun</span>
                <span></span>
            </StyledDiv>
        </StyledContent>
    )
}