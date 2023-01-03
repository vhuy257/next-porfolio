import Link from 'next/link';
import { Inter } from '@next/font/google';
import {
    AiOutlineInstagram, 
    AiOutlineFacebook, 
    AiOutlineLinkedin, 
    AiOutlineTwitter, 
    AiOutlineMail,
    AiOutlineFieldTime,
    AiOutlinePhone
} from 'react-icons/ai';
import {BiMap} from 'react-icons/bi';
import styles from './Footer.module.css';
const inter = Inter({ subsets: ['latin'] });

const Footer = () => {
    return (
        <div className={`p-5 ${inter.className}`}>
            <div className="container mx-auto p-4 max-w-7xl md:flex justify-between">
                <div className={`text-slate-600`}>
                    <h1 className={`text-2xl font-bold ${styles.logoFooter}`}>Icarus</h1>
                    <ul className="text-slate-600 mt-4 text-sm bg-slate-100 p-4 rounded-lg">
                        <li className="flex">
                            <BiMap size={24}/> 
                            <span className="ml-2">Trụ sở chính: 407 Hilton, Texas, America</span>
                        </li>
                        <li className="flex mt-3">
                            <AiOutlinePhone size={24}/> 
                            <span className="ml-2">076.235.4374</span>
                        </li>
                        <li className="flex mt-3">
                            <AiOutlineMail size={20}/> 
                            <span className="ml-2">icarus_support@gmail.com</span>
                        </li>
                        <li className="flex mt-3">
                            <AiOutlineFieldTime size={24}/> 
                            <span className="ml-2">08h00 - 21h00</span>
                        </li>
                    </ul>
                    <div className="social mt-7 text-center py-4 rounded-lg">
                        <ul className="flex justify-center">
                            <li className="mr-2">
                                <Link href="#">
                                    <AiOutlineInstagram size={24}/>
                                </Link>
                            </li>
                            <li className="mr-2">
                                <Link href="#">
                                    <AiOutlineLinkedin size={24}/>
                                </Link>
                            </li>
                            <li className="mr-2">
                                <Link href="#">
                                    <AiOutlineFacebook size={24}/>
                                </Link>
                            </li>
                            <li className="mr-2">
                                <Link href="#">
                                    <AiOutlineTwitter size={24}/>                            
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-sm text-slate-600">
                    <p className='mb-4'>
                        <strong className='mr-2'>Showroom HCM</strong>
                        (Làm việc từ 8h00 - 21h00):
                    </p>
                    <ul className='bg-slate-100 rounded-lg p-4 mb-4'>
                        <li className='mb-2'>
                            Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.
                        </li>
                        <li className='mb-2'>
                            Địa chỉ 2: 1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5.
                        </li>
                    </ul>
                    <p className='mb-4'>
                        <strong className='mr-2'>Showroom Ha Noi</strong>
                        (Làm việc từ 8h00 - 21h00):
                    </p>
                    <ul className='bg-slate-100 rounded-lg p-4 mb-4'>
                        <li className='mb-2'>
                            Địa chỉ 1: 162 - 164 Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội
                        </li>
                        <li className='mb-2'>
                            Địa chỉ 2: 460 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội
                        </li>
                    </ul>
                </div>
                <div className="info">
                    <div className="subscribe">
                        <p className="font-bold text-sm mb-2 text-center text-slate-600">
                            Đăng ký nhận thông tin sản phẩm
                        </p>
                        <input placeholder="Email" type="text" className="bg-slate-100 rounded-full px-4 py-2 text-sm"/>
                    </div>
                    <div className="shop_info text-sm">
                        <ul className="mt-4 bg-slate-100 rounded-lg p-4">
                            <li className="mb-2 text-slate-500 hover:text-red-500 font-bold">
                                <Link href="#">
                                    Hỗ trợ tư vấn
                                </Link>
                            </li>
                            <li className="mb-2 text-slate-500 hover:text-red-500 font-bold">
                                <Link href="#">
                                    Liên hệ
                                </Link>
                            </li>
                            <li className="mb-2 text-slate-500 hover:text-red-500 font-bold">
                                <Link href="#">
                                    Dịch vụ
                                </Link>
                            </li>
                            <li className="mb-2 text-slate-500 hover:text-red-500 font-bold">
                                <Link href="#">
                                    Chính sách khách hàng
                                </Link>
                            </li>
                            <li className="mb-2 text-slate-500 hover:text-red-500 font-bold">
                                <Link href="#">
                                        Chính sách đổi trả
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;