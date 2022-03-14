import { CLEAR_MODAL, MODAL_OPEN_COMMENT_SECTION, MODAL_OPEN_LIVE_CHAT_SECTION } from "../constants"

export const openCommentModal = (open, data) => (dispatch) => {
    return dispatch({
        data,
        open,
        modalType: 0,
        type: MODAL_OPEN_COMMENT_SECTION
    })
}

export const openLiveChatModal = (open, data) => (dispatch) => {
    return dispatch({
        data,
        open,
        modalType: 1,
        type: MODAL_OPEN_LIVE_CHAT_SECTION
    })
}

export const clearModal = (open, data) => (dispatch) => {
    return dispatch({
        type: CLEAR_MODAL
    })
}