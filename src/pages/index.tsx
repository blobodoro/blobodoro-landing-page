// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navigation from '../components/Layout/Navigation';



const Home = () => {
  const router = useRouter();

  const handleNavigation = (path : string) => {
    router.push(path);
  };

  return (
    <div className="font-inter bg-white text-md">
      <Navigation />

      {/* MAIN CONTENT */}
      <section className="">
      </section>



      {/* BIO TEXT */}
        

      {/* CALL TO ACTION BUTTON */}
      <div className="">
      </div>


      <script ></script>
    </div>
  );
};

export default Home;
