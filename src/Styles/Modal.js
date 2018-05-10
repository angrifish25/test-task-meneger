import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: transparent;
    display: ${props => props.visible ? 'block' : 'none'};
`;
export const ModalBox = styled.div`
    background: #fff;
	position: fixed;
	left: 50%;
    top: 50%;
    border-radius: 3px;
	margin-top: -200px;
	overflow: hidden;
	z-index: 9;
    width: 500px;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    justify-content: center;
	margin-left: -250px;
`;

export const Overlay = styled.div`
    background: #000;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 8;
	opacity: .5;
`;
export const Title = styled.h2`
    text-align: center;
`;
export const Label = styled.label`
    margin-top: 15px;
    margin-bottom: 5px;
`;
export const Select = styled.select`
    margin-top: 15px;
`;
export const Input = styled.input`
    padding: 5px;
    font-size: 20px;
    border-radius: 2px;
    border: 1px solid #e1e1e3;

    &:focus {
        outline: 0;
    }
`;
export const Textarea = styled.textarea`
    padding: 5px;
    font-size: 14px;
    border-radius: 2px;
    border: 1px solid #e1e1e3;
    resize: none;
    min-height: ${props => props.size ? props.size : '100px'};
    &:focus {
        outline: 0;
    }
`;
export const CloseButton = styled.a`
    &:before {
        content: '❌';
        right: 5px;
        top: 6px;
        position: absolute;
    }
`;
export const SaveButton = styled.a`
    text-decoration: none;
    outline: none;
    display: inline-block;
    padding: 10px 30px;
    position: relative;
    overflow: hidden;
    border: 2px solid #01aecc;
    border-radius: 8px;
    color: #01aecc;
    transition: .2s ease-in-out;
    align-self: center;
    margin-top: 20px;

    &:hover {
        background: #01aecc;
        color: #ffffff;
    }

    ${props => props.disabled && css`
        background-color: #959898;
        border-color: #959898;
        color: #FFFFFF;

        &:hover {
            background: #959898;
            color: #ffffff;
        }
  `}
`;