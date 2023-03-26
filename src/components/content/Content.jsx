import { useContext } from "react";
import styled from "styled-components";
import { TfiVolume } from "react-icons/tfi";
import { MyContext } from "../../context/Mycontext";

const StyledContent = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    
    ul{
        display: flex;
        justify-content: space-between;
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
    ul:first-of-type li:last-child{
        background-color: #0077ff2f;
    }
    
    button{
        background-color: transparent;
        border:none;
        height: 70px;
        width: 70px;
        cursor: pointer;
    }
    
     span{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
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
        align-items: center;
        margin-top: 2rem;

    span:last-of-type{
        border-bottom: solid 1px;
        color: ${props => props.theme.colors.darkGray};
        width: 100%;
        margin: 2rem 0 2rem 1rem;
    }

    span{
        font-size: 23px;
        color: ${props => props.theme.colors.softDark};
    }

`
const StyledSpan = styled.div`
    display: flex;
    /* background-color: yellow; */
   h2{
            color: ${props => props.theme.colors.darkGray};
            font-weight: 200;
        }

    li{
            padding: 1rem;
            background-color: transparent !important;
            color: ${props => props.theme.colors.softBlue};
            font-size: 22px;

        }

`
const StyledList = styled.div`
    width: 100%;
    /* background-color: #ff00002f; */
    h2{
            color: ${props => props.theme.colors.darkGray};
            font-weight: 200;
            
        }

    ul{
        display: flex;
        align-items: baseline;
        flex-direction:column;
        list-style:disc;
        color: ${props => props.theme.colors.softDark};
        padding-left: 3rem;
        height: 100%;
        width: 100%;
        font-size: 19px;
        
        li{
            padding: 1rem;
            background-color: transparent !important;
        }
    }
`

const Word = ({ value }) => {
    let dataPhonectic = value.phonetics.filter(phonetic => {
        return phonetic.audio.endsWith('.mp3') && phonetic.text && phonetic.text.length > 0;
    });

    if(dataPhonectic.length > 0) {
        dataPhonectic = dataPhonectic[0];
    }

    const playAudio = () => {
        let audio = new Audio(dataPhonectic.audio);
        audio.play();
    }

    return (
        <>
            <ul>
                <li><h1>{value.word}</h1></li>
                {
                    dataPhonectic && dataPhonectic.audio  &&
                    <li> 
                        <button onClick={playAudio}> 
                            <TfiVolume size={55} color='#0079ff' />
                        </button> 
                    </li>
                }
            </ul>
            <span>
                <h1>{dataPhonectic.text}</h1>
                <span></span>
            </span>
            <StyledDiv>
                <span>noun</span>
                <span></span>
            </StyledDiv>
            <StyledList>
                <h2>meaning</h2>
                <ul>
                    <li>Lorem ipsdddddddddddddddum </li>
                    <li>teste Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, officia.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eos dicta voluptatibus suscipit atque magnam aperiam in assumenda eveniet modi eius soluta, esse nesciunt. Nostrum iure totam perspiciatis itaque vero obcaecati. Voluptatibus at eius unde? Dolorem sed a adipisci velit sint quae nihil non atque laborum saepe impedit dolorum beatae, facilis architecto. Voluptatibus mollitia, labore ratione animi eveniet eligendi nam corrupti nulla, corporis dolorem architecto nesciunt totam consequuntur repudiandae eos, explicabo voluptatum quasi facilis fugit iusto deleniti? Repellendus, eaque unde ullam tempore magni quo a placeat ratione adipisci fugit accusamus quas, nemo necessitatibus totam voluptas pariatur minus debitis nihil reprehenderit?</li>
                </ul>
            </StyledList>
            <StyledSpan>
                <ul>
                    <h2>synomyms</h2>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
            </StyledSpan>
            <StyledDiv>
                <span>verb</span>
                <span></span>
            </StyledDiv>
            <StyledList>
                <h2>meaning</h2>
                <ul>
                    <li>Lorem ipsdddddddddddddddum </li>
                    <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime doloribus architecto iste soluta culpa dolorum velit provident, ea veritatis.</span>
                </ul>
            </StyledList>
        </>
    )
}

export const Content = () => {
    const { wordList } = useContext(MyContext);

    return (
        <StyledContent>
            {wordList.map((word, index) =>
                <Word value={word} key={index} />
            )}
        </StyledContent>
    )
}