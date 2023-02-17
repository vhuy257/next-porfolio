import React, { useRef } from 'react';
import { useAppDispatch } from '../../redux/store/hooks';
import { setSearchQuery } from "../../redux/action/userAction";
import { FiSearch } from 'react-icons/fi';

const InputSearch: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const handleOnblur = async () => {
        if (ref.current) {
            const value = ref.current.value;
            dispatch(setSearchQuery(value));
        }
    }
    
    return (
        <div className="rounded-md p-3 flex bg-white items-center max-h-10">
            <FiSearch className="mr-2" />
            <input type="text" className="rounded-md focus:outline-none" placeholder="Search photo..." ref={ref} onBlur={handleOnblur} />
        </div>
    )
}

export default InputSearch;