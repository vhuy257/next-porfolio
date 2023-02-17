import { useRef, useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';
import { setCurrentPage, setSortBy } from "../../redux/action/userAction";
import { useClickOutside } from '../../utils/useClickOutside';
import { BsCheck } from 'react-icons/bs';

const FilterPhoto = () => {
    const { 
        per_page, 
        sort_by, 
    } = useAppSelector((state: any) => state.user);
    const dispatch = useAppDispatch();
    const sortByArr = ['latest', 'oldest', 'popular'];
    const [showDropdown, setShowDropdown] = useState(false);
    const wrapperRef = useRef(null);    
    useClickOutside(wrapperRef, () => setShowDropdown(false));
    
    useEffect(() => {
        dispatch(setCurrentPage(1))
    }, [sort_by])

    return (
        <div className="relative p-2">
            <span
                onClick={() => setShowDropdown(true)}
                className="selected bg-white p-2 items-center rounded-md w-28 cursor-pointer block justify-center font-semibold capitalize flex"
            >
                {sort_by} <BsCheck className="text-green-400 text-xl" />
            </span>
            <ul
                ref={wrapperRef}
                className={
                    showDropdown ?
                        "flex bg-white rounded-md shadow-md flex-col absolute top-full z-30"
                        : "bg-white rounded-md shadow-md flex-col absolute top-full hidden"
                }
            >
                {
                    sortByArr.filter((item: any) => item !== sort_by).map((item: any, key: any) =>
                        <li key={key}
                            onClick={() => {dispatch(setSortBy(item)); setShowDropdown(false)}}
                            className="selected p-2 px-3 w-28 cursor-pointer block font-semibold capitalize hover:bg-gray-200 rounded-md"
                        >
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default FilterPhoto;