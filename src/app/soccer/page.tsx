import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { blogs } from '@/data/blog';
import React from 'react'

const BlogList = () => {
    return (
        <div className="container mx-auto space-y-10">
            {/* Lead Blog (Full Width) */}
            {blogs
                .filter((blog) => blog.type === "lead")
                .map((blog, index) => (
                    <div key={index} className="w-full flex flex-col md:flex-row h-[350px] rounded-2xl hover:bg-[#303030] hover:cursor-pointer overflow-hidden transition duration-300">
                        {/* Image Section */}
                        <div className="relative w-full md:w-1/2 h-full group overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${blog.image})` }}
                            ></div>

                            {/* Play Button (Triangle) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-[40px] border-b-[40px] border-l-[60px] border-t-transparent border-b-transparent border-l-white/60"></div>


                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-white">
                            <h2 className="text-2xl font-medium">{blog.title}</h2>

                            <Divider />
                            <p className="mt-2">{blog.description}</p>
                        </div>
                    </div>
                ))}

            <div className="grid gap-6 md:grid-cols-3 mt-4">
                {blogs
                    .filter((blog) => blog.type !== "lead")
                    .map((blog, index) => (
                        <div key={index} className='hover:bg-[#303030] hover:cursor-pointer rounded-2xl transition duration-300'>
                            {/* Blog Image with Hover Effect */}
                            <div
                                className="relative w-full h-[250px] bg-cover bg-center rounded-2xl overflow-hidden group transition duration-300"
                                style={{ backgroundImage: `url(${blog.image})` }}
                            >
                                {/* Hover Effect - Image Zoom Out */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${blog.image})` }}
                                ></div>


                                {/* Play Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-[40px] border-b-[40px] border-l-[60px] border-t-transparent border-b-transparent border-l-white/60"></div>
                            </div>


                            <div className='p-4' >

                                <h2 className='font-semibold text-xl' >{blog.title}</h2>
                                <Divider />

                                <p className="mt-2 text-sm">{blog.description}</p>


                                <div className='flex justify-end mt-8' ><button className='bg-main px-2 rounded-md text-white' >{blog.category}</button></div>
                            </div>             
                        </div>
                    ))}
            </div>
        </div>
    );
};


const HomePage = () => {
    return (
        <div className='p-6'>

            <Header />

            <div className='my-6 mt-16 flex justify-between items-center flex-wrap gap-4' >
                <h1 className='font-semibold text-2xl' >SOCCER <span className='text-main' >LATEST VIDEOS</span></h1>

                <div>
                    <button className='text-white border-2 hover:bg-main border-white rounded-lg p-2 px-4'  >View All Videos</button>
                </div>
            </div>
            <BlogList />



            <div className='my-6 mt-16 flex justify-between items-center flex-wrap gap-4' >
                <h1 className='font-semibold text-2xl' >SOCCER <span className='text-main' >LATEST VIDEOS</span></h1>

                <div>
                    <button className='text-white border-2 hover:bg-main border-white rounded-lg p-2 px-4'  >View All Videos</button>
                </div>
            </div>
            <BlogList />





            <Footer/>


        </div>
    )
}

export default HomePage