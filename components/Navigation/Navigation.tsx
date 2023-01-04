import Link from "next/link";
import Image from "next/image";
import * as ReactIconsAi from 'react-icons/ai';
import * as ReactIconsBs from 'react-icons/bs';
import HomeSlider from "../HomeSlider/HomeSlider";
import { NavigationData } from "./NavigationData";
import styles from './Navigation.module.css';

const Navigation = () => {
    const renderIcon = (icon: string) => {
        switch (icon) {
            case '<AiOutlineDesktop />':
                return <ReactIconsAi.AiOutlineDesktop size={22}/>
            case '<AiOutlineApple />':
                return <ReactIconsAi.AiOutlineApple size={22}/>
            case '<BsLaptop />':
                return <ReactIconsBs.BsLaptop size={22}/>
            case '<BsKeyboard />':
                return <ReactIconsBs.BsKeyboard size={22}/>
            case '<BsHeadphones />':
                return <ReactIconsBs.BsHeadphones size={22}/>
            case '<BsMouse />':
                return <ReactIconsBs.BsMouse size={22}/>
            default:          
            break;
        }
    }

    return (
        <div className="bg-slate-100 hidden md:block">
            <div className="container mx-auto max-w-7xl p-5 flex justify-start">
                <div className={`bg-white my-2 rounded-lg w-1/6 mr-4 ${styles.navigationWrapper}`}>
                    <ul className="text-sm">
                        {NavigationData.map((item: any, key: number) => {                
                                return (
                                    <li className="" key={key}>
                                        <Link href="#" className="py-3 px-4 block hover:bg-red-400 hover:text-white flex items-center">
                                            {renderIcon(item.icon)} 
                                            <span className="ml-3">{item.title}</span>
                                        </Link>
                                    </li>
                                )
                        })}
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