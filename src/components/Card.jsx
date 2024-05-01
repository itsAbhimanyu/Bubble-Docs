import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
    return (
        <motion.div drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
            className='relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-300/90 px-5 py-10 overflow-hidden' >
            <FaRegFileAlt />
            <p className='text-m leading-tight mt-5 font-semibold'>{data.desc}</p>


            <div className='footer absolute bottom-0 bg-transparent w-full left-0'>
                <div className='flex items-center justify-between px-8 py-3 mb-3'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7 bg-zinc-100 rounded-full flex items-center justify-center'>
                        {data.close ? <IoCloseOutline /> : <FaCloudDownloadAlt size='.7em' />}
                    </span>
                </div>

                {
                    data.tagDetails.isOpen &&
                    (<div className={`tag w-full py-4 ${data.tagDetails.tagColor === "blue" ? "bg-blue-400" : "bg-green-400"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tagDetails.tagTitle}</h3>
                    </div>)
                }
            </div>
        </motion.div>
    );
}

export default Card;