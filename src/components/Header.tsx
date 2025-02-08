import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const links = [
    {
        title: "Home",
        link: "",
        active: true
    },
    {
        title: "Highlights",
        link: ""
    },
    {
        title: "Interviews",
        link: ""
    },
    {
        title: "Behind the Scenes",
        link: ""
    },
    {
        title: "News",
        link: ""
    },
]

const categories = [
    {
        title: "Soccer",
        link: "",
        active: true
    },
    {
        title: "Basketball",
        link: ""
    },
    {
        title: "Tennis",
        link: ""
    },
    {
        title: "Golf",
        link: ""
    },
    {
        title: "Cycling",
        link: ""
    },
    {
        title: "Motorsport",
        link: ""
    },
    {
        title: "Baseball",
        link: ""
    },
    {
        title: "Ice Hockey",
        link: ""
    },
    {
        title: "Mma",
        link: ""
    },
    {
        title: "Cricket",
        link: ""
    },
    {
        title: "Rugby",
        link: ""
    },
    {
        title: "Boxing",
        link: ""
    },
    {
        title: "Football",
        link: ""
    },
]

const leagues = [
    {
        title: "Premier League",
        link: ""
    },
    {
        title: "La Liga",
        link: ""
    },
    {
        title: "Serie A",
        link: ""
    },
    {
        title: "Bundesliga",
        link: ""
    },
    {
        title: "UEFA Champions League",
        link: ""
    },
    {
        title: "EFA Europa League",
        link: ""
    },
]

const Header = () => {
    return (
        <div>

            <div>
                <div className='mb-4' >

                    <div className="flex justify-end text-xs">EN</div>
                    <div className='flex justify-between items-center' >
                        <Image src="/logo-light.svg" width={150} height={100} className="h-14 w-60" alt="" />

                        <p className='uppercase text-xs' >Login/Register</p>
                    </div>

                </div>

                <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-4">
                    <div className="flex gap-4">
                        {links.map((league, index) => (
                            <Link
                                key={index}
                                href={league.link}
                                className={`${league.active && '!border-b-white '} text-sm uppercase border-b border-b-transparent hover:border-b-white py-1 font-semibold`}
                            >
                                {league.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-8">
                    <div className="flex gap-2">
                        {categories.map((league, index) => (
                            <Link
                                key={index}
                                href={league.link}
                                className={`${league.active && '!bg-main '} text-xs uppercase border-b border-b-transparent p-1 px-2  bg-[#303030] rounded-md `}
                            >
                                {league.title}
                            </Link>
                        ))}
                    </div>
                </div>




                <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <div className="flex gap-4">
                        {leagues.map((league, index) => (
                            <Link
                                key={index}
                                href={league.link}
                                className="text-[#ffffff99] text-xs uppercase hover:text-white border-b border-b-transparent hover:border-b-white"
                            >
                                {league.title}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header