import { FC } from 'react';
import styled from 'styled-components'
import { StyledButton } from '../styles/common';

interface IAnimatedButton {
    disabled?: boolean;
    positiveAction?: boolean;
}

const AnimatedButton = styled(StyledButton)<IAnimatedButton>`
    position: relative;
    transition: 0.5s;
    background-color: #777777;
    font-weight: 600;
    font-size: 14px;
    
    &:hover {
        background-color: ${props => props.positiveAction ? '#008080' : '#b25555'};
    }
    
    &::after {
        content: '';
        width: 120px;
        height: 35px;
        border-radius: 5px;
        transition: 0.5s;
        opacity: 0.3;
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        background-color:${props => props.positiveAction ? '#008080' : '#b25555'};
        z-index: -1;
    }

    &::before {
        content: '';
        width: 120px;
        height: 35px;
        border-radius: 5px;
        transition: 0.5s;
        opacity: 0.3;
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: ${props => props.positiveAction ? '#008080' : '#b25555'};
        z-index: -1;
    }

    &:hover::after {
        background-color:${props => props.positiveAction ? '#008080' : '#b25555'};
        left: 5px;
        bottom: 5px;
        right: -5px;
        top: -5px;
    } 
    &:hover::before {
        background-color: ${props => props.positiveAction ? '#008080' : '#b25555'};
        right: 5px;
        top: 5px;
        left: -5px;
        bottom: -5px;
    }
`;

interface IButton {
    handler: () => void;
    disabled?: boolean;
    text?: string;
    positiveAction?: boolean;
    ref?: any;
}

const Button:FC<IButton> = ({
    handler = () => null,
    disabled = false,
    text = '',
    positiveAction = true,
}) => {

    return (
        <AnimatedButton
            onClick={handler}
            disabled={disabled}
            positiveAction={positiveAction}
        >
            {text}
        </AnimatedButton>
    )

};

export default Button;
