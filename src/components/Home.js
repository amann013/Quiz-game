import React from 'react';
import  {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
function Home(props)
{
    return(
       <div className='container'>
           <div className='row text-white text-center heading'>
               A Platform where you can play quiz made up of random questions

           </div>
           <div className='row text-center'>
               <div className='col-12'>
               <Link to='/quiz'>
                   <Button color='info'> Play Quiz</Button>
               
               
                   </Link>
                   </div>
           </div>

       </div>
    );
}
export default Home;