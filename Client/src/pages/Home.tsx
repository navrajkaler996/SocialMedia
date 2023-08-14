import { useState } from 'react'
import Tabs from '../components/Tabs';
import Profile from './Profile';

const Home: React.FC = () => {

    //State to track which tab is active
    const [activeTabIndex, setActiveTabIndex] = useState<Number>(2)

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
        <Tabs activeTabIndex={activeTabIndex} clickHandler={clickHandler} />

        {
            switchTabs()
        }
    </div>

}

export default Home;