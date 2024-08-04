import React from 'react';
import { IoStatsChart } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";

const icons = [<IoStatsChart/>, <FaBagShopping/>, <MdOutlineCancel/>, <HiCurrencyDollar/>];

const Cards = ({data, index}) => {
  return (
    <div className='rounded px-3 py-2' style={{backgroundColor:"#292A31"}}>
        <div className='d-flex align-items-center mb-2'>
            <span className='rounded d-flex align-items-center justify-content-center me-2' style={{backgroundColor: data.iconBg, width:"32px", height:"32px"}}>
               {React.cloneElement(icons[index], { color: data.iconColor, size: "18" })}
            </span>
            <p className='text-light mb-0' style={{fontSize: "12px"}}>{data.title}</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <span className='text-light' style={{fontSize:"24px", fontWeight:"bold"}}>{data.number}</span>
            <span style={data.isProfit ? {color: "#4ade80"} : {color: "#f87171"}}>
                {data.isProfit ? "▲" : "▼"}
                <span style={{fontSize: "12px", marginLeft: "2px"}}>{data.percent}%</span>
            </span>
        </div>
    </div>
  );
}

export default Cards;