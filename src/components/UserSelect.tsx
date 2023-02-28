import { useState, useEffect, FC } from "react";
import styled from "styled-components";
import useRequest from '../hooks/request';
import { StyledInput } from '../styles/common';
import useDebounse from '../hooks/util';

const SelectInput = styled.input`
    outline: none;
    border-radius: 5px;
    height: 35px;
    padding: 0 15px;
    border: #777 solid 1px;
    margin-bottom: 40px;
`;

// TODO: 
// handle autocomplete
//

interface IUserSelect {
    updateUser: React.Dispatch<React.SetStateAction<string>>;
    defaultValue: string | null;
}

const UserSelect: FC<IUserSelect> = ({updateUser, defaultValue}) => {
    const [searchString, updateSearchString] = useState<string>('');
    const users = useRequest();
    
    const handleSearch = useDebounse((searchString: string) => {
        console.log('SEARCH', searchString)
    }, 300);
    

    useEffect(() => {
        if (defaultValue) {
            updateSearchString(defaultValue);
        }
    }, [defaultValue]);

    //TODO: 
    //debounse update
    useEffect( () => {
        updateUser(searchString)
    }, [searchString]);


    return (
        <SelectInput 
            value={searchString}
            disabled={!!defaultValue}
            onChange={(e) => updateSearchString(e.target.value)} 
        />
    );
};

export default UserSelect;
