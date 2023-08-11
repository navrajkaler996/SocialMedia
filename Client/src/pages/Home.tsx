import React from 'react'
import Tabs from '../components/Tabs';

const Home: React.FC = () => {

    return <div className='home'>
        <div className="home__info-container">        
            <p className='home__username text-1'>Eazy-eee</p>
            <p className='home__location'>Winnipeg, MB</p>
            <p className="home__status">Study Permit</p>
            
        </div>

        <Tabs />
    </div>

}

export default Home;