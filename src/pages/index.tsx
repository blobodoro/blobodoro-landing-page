// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navigation from '../components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';



const Home = () => {
  const router = useRouter();

  const handleNavigation = (path : string) => {
    router.push(path);
  };

  return (
    <div className="font-inter text-md ">
      <Navigation />

      {/* MAIN CONTENT */}
      <section className="font-[Inter] pt-5 lg:mx-[10%] ">
          <h1 className='font-[Quantico] m-5 text-4xl lg:text-6xl lg:p-[1%] lg:px-[5%] text-center text-zinc-700'>Study Smarter with Blobodoro: Collect Fish as You Focus!</h1>
          <p className='text-center text-xl m-5 lg:mx-[10%] xl:mx-[20%] font-extralight'>Utilise the benefits of the Pomodoro technique to enhance your productivity with a pixel twist</p>

          <ul className="flex m-2 sm:w-4/5 md:w-1/2 lg:w-1/2 lg:text-md xl:w-2/5 mx-auto text-xs justify-center">
              <li className='m-2 w-1/2 ml-5 '>
                  <a href="#" className="group bg-blobPink hover:bg-zinc-200 transition duration-300 cursor-pointer rounded-xl flex items-center justify-center py-2 ">
                    <Image className='opacity-100 group-hover:opacity-0 transition duration-300 ml-1 my-1  max-w-10 lg:mx-2 xl:mx-1' src="/img/apple.png" alt="Apple Logo Icon" width={200} height={200} />
                    <span className="opacity-100 group-hover:opacity-0 transition duration-300 m-1 font-bold lg:mx-2 text-zinc-600 lg:text-lg ">App Store</span>
                    <span className="opacity-0 group-hover:opacity-100 transition duration-300 m-1 font-bold lg:mx-2 text-zinc-600 lg:text-lg absolute">Coming Soon...</span>
                  </a>
              </li>
              <li className='m-2 w-1/2 mr-5'>
                  <a href="#" className="group bg-blobPink hover:bg-zinc-200 transition duration-300 cursor-pointer rounded-xl flex items-center justify-center py-2 ">
                  <Image className='opacity-100 group-hover:opacity-0 transition duration-300 ml-1 max-w-10 my-1 lg:mx-2 xl:mx-1' src="/img/play.png" alt="Google Logo Icon" width={200} height={200} /> 
                  <span className="opacity-100 group-hover:opacity-0 transition duration-300 m-1 font-bold lg:mx-2 text-zinc-600 lg:text-lg">Google Play</span>
                  <span className="opacity-0 group-hover:opacity-100 transition duration-300 m-1 font-bold lg:mx-2 text-zinc-600 lg:text-lg absolute">Coming Soon...</span>
                  </a>
              </li>
          </ul>

          <div className="flex flex-col lg:flex-row lg:justify-center items-center"> 
              <Image className='my-3 lg:m-4' src="/img/stat-page.png" alt="" width={300} height={200} />
              <Image className='my-3 lg:m-4' src="/img/Fish-page.png" alt="" width={300} height={200} />
              <Image className='my-3 lg:m-4' src="/img/shop-page.png" alt="" width={300} height={200} />
          </div>
      </section>

      <section className="p-5 bg-brown">
          <h2 className="flex justify-center md:text-2xl font-[Quantico] lg:text-3xl xl:w-2/3 mx-auto pt-5">
            <span className='m-2 text-white flex items-center justify-center lg:mx-10 text-center w-full'>Relax</span>  
            <span className='m-2 text-white flex items-center justify-center lg:mx-10 text-center w-full'>Stay Focused</span>
            <span className='m-2 text-white flex items-center justify-center lg:mx-10 text-center w-full'>Be Rewarded</span>
          </h2>
      </section>

      <Footer />
      <script ></script>
    </div>
  );
};

export default Home;
