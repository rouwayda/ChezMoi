import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
              <a href='https://www.facebook.com/ChezMoiImmo'><FaFacebook className='icon' /> </a>  
               <a href='https://instagram.com/chez_moi_immo?igshid=YmMyMTA2M2Y='> <FaInstagram className='icon' /> </a>
{/*<FaTwitter className='icon' /> */}
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='col'>
                    <h3 >A propos</h3>
                    <p>ChezMoi est une agence immobilière sise au Jardin de Carthage.
                       <p> Elle est spécialisée dans la vente, la location et la gestion de tous types de bien immobilier, notamment dans des quartiers huppés de Tunis.
<p>Notre but est de satisfaire nos chers clients</p>
</p> </p>
                  
                </div>
            
                <div className='col'>
                    <h3>Informations</h3>
                    <p>Télephone : 20030305</p>
                    <p>Adresse : 4 Rue la paix les jardins de Carthage</p>
                    <p>Email : chez.moii@yahoo.com</p>
                    <p>Facebook : ChezMoi</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Footer