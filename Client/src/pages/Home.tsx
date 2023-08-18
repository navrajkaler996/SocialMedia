import { useState } from 'react'
import Tabs from '../components/Tabs';
import Profile from './Profile';

const Home: React.FC = () => {

    //State to track which tab is active
    const [activeTabIndex, setActiveTabIndex] = useState<Number>(1)

    //Function to update setActiveIndex.
    //This function is used in the Tabs component.
    const clickHandler = (i: Number) => {
        setActiveTabIndex(i)
    }

    //Function to switch tabs
    const switchTabs = () => {
        switch (activeTabIndex) {
            case 2:
                return <Profile /> 
            default:
                return <Profile />
        }
    }

    return <div className='home'>
        {/* General information of the user */}
        <div className="home__info-container">        
            <p className='home__username text-1'>Eazy-eee</p>
            <p className='home__location'>Winnipeg, MB</p>
            <p className="home__status">Study Permit</p>
        </div>

        {/* Tabs (three at a time)
            activeTabIndex and clickHandler are passed as props.
        */}
        <div className="home__tabs-container">
            <Tabs activeTabIndex={activeTabIndex} clickHandler={clickHandler} />
            <div className="home__tabs-container-side">
                Side1
            </div>

        </div>
        <div className="home__tabs-content">
            {
                switchTabs()
            }
            <div className="home__tabs-content-side">
                Side2
            </div>
        </div>
       
    </div>

}

export default Home;