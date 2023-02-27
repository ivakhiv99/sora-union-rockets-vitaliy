import RocketReviewItem from './RocketReviewItem';
import styled from 'styled-components';
import RocketReview from '../types/review';
import { FlexRow } from '../styles/common';
import { Link } from 'react-router-dom';

const ListWrapper = styled.div`
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
    const mockRocketReviewList: RocketReview[]  = JSON.parse(localStorage.getItem('mockList') || '[]');

    return (
       <ListWrapper>
            <ListHeader>
                <FormTitle>List of Rockets</FormTitle>
                <AddNewButton to='/new-review' />
            </ListHeader>
            {mockRocketReviewList.map((rocketReview) => <RocketReviewItem data={rocketReview} key={rocketReview.id} />)}
       </ListWrapper>
    )
};

export default RocketReviewList;
