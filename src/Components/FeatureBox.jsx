import React, {useState} from 'react'
 

function FeatureBox(props) {
    return (
      <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>
         </div>
         <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>text text text text text text text text text texts</p>
         </div>
    
      </div>
    );
  }
  
  export default FeatureBox;