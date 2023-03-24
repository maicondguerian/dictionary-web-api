import styled from "styled-components";



const StyledContent = styled.main`
    width: 100%;
    
    ul{
        display: flex;
        justify-content: space-around;
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
        
        
        svg{
            margin-left: 0.5rem;
        }
        
    }
    button{
        background-color: #0077ff2f;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 80px;
        border: none;
    }
    
     span{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        
        h1{
            font-family: 'Source Code Pro', monospace;
            font-weight: 400;
            color: ${props => props.theme.colors.skyBlue};
            margin: 0;
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
        width: 1000px;
        margin: 2rem 2rem;
    }

    span{
        font-size: 28px;
        color: ${props => props.theme.colors.softDark};
    }
        
`

export const Main = ({ Icon, size, color }) => {
    return (
        <StyledContent>
            <ul>
                <li><h1>Keyboard</h1></li>
                <button>  {Icon ? <Icon size={size} color={color} /> : <></>} </button>
            </ul>
            <span>
                <h1>/ki:bod/</h1>
                <span></span>
            </span>
            <StyledDiv>
                <span>
                    noun
                </span>
                <span>
                    
                </span>
            </StyledDiv>

        </StyledContent>
    )
}