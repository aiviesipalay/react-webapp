  import React from "react";
import "./Modal.css"


export default function Modal({open, children, onClose}){
    if (!open) return null

    return(
        
        <div className=" p-0 m-0 mods text-end">
            
            <button onClick={onClose} className="btn btn-light p-1 buttonModal"><i class="fa-solid fa-x "></i></button>
            {children}
           
        </div>
      
    )
}



