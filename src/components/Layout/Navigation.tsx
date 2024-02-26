import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; 

const Navigation = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (path: string) => {
        router.push(path);
        setIsMenuOpen(false);
    };

    const isActive = (path: string) => router.pathname === path;

    return (
        <header className="bg-gray-100 shadow-custom text-xl">
            <nav className="font-[Inter] text-2xl font-bold flex items-center justify-between h-28 w-full ">
  
                {/* Render burger icon for small and medium screens */}
                <div className='md:hidden w-full flex justify-center'>
                    <div className='w-1/3 hover:cursor-pointer'></div>
                    <Image src="/img/logo.png" alt="Pixel Blob Fish" width={150} height={150} onClick={() => handleNavigation('/')}/>
                    <div className='w-1/3 flex justify-center align-middle'>
                        <Image src="/img/menu.svg" alt="Menu" width={30} height={30} onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer" />
                    </div>
                </div>
                
                {/* Render burger dropdown menu for small and medium screens */}
                {isMenuOpen && (
                    <div className="absolute top-28 left-0 w-full bg-white md:hidden">
                        <ul className="flex flex-col w-full mx-auto justify-center items-center gap-2">
                            <li><a className={`mx-8 transition duration-300 cursor-pointer text-sm ${isActive('/') ? 'text-stone-500 cursor-pointer' : 'hover:text-stone-200'}`} onClick={() => handleNavigation('/')}>Home</a></li>
                            <li><a className={`mx-8 transition duration-300 cursor-pointer text-sm ${isActive('/about') ? 'text-stone-500 cursor-pointer' : 'hover:text-stone-200'}`} onClick={() => handleNavigation('/about')}>About</a></li>
                            <li><a className={`mx-8 transition duration-300  text-sm ${isActive('/login') ? 'text-stone-500' : 'hover:text-stone-200 cursor-pointer'}`} onClick={() => handleNavigation('/login')}>Log In</a></li>
                        </ul>
                    </div>
                )}

                {/* Render regular navigation links for larger screens */}
                <div className={`hidden md:flex md:left-0 md:top-[16%] md:w-full ${isMenuOpen ? 'hidden' : 'block'}`}>
                    <ul className="flex lg:flex-row w-full mx-auto justify-center items-center gap-2 lg:gap-40">
                        <li><a className={`hover:text-blobPink mx-8 transition duration-300 cursor-pointer ${isActive('/about') ? 'text-stone-200' : 'text-stone-500'}`} onClick={() => handleNavigation('/about')}>About</a></li>
                        <li className='hover:cursor-pointer'><Image src="/img/logo.png" alt="Pixel Blob Fish" width={150} height={150} onClick={() => handleNavigation('/')}/></li>
                        <li><a className={`hover:text-blobPink mx-8 transition duration-300 cursor-pointer ${isActive('/login') ? 'text-stone-200' : 'text-stone-500'}`} onClick={() => handleNavigation('/login')}>Log In</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
