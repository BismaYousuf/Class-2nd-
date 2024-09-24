import React from 'react';
import Image from "next/image";


function About() {
  return (
    <>

    <div className='border-yellow-300 border-4 absolute flex'>
    <div className='w-70 h-50 p-10'>
      <h1 className='text-4xl font-bold m-5'>BISMA YOUSUF</h1>
    <p className='text-2xl m-5 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta veniam necessitatibus adipisci facilis quia voluptate neque obcaecati aperiam nemo aut, repudiandae inventore nulla dolore distinctio eos, placeat ipsum nostrum?</p></div>
 
    <div className=' w-30 h-200 justify-end items-center top-10 
     '>
    <Image src={'/pic.jpg'} 
    width={500}
    height={300}
    alt="picture"   
    />

    </div>
    </div>
    
    </>
  )
}

export default About

