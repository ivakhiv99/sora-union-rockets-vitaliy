import RocketReviewItem from './RocketReviewItem';
import styled from 'styled-components';
import RocketReview from '../types/review';
import { FlexRow } from '../styles/common';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';

const ListWrapper = styled.div`
    width: 500px;
    min-height: 800px;
    border-radius: 20px;
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-height: 1200px;
`;

const FormTitle = styled.h1`
`;

const ListHeader = styled(FlexRow)`
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

const AddNewButton = styled(Link)`
    width: 35px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #333;
`;

const RocketReviewList = () => {
    const [reviewList, updateReviewList] = useState<RocketReview[]>([]);
    const [confirmationModal, toggleConfirmationModal] = useState<boolean>(false);
    const [selectedId, updateSelectedId] = useState<number | null>(null);

    useEffect(() => {
        const handleStorageUpdate = () => {
            const mockRocketReviewList: RocketReview[]  = JSON.parse(localStorage.getItem('mockList') || '[]');
            updateReviewList(mockRocketReviewList);
        }

        handleStorageUpdate();

        window.addEventListener('storage update', handleStorageUpdate);
        return () => {
            window.removeEventListener('storage update', handleStorageUpdate);
        };
    }, []);

    useEffect(() => {
        const openModal = (e: CustomEventInit) => {
            updateSelectedId(e.detail.reviewId);
            toggleConfirmationModal(true);
        }

        window.addEventListener('trigger confirmation', openModal);
        return () => {
            window.removeEventListener('trigger confirmation', openModal);
        };
    }, []);


    return (
       <ListWrapper>
            <ListHeader>
                <FormTitle>List of Rockets</FormTitle>
                <AddNewButton to='/new-review' />
            </ListHeader>
            {confirmationModal && <DeleteConfirmationModal id={selectedId} closeModal={() => toggleConfirmationModal(false)} />}
            {reviewList.map((rocketReview) => <RocketReviewItem data={rocketReview} key={rocketReview.id} />)}
       </ListWrapper>
    )
};

export default RocketReviewList;
