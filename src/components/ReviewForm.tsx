import styled from 'styled-components';
import UserSelect from './UserSelect';
import { useState, useEffect } from 'react';
import { redirect, useNavigate } from "react-router-dom";
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
// Handle user select

// REFACTOR: 
// create reusable input component
// try using useReducer for state

const RocketReviewForm = () => {
    const [title, setTitle] = useState<string>('');
    const [rocket, setRocket] = useState<string>('');
    const [review, setReview] = useState<string>('');
    const [user, setUser] = useState<string>('');

    const [canSubmit, updateCanSubmit] = useState<boolean>(false);
    const navigate = useNavigate();

    //TODO: 
    // debounse validation (wont be needed after refactoring)

    // REFACTOR: 
    // create better validation with highlight of incorrect feild
    // react on click and then validate

    useEffect(() => {
        const titleValid = title.length > 0;
        const rocketValid = rocket.length > 0;
        const reviewValid = review.trim().length > 10;
        const userValid = user.length > 0;
        if(titleValid && rocketValid && reviewValid && userValid) {
            updateCanSubmit(true);
        }
    }, [title, rocket, review, user]);


    //TODO: 
    // show some kind of message after successfull 
    const handleSubmit = () => {
        const oldList = JSON.parse(localStorage.getItem('mockList')!);
        const newReview = {
            title: title,
            rocketName: rocket,
            description: review,
            id: oldList[oldList.length-1].id + 1,
            userInfo: {
                login: user,
            },
        };

        oldList.push(newReview);
        localStorage.setItem('mockList', JSON.stringify(oldList));
        console.log('REVIEW SAVED');
        setTimeout(() => navigate('/'), 500);
    }

    return (
        <FormWrapper>
            <FormTitle>
                New Review
            </FormTitle>
            <ReviewTitle
                placeholder="Your review's title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <RocketName 
                placeholder='Rocket name'
                value={rocket}
                onChange={(e) => setRocket(e.target.value)}
            />
            <TextAreaWrapper>
                <ReviewText 
                    placeholder='Rocket review'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </TextAreaWrapper>
            <UserSelect updateUser={setUser}/>
            <SubmitButton
                disabled={!canSubmit}
                onClick={handleSubmit}
            >
                Create Review
            </SubmitButton>
        </FormWrapper>
    );
};

export default RocketReviewForm;
