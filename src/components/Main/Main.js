import React, { useState } from "react"
import { Add } from "../Add/Add"
import { Retrieve } from "../Retrieve/Retrieve"
import './Main.css'


export const Main =()=>{
    const [addPage,setAddPage] = useState(true);

    return <div className="tabs">
        <button className='button btn1' onClick={()=>{
            setAddPage(true)
        }}>Add New Person</button>
        <button className='button btn1' onClick={()=>{
            setAddPage(false)
        }}>Retrieve Information</button>
        {
            addPage === true ? <Add /> : <Retrieve />
        }
    </div>
}