import { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';
import { showPopupAction } from "../../redux/action/userAction";

import { useClickOutside } from '../../utils/useClickOutside';

const ModalPhoto: React.FC = () => {
    const { 
        showPopup,
        selectedItem
    } = useAppSelector((state: any) => state.user);    
    const dispatch = useAppDispatch();
    const wrapperRef = useRef(null);

    const callbackClickOutside = () => {
        dispatch(showPopupAction(false))
    }

    useClickOutside(wrapperRef, callbackClickOutside);

    if (showPopup) {    
        const { urls }: any = selectedItem;
        const { regular }: any | null = urls;    
        return (
            <div className="fixed inset-0 bg-black/50 top">
                <div className="fixed top-0 left-0 w-screen z-10 h-screen flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="w-auto max-h-screen block outline-none focus:outline-none" ref={wrapperRef}>
                        <img src={regular} className="w-auto max-h-screen mx-auto" />
                    </div>
                </div>
            </div>
        )
    }

    return null;
}

export default ModalPhoto;