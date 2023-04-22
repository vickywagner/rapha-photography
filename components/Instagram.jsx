import React from 'react';
import Img1 from "../assets/Thailand.jpg";
import Img2 from "../assets/beach.jpg";
import Img3 from "../assets/australia.jpg";
import Img4 from "../assets/australia2.jpg";
import Img5 from "../assets/bari-3.jpg";


import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
    <p className='text-2xl font-bold'>Follow me on Instagram</p>
    <p className='pb-4'>@Raphaphotography</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={Img1}/>
            <InstagramImg socialImg={Img2}/>
            <InstagramImg socialImg={Img3}/>
            <InstagramImg socialImg={Img4}/>
            <InstagramImg socialImg={Img5}/>
           


        </div>
    </div>
  )
}

export default Instagram