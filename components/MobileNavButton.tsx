import React, { useState } from 'react'
import Link from 'next/link'
import headerNavLinks from './data/headerNavLinks'

const MobileNavButton = () => {
    const [navShow, setNavShow] = useState(false)

    const onToggleNav = () => {
        setNavShow((status) => {
            if (status) {
                document.body.style.overflow = 'auto'
            } else {
                // Prevent scrolling
                document.body.style.overflow = 'hidden'
            }
            return !status
        })
    }

    return (
        <>

            <button aria-label="Toggle Menu" onClick={onToggleNav} className="relative xl:hidden xt:visible
            xss:visible xs:visible">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-gray-900 dark:text-gray-100 h-8 w-8"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={`fixed top-0 left-0 z-50 mt-0 h-screen w-screen transform opacity-95 dark:opacity-[0.999] bg-white duration-300 ease-in-out dark:bg-[#cbf420] ${navShow ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-end">
                    <button className="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu" onClick={onToggleNav}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-gray-900 dark:text-[#0e1421]"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="fixed mt-8 h-full">
                    {headerNavLinks.map((link) => (
                        <div key={link.title} className="px-12 py-4">
                            <Link
                                href={link.href}
                                className=" tracking-tight text-5xl font-bold text-gray-900
                                 dark:text-[#0e1421]"
                                onClick={onToggleNav}
                            >
                                {link.title}
                            </Link>
                        </div>
                    ))}
                </nav>
            </div>

        </>
    )
}


export default MobileNavButton