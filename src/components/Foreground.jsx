import React from 'react';
import Card from './Card';

function Foreground() {

    const ref = React.useRef();

    const data = [
        {
            desc: "Complete UX/UI Cheat Sheet with Shortcuts",
            fileSize: "1.0 mb",
            close: false,

            tagDetails: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "Complete MERN Stack Tutorials for Beginners",
            fileSize: "1.0 GB",
            close: false,

            tagDetails: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            desc: "Complete React Bootcamp with Projects",
            fileSize: "Upcoming...",
            close: true,

            tagDetails: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },

        {
            desc: "Abhimanyu Sharma",
            fileSize: "React Developer",
            close: false,

            tagDetails: {
                isOpen: true,
                tagTitle: "Contact",
                tagColor: "blue"
            }
        },
    ];

    return (

        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10'>
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
        </div>
    );
}

export default Foreground