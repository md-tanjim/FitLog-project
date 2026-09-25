import Image from 'next/image';
import React from 'react';
import flogo from '@/assets/image-removebg-preview.png'

const Footer = () => {
    return (
        <div className='bg-black border-t border-gray-600 mt-16 '>
             <footer className=" bg-black container mx-auto">
      <div className=" px-4 md:px-8 py-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">

         
          <div className="flex items-center gap-2">
            <Image
              src={flogo}
              alt=""
              width={48}
              height={48}
            />
            <span className="font-medium text-white">FITLOG</span>
          </div>

          
          <p className="text-sm text-[#9CA3AF]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>

        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;