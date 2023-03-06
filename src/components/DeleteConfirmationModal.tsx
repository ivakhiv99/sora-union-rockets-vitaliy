import { FC, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FlexRow } from '../styles/common';
import { RocketReview } from '../types/review';
import Button from '../components/Button';

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    z-index: 90;
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 20px;
`;

const ModalWrapper = styled.div`
    width: 430px;
    height: 200px;
    padding: 0 25px;
    background-color: #fff;
    border-radius: 15px;
    z-index: 99;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ConfirmationText = styled.h3`
    margin-bottom: 35px;
    font-size: 22px;
    font-weight: 400;
`;

const Buttons = styled(FlexRow)`
    width: 90%;
    justify-content: space-around;
`;

interface IDeleteConfirmationModal {
    closeModal: () => void;
    id: number | null;
}

const DeleteConfirmationModal:FC<IDeleteConfirmationModal> = ({closeModal, id}) => {
    const [cancelDisabled, toggleCancelDisabled] = useState<boolean>(false);
    const submitButton = useRef(null);
    const background = useRef(null);

    const handleDelete = () => {
        if(submitButton.current) {
            (submitButton.current as HTMLElement).innerHTML = 'Done';
        }
        toggleCancelDisabled(true);
        const oldList = JSON.parse(localStorage.getItem('mockList')!);
        localStorage.setItem('mockList', JSON.stringify(oldList.filter((item: RocketReview) => item.id !== id)));
        window.dispatchEvent(new Event('storage update'));
        setTimeout(closeModal, 500);
    };

    useEffect(() => {
        const handleBackgroundClick = (e: Event) => {
            if(e.target === background.current) {
                closeModal();
            }
        }

        if(background.current) {
            (background.current as HTMLElement).addEventListener('click', handleBackgroundClick);
        }
        return () => {
            if(background.current) {
                (background.current as HTMLElement).removeEventListener('click', handleBackgroundClick);
            }
        }
    }, []);

    return (
        <ModalBackground ref={background}>
            <ModalWrapper>
                <ConfirmationText>Are you sure you want to delete this review?</ConfirmationText>
                <Buttons>
                    <Button 
                        disabled={cancelDisabled}
                        handler={closeModal}
                        text={'Nevermind'}
                        positiveAction={true}
                    />
                        
                    <Button
                        ref={submitButton}
                        handler={handleDelete}
                        text={'Delete'}
                        positiveAction={false}
                    />
                        
                </Buttons>
            </ModalWrapper>
        </ModalBackground>
    );
};

export default DeleteConfirmationModal;
