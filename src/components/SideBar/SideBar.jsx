import React, {useState} from 'react'
import Logo from '../../imgs/logo.png'
import './sidebar.css'
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
const SideBar = () => {
    const [selected,setselected]=useState(0)
    const [expanded,setExpanded]=useState(true)

    const sidebarVariants = {
        true: {
          left : '0'
        },
        false:{
          left : '-60%'
        }
      }
  return (
    <>
    <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpanded(!expanded)}>
        <UilBars />
      </div>
  
    <motion.div className="sidebar" variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}>
        <div className="logo" >
            <img src={Logo} alt="logo" />
            <span>Sh<span>o</span>ps</span>
        </div>
        <div className="menu">
            {
                SidebarData.map((item,index)=>{
                    return(
                        <div className={selected===index? 'menuItem active':'menuItem'}
                        key={index}
                        onClick={()=>setselected(index)}
                        >
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
            <div className="menuItem">
            <UilSignOutAlt />
            </div>
        </div>
    </motion.div>
    </>
  )
}

export default SideBar
