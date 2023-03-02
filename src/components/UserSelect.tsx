import { useState, useEffect, FC } from "react";
import styled from "styled-components";
// import useRequest from '../hooks/request';
import { StyledInput } from '../styles/common';
import useDebounse from '../hooks/util';
import mockResponse from '../consts';


const SelectWrapper = styled.div`
    margin-bottom: 40px;
    width: 100%;
    position: relative;
`;

const SelectInput = styled.input`
    outline: none;
    border-radius: 5px;
    height: 35px;
    padding: 0 15px;
    border: #777 solid 1px;
    width: 100%;
`;

const OptionsWrapper = styled.div`
    width: 100%;
    max-height: 200px;
    position: absolute;
    z-index: 99;
    overflow: auto;
`;

const OptionItem = styled.div`
    width: 100%;
    background-color: #fff;
    border: #777 solid 1px;
    padding: 0 15px;
    cursor: pointer;
    height: 45px;
    display: flex;
    align-items: center;
`;


interface IUserSelect {
    updateUser: React.Dispatch<React.SetStateAction<string>>;
    defaultValue: string | null;
}

const UserSelect: FC<IUserSelect> = ({updateUser, defaultValue}) => {
    const [inputValue, updateInputValue] = useState<string>('');
    const [allOptions, updateAllOptions] = useState<string[]>([]);
    const [options, updateOptions] = useState<string[]>([]);

    const searchString = useDebounse(inputValue, 500); 

    useEffect(() => {
        setTimeout(() => updateAllOptions(mockResponse), 1500);
    }, []);

    useEffect(() => {
        if (defaultValue) {
            updateInputValue(defaultValue);
        }
    }, [defaultValue]);

    const handleSearch = (inputValue: string) => {
        const newArr = inputValue.trim() === '' ? allOptions : allOptions.filter((option) => option.includes(inputValue)).slice(0, 9)

        updateOptions(newArr);
    };

    useEffect( () => {
        updateUser(searchString)
        handleSearch(searchString);
    }, [searchString]);

    const handleOptionSelect = (option: string) => {
        updateInputValue(option);
        updateOptions([]);
        updateUser(option);
    };

    return (
        <SelectWrapper>
            <SelectInput 
                value={inputValue}
                disabled={!!defaultValue}
                onChange={(e) => updateInputValue(e.target.value)} 
            />
            { options.length ? 
                <OptionsWrapper>
                    {
                        options.map((option) => (
                            <OptionItem
                                key={option}
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </OptionItem>
                        ))
                    }
                </OptionsWrapper>
                : null
            }

        </SelectWrapper>
    );
};

export default UserSelect;
