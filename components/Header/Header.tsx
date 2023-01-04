import React, { Suspense, useRef, lazy } from 'react'
import { Inter } from '@next/font/google'
import styles from './Header.module.css'
import { Search, ShoppingBag, User, PhoneCall, Globe } from 'react-feather'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './use-dimension'
import Link from 'next/link'

const MenuToggle = lazy(
    () => import('../MenuToggle/MenuToggle')
        .then(({MenuToggle}) => ({default: MenuToggle})),
)

const inter = Inter({ subsets: ['latin'] })

const Header = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 40px)",
          transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
    }

    return (
        <Suspense>
            <div className={`container max-w-7xl mx-auto flex justify-between items-center p-4 ${inter.className}`}>
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    className={`md:hidden`}
                    ref={containerRef}
                >
                    <motion.div className={`${styles.background} shadow-xl`} variants={sidebar} />
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>
                <div className="top_headerlogo flex justify-between items-center">
                    <h1 className={`text-2xl md:text-3xl font-bold md:mr-8 ${styles.headerLogo}`}>
                        <Link href="/">
                            Icarus
                        </Link>
                    </h1>
                    <div className="phone_section items-center md:ml-8 hidden md:flex">
                        <PhoneCall /> 
                        <span className="ml-4">
                            <span className="text-sm font-bold">Tổng đài</span> <br/>
                            <span className="text-sm font-bold text-rose-600">076.235.4374</span>
                        </span>
                    </div>
                </div>
                <div className="search_form py-3 px-4 bg-slate-100 w-2/5 rounded-full mx-2 hidden md:flex">
                    <span className="text-black"><Search size={18} /></span>
                    <input type="text" className="w-full bg-slate-100 focus:outline-none pl-4 text-sm" placeholder="Search"/>
                </div>
                <div className="user_form flex justify-between items-center">
                    <div className="language hidden md:block md:px-5 flex items-center">
                        <Globe />
                    </div>
                    <div className="user hidden md:block md:px-5">
                        <User />
                    </div>
                    <div className="shopping_cart md:px-5">
                        <ShoppingBag />
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default Header;