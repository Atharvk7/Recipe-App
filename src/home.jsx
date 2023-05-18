import "./App.css"
import { Link } from "react-router-dom";
export default function HomePage() {
    return (
        <div
        style={{backgroundImage:'linear-gradient(to right,blue,black'}}
        >
      <div
        style={{
          textAlign: 'center',
          color:'white',
          overFlow:"hidden",
        
          justifyContent: 'center',
          backgroundImage: 'url(https://res.cloudinary.com/dqxq9urjj/image/upload/v1684412318/cloud-computing-2001090_1280_1_zsvk4a.webp)',
          objectFit: 'contain',
          minWidth: '100vw',
          minHeight: '100vh',
          backgroundRepeat: 'no-repeat', // Add this line to prevent background image repetition
        }}
      >
        <div 
        style={{paddingTop:'40vh' ,display:'flex', justifyContent:'start'}}
        >
       <span style={{fontSize:'45px'}}>Cloud Computing project by:</span> 
       </div>
        <br />
        <strong style={{display:'flex', justifyContent:'start', fontSize:'25px',paddingLeft:'10vw',cursor:'pointer'}} className="names">
          1. Devraj Malawe
          <br />
          2. Atharv Kulkarni
          <br />
          3. Parth Kadav
          <br />
          4. Rudraksh Kokane
        </strong><br/>
<Link to='/recipes'>
        <button  className='button'>
     <strong>Next</strong> 
  </button>
  </Link>
  </div>
      </div>
     
  
    );
  }