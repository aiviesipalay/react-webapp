import { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import "./MyForm.css";
import axios from 'axios';
import Swal from 'sweetalert2'


function MyForm() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("")

  const Alert = () =>{
    Swal.fire("Message Sent! Thank you!")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Message Sent. Thank You!`)
    const data={
      Name:name,
      Email:email,
      Message:message
    }
    axios.post('https://sheetdb.io/api/v1/kxwj8jm7dlnn0',data).then((response)=>{
      console.log(response);
      // clearing form fields
      setName('');
      setemail('');
      setmessage('');
      Alert();
    })
  }

  return (
  <div className='container footerMain'>
    <div className='row'>
    <div className='col-md-6 my-2 '>
      <form onSubmit={handleSubmit}>

     
       <div className='flex mt-2 ms-5 p-1 text-start footerForm '>

       <input 
          type="text" 
          value={name}
          placeholder='Enter your Name'
          onChange={(e) => setName(e.target.value)}
          className='input-form'
          required
        />
        </div>
        <div className='flex ms-5 p-1 '>
        <input 
          type="email" 
          value={email}
          placeholder='E-mail Address'
          onChange={(e) => setemail(e.target.value)}
          className='input-form'
          required
        />    

       </div>
       <div className='flex ms-5 p-1'>
        <textarea rows={3} cols={50} onChange={(e) => setmessage(e.target.value)} value={message}>

        </textarea>
       </div>
       <div className='flex ms-5 px-1 py-1 mb-2'>
        {/* <input type="submit" className='text-white-50 bg-mute ' /> */}
        <button type='submit' className='btn btn-light'>Send</button>
      </div>
    </form>
    </div>
    <div className='col-md-6 text-center my-1 footerSoc' >
      <a href="https://web.facebook.com/chicstationdavao"><i class="fa-brands fa-facebook fs-1 pt-4 mt-5"></i></a>
      <a href='https://www.instagram.com/pakaykayyy/'><i class="fa-brands fa-square-instagram fs-1  pt-4 ms-4 mt-5"></i></a>
      <a href='#'><i class="fa-brands fa-twitter fs-1 ms-4 pt-4 mt-5"></i></a>
        <div className='container flex mt-3 border-top border-dark'>
          <i class="fa-solid fa-phone fs-3 mt-2 p-3"></i>
          <p className='d-inline-flex fs-3  mt-2 ms-3'>09550954670</p>
        </div>
    </div>
    </div>
    </div>
  )
}


export default MyForm;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);