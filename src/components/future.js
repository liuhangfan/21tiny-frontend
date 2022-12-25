import React from "react";
import EngineeringIcon from '@mui/icons-material/Engineering';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function Future() {
    return (
      <section id="Future" className="text-gray-400 bg-gray-900 body-font pt-2">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <EngineeringIcon color="primary" sx={{ fontSize: 60 }} className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Future Work
                </h1>
                <div className="flex flex-wrap m-4">
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                            <TerminalIcon className="mb-1" />
                            <p className="leading-relaxed mb-6">Keep track of your link. Get popular metrics on your tiny links like location, devices, frequent times, referrer and more</p>
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-white">
                                Dashboard
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                            <TerminalIcon className="mb-1" />
                            <p className="leading-relaxed mb-6">Create and manage thousands of links in one centralized place. Tracked clicks, link tagging, URL editing, and more</p>
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-white">
                                Urls Management
                                </span>
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
      </section>
    );
}