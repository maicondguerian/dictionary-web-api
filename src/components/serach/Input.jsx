import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../../context/Mycontext";

const StyledInput = styled.input`
height: 50px;
width: 900px;
background-color: transparent;
border: none;
outline: none;
padding: 0 1rem 0 1rem;
font-size: 20px;

&{
    ::placeholder{
        font-size: 20px;
        color: #b6b0b0ba;
       
    }
}

`

const StyledWrapper = styled.div`
    box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
    height: 50px;
    width: 900px;
    border-radius: 10px;
    display: flex;
    padding: 0 0 0 1rem;
    align-items: center;

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 1rem;
    }

`
const SearchIcon = ({ size }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            width={size}
            viewBox="0 0 25 24"
        >
            <path
                d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                fill="#0079ff"
            />
        </svg>
    );
};

export const SearchBar = () => {
    const { handleKeyboard, handleWord } = useContext(MyContext);
    return (
        <StyledWrapper>
            <StyledInput
                type="text"
                placeholder="type a word"
                onChange={handleKeyboard}
            />
            <button onClick={handleWord}>
                <SearchIcon size="25px" />
            </button>
        </StyledWrapper>
    )

}