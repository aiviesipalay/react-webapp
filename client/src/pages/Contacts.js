import React from "react";
import "./Contact.css";
import CarouselContact1 from "../carouselChic1";
import CarouselContact2 from "../carouselChic2";

const Contacts = () => {
    return (
    <>
        <div className="container-fluid text-center mt-3">

        <div className="row p-0 m-0">
     
     <div className="col-md-6  p-0 mt-2 contact bg-white">
         
           <div className="card card-contact p-0 m-0">
           
             <div className="card-header header p-0 m-0 ">
              <CarouselContact1 />
             </div>
           
                <div className="container-fluid d-flex text-center"><h6>Chic Station 1</h6></div>
                <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-location-dot me-4 ps-2"></i>Padre Gomez Roxas St., Davao City</h6></div>
                <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-phone me-4 ps-2 "></i>09550954670</h6></div>
                
                <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-phone me-4 ps-2 mb-2"></i>09454430380</h6></div>
  
          </div> 
         </div>

         <div className="col-md-6  p-0 mt-2 contact">
         
         <div className="card card-contact p-0 m-0">
         
           <div className="card-header header p-0 m-0 ">
            <CarouselContact2 />
           </div>
         
              <div className="container-fluid d-flex text-center"><h6>Chic Station 2</h6></div>
              <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-location-dot me-4 ps-2"></i>Rizal corner De Jesus St., Davao City</h6></div>
              <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-phone me-4 ps-2 "></i>09859559334</h6></div>
              
              <div className="container-fluid d-flex p-0 m-0"><h6><i class="fa-solid fa-phone me-4 ps-2 mb-2 "></i>09454430380</h6></div>

        </div> 
       </div>

       

         
         


          </div> 



        </div>
       
    </>
    
    )
     
    
  
}

export default Contacts;