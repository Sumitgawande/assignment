import React from 'react'
import './business-card.css'

/**
* @author
* @function BusinessCard
**/

const BusinessCard = (props) => {
  return(
      <div className="business-card">
      
    <div className='intro-section'>
        <div>
         <div className='my-image'>
             <div className='pentagon'></div>
             <img src={'/images/daniel-korpai-mxPiMiz7KCo-unsplash.jpg'} alt='freelancer' />
         </div>
         <div>
             <h2 className="text-white text-center">Sumit Gawande</h2>
             <p className="text-white text-center">Professional data entry specialist</p>
         </div>
         </div>
         </div>
         <div className='services'>
             <ul>
                 <li className="text-white">Data entry</li>
                 <li className="text-white">Data mining</li>
                 <li className="text-white">Web scrapping</li>
                 <li className="text-white" >Web research</li>
             </ul>
         </div>

   
    </div>
   )

 }

export default BusinessCard



