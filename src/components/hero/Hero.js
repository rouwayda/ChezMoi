import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Trouvez l'endroit idéal</h1>
                <p className='search-text'> Recherchez la plus grande sélection d'appartements de luxe, de maisons multifamiliales et de maisons de luxe. </p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder='Chercher..' />
                    </div>
                    <div className='radio'> 
                        <input type='radio' checked />
                        <label>Achat</label>
                        <input type='radio'  />
                        <label>Location</label>
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero