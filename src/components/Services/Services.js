import React from 'react';
import Service from "./Service/Service";
import Logo1 from "../../assets/images/tools-website-95bef8b478b6c85387e84ee788519776163c56e0b019ed23465792a72ca2afc4.png"
import Logo2 from "../../assets/images/tools-budgeter-ec7fc844bc691fe93aedce93cd23271a5a78c914f01a9a125001be262182a4e7.png"
import Logo3 from "../../assets/images/tools-checklist-e124e29dd969e38098828647686c96804fe8369a8b09b6d9fc422f9a4e7b5e22.png"
import Logo4 from "../../assets/images/tools-guestlist-f425f68309d1c60ecfbd742d0c23f6ac6e4c5f06112cc32c7f03cb44e76e46c4.png"
import Logo5 from "../../assets/images/tools-vendors-ed23b60c6df77090fbdd0525fa4933dc63663550ded8c05f79e46168566f20b8.png"
import Logo6 from "../../assets/images/tools-registry-44ab24a86952730b44ec02ae3405b2665d61471f42a631968093d3613f4f95e8.png"

import "./Services.css";

const Services = () => {
    const serviceItems=[{
        title:"WEDDING WEBSITE",
        image:Logo1,
        content:"Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you.",
        link:'Create your website',
        href:"https://weds360.com/en/build_your_website"
    },
    {
        title:"BUDGETER",
        image:Logo2,
        content:"Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of.",
        link:"Create and manage your budget",
        href:"https://weds360.com/en/budgeter"
    },
    {
        title:"CHECK LIST",
        image:Logo3,
        content:"Set your tasks, create your priority list and never forget any wedding detail.",
        link:'Get your check list',
        href:'https://weds360.com/en/checklists'
    },
    {
        title:"GUEST LIST",
        image:Logo4,
        content:'Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips.',
        link:'Create your guest list',
        href:'https://weds360.com/en/guestlist'
    },
    {
        title:"VENDORS",
        image:Logo5,
        content:'Meet your service providers, view their profiles and make all the perfect choice for your wedding night.',
        link:'Start your tour',
        href:'https://weds360.com/en/services'
    },
    {
        title:"REGISTRY LIST",
        image:Logo6,
        content:'Escape the awkward moments and receiving the same gift twice by listing everything you\'ve thought of and every store you love.Let your guests choose what to get you for the wedding and say goodbye to unwanted presents.',
        link:'Create your dream list',
        href:'https://weds360.com/en/registry'
    }
]
    return(
        <div className="Services">
            <h3>WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.</h3>
            {serviceItems.map(serviceItem => (
                <Service 
                title={serviceItem.title} 
                image={serviceItem.image} 
                content={serviceItem.content}
                link={serviceItem.link}
                href={serviceItem.href}></Service>
            ))}
        </div>
    )
}

export default Services;