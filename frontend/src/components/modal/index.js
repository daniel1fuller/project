import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearModal } from '../../redux/actions/modal';
import CommentModal from './comment';
import LiveChatModal from './liveChat';


const Modal = () => {
    const modalState = useSelector(state => state.modal);
    const bottomSheetRef = useRef(null)
    const dispatch = useDispatch();

    useEffect(() => {
        if (modalState.open && bottomSheetRef.current) {
            bottomSheetRef.current.expand()
        }
    }, [modalState])

    const renderContent = () => {
        switch (modalState.modalType) {
            case 0:
                return (<CommentModal post={modalState.data} />)
            case 1:
                return (<LiveChatModal user={modalState.data} />)
            default:
                return (<></>)
        }
    }

    const onClose = () => {
        dispatch(clearModal())
    }

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={["60%"]}
            index={-1}
            onClose={onClose}
            handleHeight={35}
            enablePanDownToClose
            scrollEnabled={true}
            >
            {renderContent()}
        </BottomSheet>

    )
}

export default Modal
