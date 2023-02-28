import { FC } from 'react'
import styled from 'styled-components';
import { FlexRow, ButtonPlaceholder } from '../styles/common';
import RocketReview from '../types/review';

const ReviewItem = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 25px;
    background-color: antiquewhite;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const ImgPlaceholder = styled.div`
    width: 180px;
    height: 250px;
    border-radius: 25px;
    background-color: teal;
`;

const EditPlaceholder = styled(ButtonPlaceholder)`
    background-color: gold;
`;

const DeletePlaceholder = styled(ButtonPlaceholder)`
    background-color: red;
`;

const UserAvatarPlaceholder = styled(ButtonPlaceholder)`
    width: 35px;
    height: 35px;
    background-color: teal;
    border-radius: 50%;
`;

const ReviewTitle = styled.h2`
    margin: 0;
    font-size: 22px;
`;

const RocketName = styled.h3`
    margin: 0;
    font-size: 18px;
`;

const RocketDescription = styled.div`
    height: 134px;
`;

const UserInfo = styled(FlexRow)`
    align-items: center;
`;

interface RocketREviewProps {
    data: RocketReview
}


//TODO: 
// redirect user to review details page on item click
// handle edit button click: redirect user to create review page with prefilled feilds
// handle delete button click:  
//  - show modal with confirmation

const RocketReviewItem: FC<RocketREviewProps> = ({data}) => {
    const {
        title,
        rocketName,
        description,
        userInfo,
        id,
    } = data;
    
    const handleDelete = () => {
        const oldList = JSON.parse(localStorage.getItem('mockList')!);
        localStorage.setItem('mockList', JSON.stringify(oldList.filter((item: RocketReview) => item.id !== id)));
        window.dispatchEvent(new Event('storage update'));
    };  

    return (
        <ReviewItem>
            <ImgPlaceholder/>
            <div className="reviewPreview">
                <FlexRow>
                    <ReviewTitle>{title}</ReviewTitle>
                    <FlexRow>
                        <EditPlaceholder/>
                        <DeletePlaceholder onClick={handleDelete}/>
                    </FlexRow>
                </FlexRow>
                <RocketName>{rocketName}</RocketName>
                <RocketDescription>{description}</RocketDescription>
                <UserInfo>
                    <UserAvatarPlaceholder/>
                    <div className="username">{userInfo?.login}</div>
                </UserInfo>
            </div>
        </ReviewItem>
    );
};

export default RocketReviewItem;
