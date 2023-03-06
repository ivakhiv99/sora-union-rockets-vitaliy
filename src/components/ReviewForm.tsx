import styled from 'styled-components';
import UserSelect from './UserSelect';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { StyledInput, FlexRow } from '../styles/common';
import { RocketReview } from '../types/review';
import Button from './Button';

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

const Buttons = styled(FlexRow)`
    width: 100%;
    justify-content: space-around;
`;

// REFACTOR: 
// create reusable input component
// try using useReducer for state
// create reusable function to find item in list?

const RocketReviewForm = () => {
    const [title, setTitle] = useState<string>('');
    const [rocket, setRocket] = useState<string>('');
    const [review, setReview] = useState<string>('');
    const [user, setUser] = useState<string>('');

    const [canSubmit, updateCanSubmit] = useState<boolean>(false);
    const [editMode, toggleEditMode] = useState<boolean>(false);

    const navigate = useNavigate();
    const { reviewId } = useParams();

    useEffect(() => {
        if(reviewId) {
            toggleEditMode(true);
            const reviewList = JSON.parse(localStorage.getItem('mockList')!);
            const currentReview = reviewList!.find((review: RocketReview) => review.id === +reviewId);
            setTitle(currentReview.title);
            setRocket(currentReview.rocketName);
            setReview(currentReview.description);
            setUser(currentReview.userInfo.login);
        }
    }, []);

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
    // show some kind of message after successfull submit
    const handleSubmit = () => {
        const oldList = JSON.parse(localStorage.getItem('mockList')!);
        const newReview = {
            title: title,
            rocketName: rocket,
            description: review,
            id: editMode ? +reviewId! : oldList[oldList.length-1].id + 1,
            userInfo: {
                login: user,
            },
        };

        if (editMode) {
            const index = oldList.indexOf(oldList.find((review: RocketReview) => review.id === +reviewId!))
            oldList.splice(index, 1, newReview);
        } else {
            oldList.push(newReview);
        }
        localStorage.setItem('mockList', JSON.stringify(oldList));
        setTimeout(() => navigate('/'), 500);
    }

    const handleDiscard = () => {
        setTitle('');
        setRocket('');
        setReview('');
        setUser('');
        navigate('/');
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
            <UserSelect
                updateUser={setUser}
                defaultValue={editMode ? user : null}
            />

            <Buttons>
                <Button
                    handler={handleDiscard}
                    text={editMode ? 'Discard' as string : 'Cancel' as string}
                    positiveAction={false}
                />
                <Button
                    handler={handleSubmit}
                    text={editMode ? 'Update Review' : 'Create Review'}
                    disabled={!canSubmit}
                    positiveAction={true}
                />
            </Buttons>
        </FormWrapper>
    );
};

export default RocketReviewForm;
