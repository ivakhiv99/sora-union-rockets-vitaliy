import styled from 'styled-components';


const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const ButtonPlaceholder = styled.div`
    width: 15px;
    height: 15px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #333;
`;

const StyledInput = styled.input`
    outline: none;
    border-radius: 5px;
    height: 35px;
    padding: 0 15px;
    margin-bottom: 20px;
    border: #777 solid 1px;
`; 

const StyledButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    width: 120px;
    height: 35px;
    padding: 5px 10px;
    text-align: center;
    border-radius: 5px;
`;

export { FlexRow, ButtonPlaceholder, StyledInput, StyledButton };
