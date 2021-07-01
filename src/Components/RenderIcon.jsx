import React from 'react'
import PropTypes from 'prop-types'
import {HiOutlineClipboardList, HiCheckCircle
        } from 'react-icons/hi'
import {  MdHelpOutline,MdShoppingCart,MdToday,MdWatchLater,MdCallToAction,MdLocalShipping} from 'react-icons/md'
import {AiFillShopping,AiFillEye,AiOutlineWhatsApp,AiTwotoneMail} from 'react-icons/ai'
import {IoIosPin,IoMdContact} from 'react-icons/io'
import {TiDeviceDesktop,TiStarFullOutline} from 'react-icons/ti'
import {BsTrash} from 'react-icons/bs'
const iconByName = {
    schedule: HiOutlineClipboardList,
    questionMark:MdHelpOutline,
    car: MdShoppingCart,
    calendar: MdToday,
    watch: MdWatchLater,
    creditcard: MdCallToAction,
    deliver: MdLocalShipping,
    shoppingbag: AiFillShopping,
    view: AiFillEye,
    whats: AiOutlineWhatsApp,
    Email: AiTwotoneMail,
    location: IoIosPin,
    about: IoMdContact,
    computer: TiDeviceDesktop,
    star: TiStarFullOutline,
    check: HiCheckCircle,
    delete: BsTrash
}

const renderIcon = name => {
    const RenderIcon = iconByName[name]
    return <RenderIcon/>
}

const RenderIcon = ({name}) =>{
    return (
        <>
            {renderIcon(name)}
        </>
    )
}

export const validValues = [
    "schedule","questionMark","car","calendar","watch","creditcard","deliver","shoppingbag","view","whats",
    "Email","location","about","computer","star","check","delete"
]

RenderIcon.propTypes = {
name: PropTypes.oneOf(validValues).isRequired
}

export default RenderIcon