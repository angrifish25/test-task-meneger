import styled from 'styled-components';

export const TaskBox = styled.div`
    padding: 10px 5px 10px 5px;
    box-shadow: 1px 2px 0px #e1e1e3;
    background-color: #ffffff;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    position: relative;

    &:not(:first-child) {
        margin-top: 15px;
    }
    &:last-child {
        margin-bottom: 25px;
    }
`;

export const RemoveButton = styled.a`
    display: none;
    ${TaskBox}:hover &{
        display: block;
    }

    &:before {
        content: '❌';
        right: 0;
        top: 6px;
        position: absolute;
    }
`;
export const InputTask = styled.textarea`
    width: 100%;
    font-size: 17px;
    &:focus {
        outline: 0;
    }
`;

export const LabelTask = styled.span`
    max-width: 90%;
    word-wrap: break-word;
    font-size: 18px;
`;