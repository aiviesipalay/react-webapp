import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('api/services');
        setServices(response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchServices();
  }, []);


  const [currentPage, setcurrentPage] = useState(1)
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = services.slice(firstIndex, lastIndex);
  const npage = Math.ceil(services.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  return (
    <div className='container'>
    <table className='table table-sm table-hover'>
      <thead>
        <tr>
          <th></th>
       
          <th className="text-center py-3" scope='col'><h4>Category</h4></th>
          <th className="text-start py-3" scope="col"><h4>Service Name</h4></th>
          <th className="text-start py-3" scope="col"><h4>Price</h4></th>
          <th></th>
         
         
        </tr>
      </thead>
      <tbody>
        {records.map(service => (
          <tr key={service._id}>
          
            <td></td>
            <td className='text-center'><h4 className='fs-6'>{service.category}</h4></td>
            <td className='text-start'><h4 className='fs-6'>{service.serviceName}</h4></td>
            <td><h4 className='fs-6'><i class="fa-solid fa-peso-sign"></i>{service.price}</h4></td>
            <td></td>
          
          </tr>
        ))}
      </tbody>
    </table>
    <nav>
          <ul className='pagination'>
            <li className='page-item'>
              <a href='#' className='page-link' onClick={prePage}>Prev</a>
            </li>
            {
              numbers.map(service => (
                <li className={`page-item ${currentPage === service ? 'active' : ''}`} key={service._id}>
                    <a href="#" className='page-link' onClick={() => changeCpage(service)}>{service}</a>
                </li>
              ))
            }
            <li className='page-item'>
                <a href='#' className='page-link' onClick={nextPage}>Next</a>
            </li>
          </ul>
    </nav>
    </div>

  );
  function prePage(){
    if(currentPage !== firstIndex){
      setcurrentPage(currentPage - 1)
    }
  }
  function changeCpage(id){
    setcurrentPage(id)
  }
  function nextPage(){
    if(currentPage !== lastIndex){
      setcurrentPage(currentPage + 1)
    }
  }
};

export default Services;
