import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../public/logo.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="sticky absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center align-middle justify-between p-6 lg:px-8 bg-white bg-opacity-70 backdrop-blur-lg" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">CC Diagnostics</span>
                        <img className="h-8 w-auto" src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="hidden lg:flex lg:ml-auto lg:gap-x-12 items-center align-middle">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Technology</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">About</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">News</a>
                    <button href="#" className="text-sm font-semibold leading-6 text-gray-900 bg-sky-500">Contact us<span aria-hidden="true"></span></button>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>
            {
                menuOpen && (
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 z-50"></div>
                        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">CC Diagnostics</span>
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={toggleMenu}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6 text-center">
                                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Technology</a>
                                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</a>
                                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">News</a>
                                        <button href="#" className="mx-auto block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 bg-sky-500">Contact us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
        </header >
    );
};

export default Header;
