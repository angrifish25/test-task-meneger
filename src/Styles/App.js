import styled from 'styled-components';


export const AppBox = styled.div`
    display: flex;
    background-color: #01aecc;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
`;
export const BoardsArea = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100%;
`;

export const AddButton = styled.a`

    text-decoration: none;
    outline: none;
    display: inline-block;
    padding: 10px 30px;
    margin: 10px 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid #ffffff4d;
    border-radius: 8px;
    color: #ffffff;
    transition: .2s ease-in-out;
    align-self: center;

    &:hover {
        background: #ffffff4d;
    }
`;