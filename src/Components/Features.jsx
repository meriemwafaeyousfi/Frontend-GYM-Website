import React, {useState} from 'react'
import FeatureBox from './FeatureBox';
import image1 from '../images/1.svg'
import image2 from '../images/2.svg'
import image3 from '../images/3.svg'
import image4 from '../images/4.svg'

function Features() {
    return (
      <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <FeatureBox title='image1' image={image1} />
            <FeatureBox title='image2' image={image2} />
            <FeatureBox title='image3' image={image3} />
            <FeatureBox title='image4' image={image4} />
        </div>
      </div>
    );
  }
  
  export default Features;