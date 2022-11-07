import React from 'react'

import './Featured.css'

import House1 from '../../assets/lac1/8.jpg'
import Bed1 from '../../assets/lac1/1.jpg'
import Bed2 from '../../assets/lac1/3.jpg'
import Kitchen from '../../assets/lac1/4.jpg'
import Bathroom from '../../assets/lac1/5.jpg'

import House2 from '../../assets/soukra/5.jpg'
import Bed3 from '../../assets/soukra/2.jpg'
import Bed4 from '../../assets/soukra/4.jpg'
import Bathroom2 from '../../assets/soukra/6.jpg'
import LivingRoom from '../../assets/soukra/7.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Nos meilleures annonces </h1>
            {/*<p className='featured-text'>Selected listings by City, State, & Zip based on views.</p> */}
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <img src={Bathroom} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>Lac I</h2>
                        <p>Villa pour location</p>
                        
                    </div>
                <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Chambres:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Salles de bain:</p><p>6</p>
                            </div>
                        </div>
{/* <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                            </div>
                        </div> */}
    </div> 
    </div> 
                <div className='span-2 right-img-details'>
                    <p> Notre agence vous propose pour la location Cette villa de charme qui est située dans les plus calmes endroit au lac I . Elle vous permet  de profiter d'une localisation priviliguée  avec une  habitation en  tout point à vos besoins et vos envies.</p>
                    <button className='btn'>Plus de détails</button>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={Bed3} alt='' />
                <img className='order-3' src={Bed4} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


                <img className='order-4' src={Bathroom2} alt='' />
                <img className='order-5' src={LivingRoom} alt='' />

                <div className='span-2 right-img-details order-7'>
                        <p>On vous propose en location un appartement s+2  de 123m jamais habité , situé au coeur de la soukra , à proximité de toutes les commodités . Il occupe le deuxiéme et le dérnier  étage d'une résidence  en R+2 avec  ascenseur</p>
                    <button className='btn'>Plus de détails</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>La soukra</h2>
                        <p>Appartement à louer</p>
                        {/*<p className='price'>$2,677,000</p> */}
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Chambres:</p><p>2</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Salles de bain:</p><p>1</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Mètre Carré:</p><p>123m</p>
                            </div>
                           {/* <div className='info'>
                                <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                    </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured