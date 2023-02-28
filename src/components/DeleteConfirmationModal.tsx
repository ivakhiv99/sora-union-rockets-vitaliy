import { useState } from 'react';
import styled from 'styled-components';
import { FlexRow, StyledButton} from '../styles/common';


const DeleteConfirmationModal = () => {
    const [modalOpen, updateModalOpen] = useState(true);


    const handleClose = () => updateModalOpen(false);

    //TODO: 
    //Handle Delete here
    //Show message for successfull review delition
    const handleDelete = () => {
        setTimeout(handleClose, 1000);
    };

    return (
        <div className="ModalWrapper">
            <div className="ConfirmationText">Are you sure you want to delete this review?</div>
            <FlexRow>
                <StyledButton onClick={handleClose}>Nevermind</StyledButton>
                <StyledButton onClick={handleDelete}>Delete</StyledButton>
            </FlexRow>
        </div>
    );
};

export default DeleteConfirmationModal;
