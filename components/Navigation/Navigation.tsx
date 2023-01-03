import Link from "next/link";
import Image from "next/image";
import {AiOutlineDesktop, AiOutlineApple} from 'react-icons/ai';
import {BsLaptop, BsKeyboard, BsHeadphones, BsMouse} from 'react-icons/bs';
import HomeSlider from "../HomeSlider/HomeSlider";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className="bg-slate-100 hidden md:block">
            <div className="container mx-auto max-w-7xl p-5 flex justify-start">
                <div className={`bg-white my-2 rounded-lg w-1/6 mr-4 ${styles.navigationWrapper}`}>
                    <ul className="text-sm">
                        <li className="">
                            <Link href="#" className="py-3 rounded-t-lg border-t-lg px-4 block hover:bg-red-400 hover:text-white flex items-center">
                                <AiOutlineDesktop size={20}/>
                                <span className="ml-3">Máy tính bàn</span>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href="#" className="py-2 px-4 block hover:bg-red-400 hover:text-white flex items-center">
                                <BsLaptop size={20}/>
                                <span className="ml-3">Laptop</span>
                            </Link> 
                        </li>
                        <li className="my-2">
                            <Link href="#" className="py-2 px-4 block hover:bg-red-400 hover:text-white flex items-center">
                                <AiOutlineApple size={22}/>
                                <span className="ml-3">Macbook</span>                                
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href="#" className="py-3 border-t-lg rounded-t px-4 block hover:bg-red-400 hover:text-white flex items-center">
                                <AiOutlineDesktop size={20}/>
                                <span className="ml-3">Màn  hình</span>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href="#" className="py-2 px-4 block hover:bg-red-400 hover:text-white flex items-center">
                                <BsMouse size={20}/>
                                <span className="ml-3">
                                    Chuột
                                </span>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href="#" className="py-2 px-4 block hover:bg-red-400 hover:text-white flex items-center">
                                <BsKeyboard size={20}/>
                                <span className="ml-3">
                                    Bàn phím
                                </span>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link href="#" className="py-2 px-4 block hover:bg-red-400 hover:text-white flex items-center">
                                <AiOutlineDesktop size={20}/>
                                <span className="ml-3">
                                    Linh kiện PC
                                </span>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="#" className="py-2 rounded-b-lg px-4 block hover:bg-red-400 hover:text-white flex items-center">
                                <BsHeadphones size={20}/>
                                <span className="ml-3">
                                    Headphone
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-3/6 relative rounded-2xl my-2">
                    <HomeSlider/>
                </div>
                <div className="w-2/6">
                    <div className="relative h-auto h-1/2 ml-2">
                        <Image src={'/images/solid2.webp'} alt="" fill sizes="400px"/>
                    </div>
                    <div className="relative h-auto h-1/2 ml-2">
                        <Image src={'/images/solid4.webp'} alt="" fill sizes="400px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;