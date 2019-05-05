import React, { Component } from 'react'
import './Social_Network.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faInstagram,
  faFacebook,
  faEnvelope
);


class Social_Network extends Component {
    render() {
        return (
            <div className='social_wrapper'>
                <a className='text-danger' href='#'>
                    <FontAwesomeIcon
                        className='social_icon instagram' 
                        icon={['fab', 'instagram']} 
                        size="2x" 
                        fixedWidth 
                    />
                </a>
                <a className='text-primary' href='#'>
                    <FontAwesomeIcon 
                        className='social_icon facebook' 
                        icon={['fab', 'facebook']} 
                        size="2x" 
                        fixedWidth 
                    />
                </a>
                <a className='text-white' href='#'>
                    <FontAwesomeIcon
                        className='social_icon mail'
                        icon='envelope'
                        size="2x"
                        fixedWidth 
                    />
                </a>
                
                
            </div>
        )
    } 
}

export default Social_Network;
