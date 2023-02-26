import styled from 'styled-components';
import UserSelect from './UserSelect'

import { StyledInput, StyledButton } from '../styles/common';

const FormWrapper = styled.div`
    width: 500px;
    min-height: 800px;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-height: 1200px;
`;

const FormTitle = styled.h1`
    text-transform: capitalize;
`;

const ReviewTitle = styled(StyledInput)`
    width: 100%;
`;

const RocketName = styled(StyledInput)`
    width: 200px;
`;

const TextAreaWrapper = styled.div`
    margin-bottom: 40px;
    height: 400px;
`;

const ReviewText = styled.textarea`
    height: 175px;
    width: 100%;
    resize: vertical;
    max-height: 375px;
    min-height: 150px;
`;

const SubmitButton = styled(StyledButton)`
    background-color: #777;
    margin-left: calc(100%  - 120px);
`;


//TODO: 
// Create validation
// Update local storage and redirect back to the list upon submitting

const RocketReviewForm = () => {
    return (
        <FormWrapper>
            <FormTitle>
                New Review
            </FormTitle>
            <ReviewTitle placeholder="Your review's title" />
            <RocketName placeholder='Rocket name' />
            <TextAreaWrapper>
                <ReviewText />
            </TextAreaWrapper>
            <UserSelect />
            <SubmitButton >Create Review</SubmitButton>
        </FormWrapper>
    );
};

export default RocketReviewForm;
