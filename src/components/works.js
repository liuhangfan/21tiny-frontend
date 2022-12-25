import React from "react";
import CodeIcon from '@mui/icons-material/Code';

export default function Works() {
    return (
      <section id="Works" className="text-gray-400 bg-gray-900 body-font pt-20">
        <div className="container px-5 py-10 mx-auto text-left lg:px-35">
            <div className="flex flex-col w-full mb-10">
                <CodeIcon color="primary" sx={{ fontSize: 60 }} className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
                    How It Works
                </h1>
                <div className="container mx-auto p-2 flex md:flex-row flex-col">
            <div className="lg:w-1/3 md:w-1/3 bg-[#208ef4] rounded-lg overflow-hidden sm:mr-5 p-5 items-end  relative">
                <p>placeholder</p>
            </div>
                <div className="lg:w-2/3 md:w-2/3 rounded-lg overflow-hidden sm:mr-5 p-5 items-end  relative">
                <h2 className="text-lg font-medium title-font mb-4 text-white">Our product is a tool that transforms your long links into shorter ones. It can generate drastically shorten your long links and still reliably direct to the same web pages. To use our link shortener, the user only has to copy and paste their long link into our tool and we condense it into a more shareable link. Our links are reliable, safe, and never expire.</h2>
                <h2 className="text-lg font-medium title-font mb-4 text-white">This project is completely open source , the back-end system is built by Springboot , the storage layer relies on mongoDB. short ID generation algorithm is a combination of snowflake algorithm and BASE64 . The front-end system is built by react, JavaScript. If you are interested in this project, please do not hesitate to check out our github.</h2>
                </div>
            </div>
            </div>
            
        </div>
      </section>
    );
}