import Image from "next/image";
import Link from "next/link";
import React from "react";

const BackgroundVideo: React.FC = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/bg_desktop.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Red Overlay */}
            <div className="absolute inset-0 bg-[#ea0029]/50"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-between max-h-[80vh] my-auto text-center text-white p-6 leading-none">
                <div>
                    <h1 className="text-4xl md:text-6xl font-medium uppercase font-sans text-center"><center>
                    Welcome to <br />
                    <Image src="/logo-light.svg" width={150} height={100} className="h-14 w-80" alt="" />
                    </center>
                        </h1>
                  

                </div>
                <div>
                    <Link href={"/soccer"}>
                        <button className="p-2 px-10 bg-main uppercase text-lg" >
                            [ See what’s inside ]
                        </button>
                    </Link>


                    <div className="flex mt-6" >
                        <Image src="/download-apple.png" width={150} height={100} className="h-14 w-40" alt="" />
                        <Image src="/download-google.png" width={150} height={100} className="h-14 w-40" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundVideo;
