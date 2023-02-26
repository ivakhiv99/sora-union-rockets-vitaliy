import styled from "styled-components";


const SelectInput = styled.select`
    outline: none;
    border-radius: 5px;
    height: 35px;
    padding: 0 15px;
    border: #777 solid 1px;
    margin-bottom: 40px;
`;

const UserSelect = () => {
    return (
        <SelectInput />
    )
};

export default UserSelect;
