import React from 'react';

import Link from 'next/link';

export default function Navigation(): JSX.Element {
    return (
        <header className="sm:mb-10 sm:pb-5 sm:pt-8 sm:shadow-lg bg-white px-10">
            <div className="flex container mx-auto lg:max-w-screen">
                <div className="flex w-full text-xl items-center sm:items-baseline">
                    <div className="w-full text-center">
                        <img
                            alt="Profile image for John Braun"
                            src="/assets/profile/profile_resized.jpg"
                            className="inline sm:hidden mr-2 h-8 w-8 shadow-lg rounded-full"
                        />

                        <Link href="/">
                            <a className="no-underline text-black font-semibold">
                                John Braun<span className="text-sm font-thin">&apos;s blog</span>
                            </a>
                        </Link>

                        <img
                            alt="Profile image for John Braun"
                            src="/assets/profile/profile_resized.jpg"
                            className="sm:inline hidden ml-5 h-12 w-12 shadow-lg rounded-full"
                        />

                        <div className="sm:block hidden flex justify-center flex-wrap text-xs tracking-tight font-semibold ml-1 align-top inline">
                            <a className="flex-1/2" href="https://twitter.com/jhnbrn90" rel="me">
                                <svg className="no-underline inline-block w-6 h-6 fill-current" viewBox="0 0 400 400">
                                    <path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/>
                                </svg>
                                <span className="align-center">twitter</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-1 justify-end text-xs sm:text-normal md:text-xl">
                        <Link href="/about">
                            <a className="no-underline text-black font-semibold">
                                &#47;&#47;<span className="text-sm font-thin">about</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
