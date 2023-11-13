import { FaMapMarkedAlt, FaBus } from 'react-icons/fa';
import { FiBriefcase } from 'react-icons/fi';
import { MdPersonOutline, MdAttachMoney } from 'react-icons/md';
import { BsCardChecklist, BsSun } from 'react-icons/bs';
import { PiLightbulbFilamentLight, PiNotebook } from 'react-icons/pi';
import { LuBaby, LuDollarSign } from 'react-icons/lu';
import { AiOutlineCalendar, AiOutlineGlobal } from 'react-icons/ai';
import { RiSpeakLine } from 'react-icons/ri'
// import { FaBus } from 'react-icons/fa';
// import { PiNotebook } from 'react-icons/pi';
// import { MdAttachMoney } from 'react-icons/md';
// import { BsSun } from 'react-icons/bs';
// import { AiOutlineGlobal } from 'react-icons/ai';
// import { LuDollarSign } from 'react-icons/lu';

import HomeTrend1 from '../components/Assets/Home_trending1.png'
import HomeTrend2 from '../components/Assets/Home_trending2.png'
import HomeTrend3 from '../components/Assets/Home_trending3.png'

import HomeBrand1 from '../components/Assets/Home_brand1.png'
import HomeBrand2 from '../components/Assets/Home_brand2.png'
import HomeBrand3 from '../components/Assets/Home_brand3.png'

import Europe1 from '../components/Assets/Europe1.png'
import Europe2 from '../components/Assets/Europe2.png'
import Europe3 from '../components/Assets/Europe3.png'

import Asia1 from '../components/Assets/Asia1.png'
import Asia2 from '../components/Assets/Asia2.png'
import Asia3 from '../components/Assets/Asia3.png'


export const Data = {
    menu: {
        destination: "Destinations",
        privateTrips: "Private trips",
        blog: "Blog",
        aboutUs: "About us"
    },

    support: {
        contactUs: "Contact Us",
        faq: "FAQ",
        privacy: "Privacy Policy",
        terms: "Terms of Use"
    },

    following: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedIn: "LinkedIn",
        tiktok: "Tiktok"
    }
}

export const Reasons = [
    {
        icon: <FaMapMarkedAlt />,
        text: "More than 149 travel titles currently in print"
    },
    {
        icon: <FiBriefcase />,
        text: 'Supporting millions of travellers since 1982'
    },
    {
        icon: <MdPersonOutline />,
        text: 'Our utstanding customer satisfaction'
    }
]

export const Reasons2 = [
    {
        icon: <BsCardChecklist />,
        title: "Best Things to Do",
        text: "Italy has so many delights to offer its visitors, it's hard to know where to start. Here's our pick of the best experiences Italy has to offer you."
    },
    {
        icon: <PiLightbulbFilamentLight />,
        title: "Things to Know",
        text: "With so many attractions, it's hard to know where to begin with a trip to Italy. Here's some local insight into the essential things to know before you go."
    },
    {
        icon: <FaBus />,
        title: "Transportation",
        text: "Your guide to traveling independently across Italy, from the Alps to the islands."
    },
    {
        icon: <PiNotebook />,
        title: "Visa Requirements",
        text: "Italy is one of the most visited countries in Europe and its many attractions are hard to resist. Find out if you need a visa before you go."
    },
    {
        icon: <MdAttachMoney />,
        title: "Money and Costs",
        text: "These top budget tips can help you save money while exploring Italy."
    },
    {
        icon: <LuBaby />,
        title: "Traveling with Kids",
        text: "Experience the best of Italy as a family with this guide to the top things to do there with kids."
    }
]


export const countriess = [
    { Europe: ['Azores', 'Croatia', 'Georgia', 'Germany', 'Greece', 'Iceland', 'Ireland', 'Italy', 'Portugal', 'Scotland', 'Spain', 'United Kingdom'] },
    { Asia: ['Cambodia', 'China', 'India', 'Indonesia', 'Japan', 'Jordan', 'South Korea', 'Sri Lanka', 'Taiwan', 'Thailand', 'Turkey', 'Vietnam'] },
    { Africa: ['Egypt', 'Ethiopia', 'Kenya', 'Ghana', 'Madagascar', 'Mauritius', 'Morocco', 'Namibia', 'Rwanda', 'South Africa', 'Uganda', 'Tanzania & Zanzibar'] },
    { C_America: ['Belize', 'Costa Rica', 'Cuba', 'Dominican Republic', 'Guatemala', 'Honduras', 'Jamaica', 'Nicaragua', 'Mexico', 'Panama', 'Puerto Rico', 'Trinidad and Tobago'] },
    { S_America: ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Peru'] }
];


export const contactInfoData = [
    {
        text: 'To advertise on Tourista:',
        email: 'advertise@tourista.com',
    },
    {
        text: 'To become an affiliate partner::',
        email: 'affiliate@tourista.com',
    },
    {
        text: 'To contact the hotels team:',
        email: 'hotels@tourista.com',
    },
    {
        text: 'Send your request to republish Tourista content:',
        email: 'contentlicensing@tourista.com',
    },
    {
        text: 'To contact the experiences team:',
        email: 'experiences@tourista.com'
    }
];

export const contact = [
    {
        title: 'Content Contact',
        text: 'To report an issue to our content teams please contact:',
        email: 'corrections@tourista.com'
    },
    {
        title: 'Press Contact',
        text: 'If you’re a journalist / influencer with a press enquiry about Tourista, please contact our press office:',
        email: 'pr@tourista.com'
    },
    {
        title: 'Partnership Contact',
        text: 'For partnership opportunities:',
        email: 'partnerships@tourista.com'
    }
];

export const questions = [
    {
        id: '01',
        title: 'What are the best tips for finding budget-friendly travel accommodations?'
    },
    {
        id: '02',
        title: 'How can I find authentic local experiences when traveling?'
    },
    {
        id: '03',
        title: 'What should I pack for a long-term trip or backpacking adventure?'
    },
    {
        id: '04',
        title: 'What are some strategies for overcoming jet lag when traveling across time zones?'
    },
    {
        id: '05',
        title: 'What are the visa requirements for popular tourist destinations?'
    }
]

export const statisticss = [
    {
        icon: <AiOutlineCalendar />,
        title: 'BEST TIME TO VISIT',
        text1: 'High s/ May-Sept'
    },
    {
        icon: <BsSun />,
        title: 'CLIMATE',
        text1: 'High 32°C',
        text2: 'Low 0°C'
    },
    {
        icon: <AiOutlineGlobal />,
        title: 'TIMEZONE',
        text1: 'Central European',
        text2: 'Time (UTC +1)'
    },
    {
        icon: <LuDollarSign />,
        title: 'CURRENCY',
        text1: 'Euro',
        text2: 'Dollar'
    },
    {
        icon: <RiSpeakLine />,
        title: 'LOCAL LANGUAGE',
        text1: 'Italian',
        text2: 'English'
    }
]


export const productData1 = [
    {
        image: HomeTrend1,
        country: 'SPAIN TRIP',
        city: 'Magical Madrid To Marrakech By Train',
        time: '12 days',
        price: '$1299.00'
    },
    {
        image: HomeTrend2,
        country: 'ITALY TRIP',
        city: 'Spectacular Sicily',
        time: '5 days',
        price: '$250.00'
    },
    {
        image: HomeTrend3,
        country: 'TURKEY TRIP',
        city: 'TURKEY TRIP',
        time: '7 days',
        price: '$400.00'
    }
]

export const productData2 = [
    {
        image: HomeBrand1,
        country: 'SPAIN TRIP',
        city: 'Magical Madrid To Marrakech By Train',
        time: '12 days',
        price: '$1299.00'
    },
    {
        image: HomeBrand2,
        country: 'ITALY TRIP',
        city: 'Spectacular Sicily',
        time: '5 days',
        price: '$250.00'
    },
    {
        image: HomeBrand3,
        country: 'TURKEY TRIP',
        city: 'TURKEY TRIP',
        time: '7 days',
        price: '$400.00'
    }
]

export const Europe = [
    {
        image: Europe1,
        country: 'ICELAND TRIP',
        city: 'Volcanic Iceland',
        time: '7 days',
        price: '$2299.00'
    },
    {
        image: Europe2,
        country: 'SCOTLAND TRIP',
        city: 'The Scottish Highlands',
        time: '7 days',
        price: '$1687.00'
    },
    {
        image: Europe3,
        country: 'PORTUGAL TRIP',
        city: 'Atlantic Azores',
        time: '6 days',
        price: '$1220.00'
    }
]

export const Asia = [
    {
        image: Asia1,
        country: 'CHINA TRIP',
        city: 'Icons Of China',
        time: '5 days',
        price: '$1399.00'
    },
    {
        image: Asia2,
        country: 'THAILAND TRIP',
        city: 'Cambodia & Vietnam',
        time: '7 days',
        price: '$2350.00'
    },
    {
        image: Asia3,
        country: 'TAIWAN TRIP',
        city: 'A Taste Of Taiwan',
        time: '7 days',
        price: '$1900.00'
    }
]