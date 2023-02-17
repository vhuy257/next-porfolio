import React from "react";
import Image from 'next/image';
import profilePic from '../../public/images/avatar.svg';
import { AiOutlineMail, AiFillSkype, AiFillLinkedin, AiOutlineHtml5 } from 'react-icons/ai';
import { DiMagento, DiReact, DiCss3 } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';


const Profile: React.FC = () => {
    return (
        <div className="profile-info container p-4 rounded-t-sm">
            <div className="rounded-md bg-white p-5 mt-5">
                <div className="flex justify-between">
                    <div className="profile-image w-1/4 flex items-center justify-center flex-col">
                        <Image src={profilePic} className="rounded-lg" alt="profile image" width={100} height={100} />
                        <h2 className="mt-4 rounded-full py-2 px-4 text-sm bg-rose-600 text-white">
                            Hi, I'm Frontend Developer !!
                        </h2>
                    </div>
                    <div className="w-3/4 ml-10">
                        <div className="mb-8">
                            <span className="rounded-full p-2 px-4 text-sm mr-4 bg-rose-600 text-white inline-flex items-center">
                                <AiOutlineMail className="text-xl mr-2" /> vhuy271990@gmail.com
                            </span>
                            <span className="rounded-full p-2 px-4 text-sm mr-4 bg-cyan-600 text-white inline-flex items-center">
                                <AiFillSkype className="text-xl mr-2" /> <span>huy.nguyen25790</span>
                            </span>
                            <span className="rounded-full p-2 px-4 text-sm mr-4 bg-sky-600 text-white inline-flex items-center">
                                <AiFillLinkedin className="text-xl mr-2" /> Huy Nguyen
                            </span>
                        </div>
                        <div className="mb-4 flex text-3xl justify-around text-white">
                            
                            <span className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center shadow-md shadow-stone-500"><AiOutlineHtml5 /></span>
                            <span className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center shadow-md shadow-stone-500"><DiCss3/></span>
                            <span className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-md shadow-stone-500"><DiMagento /></span>
                            <span className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center shadow-md shadow-stone-500"><DiReact /></span>
                            <span className="w-16 h-16 bg-lime-600 rounded-full flex items-center justify-center shadow-md shadow-stone-500"><SiRedux /></span>
                        </div>
                        <p className="rounded-md p-4 bg-slate-200">
                            My name is Huy and I'm from Viet Nam. <br />
                            I have 6 years experience in front end development. <br />
                            Executed and contributed to front-end web development projects, with an emphasis on front end features, browser manipulation, and cross-browser compatibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;