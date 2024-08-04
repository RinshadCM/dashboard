import React, { useState } from 'react'
import { IoMdLogOut } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";

function SideNav() {
    const [selected, setSelected] = useState('home');
  
    const selectedStyle = { color: "#7094FF", borderLeft: `4px solid #7094FF` };
  
    return (
      <div className='side-nav py-4' style={{ backgroundColor: "#292A31" }}>
        <div className='d-flex flex-column justify-content-between' style={{ height: "90%" }}>
          <ul className='d-flex flex-column gap-3 align-items-center p-0' style={{ listStyleType: "none", width: "100%" }}>
            <li style={selected === 'home' ? selectedStyle : {}} onClick={() => setSelected('home')}><AiFillHome /></li>
            <li style={selected === 'chart' ? selectedStyle : {}} onClick={() => setSelected('chart')}><MdInsertChartOutlined /></li>
            <li style={selected === 'clipboard' ? selectedStyle : {}} onClick={() => setSelected('clipboard')}><LuClipboardCheck /></li>
            <li style={selected === 'wallet' ? selectedStyle : {}} onClick={() => setSelected('wallet')}><CiWallet /></li>
            <li style={selected === 'bag' ? selectedStyle : {}} onClick={() => setSelected('bag')}><IoBagCheckOutline /></li>
          </ul>
          <span className='logout' style={{ color: "white" }}><IoMdLogOut /></span>
        </div>
      </div>
    );
  }

export default SideNav