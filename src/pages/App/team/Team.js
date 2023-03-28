import React from 'react'
import './Team.css'
import moni from './moni.png';
import mith from './mith.png';

const Team = () => {
    return (
        <div>
            
            <div className='team'>
            <br/><br/>
                <h1 id='name'>Team Members</h1>
                <div className='mem mit'>
                    <h2>Mithun Raghav</h2>
                    <br/>
                    <img src={mith} alt='mith'></img>
                </div>
                <div className='mem mon'>
                    <h2>Monishwar M C</h2>
                    <br/>
                    <img src={moni} alt='moni'></img>
                </div>
            </div>
        </div>
    )
}

export default Team
