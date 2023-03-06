import { FC } from 'react'
import styled from 'styled-components';
import { FlexRow, ButtonPlaceholder, StyledButton } from '../styles/common';
import { RocketReview } from '../types/review';
import { useNavigate } from 'react-router-dom';
import editIcon from '../assets/edit.png';
import deleteIcon from '../assets/delete.png';

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
    padding: 20px 15px;
`;

const ImgPlaceholder = styled.div`
    width: 180px;
    height: 250px;
    border-radius: 25px;
    background-color: teal;
`;

const ReviewPreview = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Buttons = styled(FlexRow)`
    width: 45px;
    justify-content: space-between;
`;

const ControlButton = styled(StyledButton)`
    width: 20px;
    height: 20px;
    margin: 5px;
    padding: 0;
    background-color: transparent;
`;

const StyledImg = styled.img`
    width: 20px;
    height: 20px;
`;

const UserAvatarPlaceholder = styled(ButtonPlaceholder)`
    width: 35px;
    height: 35px;
    background-color: teal;
    border-radius: 50%;
`;

const PreviewHeader = styled(FlexRow)`
    justify-content: space-between;
`;

const ReviewTitle = styled.h2`
    margin: 0  0 5px 0;
    font-size: 22px;
`;

const RocketName = styled.h3`
    margin: 0  0 10px 0;
    font-size: 18px;
`;

const RocketDescription = styled.div`
    max-height: 134px;
`;

const UserInfo = styled(FlexRow)`
    align-items: center;
    position: relative;
    bottom: 0;
`;


interface RocketREviewProps {
    data: RocketReview
}


//TODO: 
// redirect user to review details page on item click

const RocketReviewItem: FC<RocketREviewProps> = ({data}) => {
    const {
        title,
        rocketName,
        description,
        userInfo,
        id,
    } = data;
    
    const navigate = useNavigate();

    const handleDelete = () => window.dispatchEvent(new CustomEvent('trigger confirmation', { detail: { reviewId: id } }));

    const handleEdit = () => navigate(`/edit-review/${id}`);

    return (
        <ReviewItem>
            <ImgPlaceholder/>
            <ReviewPreview>
                <div>
                    <PreviewHeader>
                        <ReviewTitle>{title}</ReviewTitle>
                        <Buttons>
                            <ControlButton onClick={handleEdit}>
                                <StyledImg src={editIcon}/>
                            </ControlButton>
                            <ControlButton onClick={handleDelete}>
                                <StyledImg src={deleteIcon}/>
                            </ControlButton>
                        </Buttons>
                    </PreviewHeader>
                    <RocketName>{rocketName}</RocketName>
                    <RocketDescription>{description}</RocketDescription>
                </div>
                <UserInfo>
                    <UserAvatarPlaceholder/>
                    <div className="username">{userInfo?.login}</div>
                </UserInfo>
            </ReviewPreview>
        </ReviewItem>
    );
};

export default RocketReviewItem;
