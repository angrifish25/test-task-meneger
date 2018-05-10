import styled from 'styled-components';

export const BoardCol = styled.div`
    width: 30%;
    background: ${props => props.warning ? '#ff5757' : '#e2e4e6'};
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    box-shadow: 1px 2px 0px #e1e1e3;

`;
export const Header = styled.div`
    font-weight: 700;
    position: relative;
    white-space: normal;
    flex-shrink: 0;
    padding: 5px;
`;
export const Body = styled.div`
    padding: 0 5px;
    overflow: auto;
`;

export const AddButton = styled.a`

    &:before {
        content: '+';
        font-size: 28px;
        right: 10px;
        top: -3px;
        color: #1f9448;
        position: absolute;
    }
`;