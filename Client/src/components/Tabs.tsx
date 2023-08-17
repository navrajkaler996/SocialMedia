import { useEffect, useState } from "react"

//Constants
import { TAB_VALUES } from "../utils/constants"

//Styles for arrows to disable them.
const styles = {
    disable: {
        pointerEvents: "none"
    }
}
//Functioncal component that returns the tabs.
//It accepts two propes: activeTabIndex and clickHandler.
//activeTabIndex tracks the active tab.
//clickHandler updates the value of activeTabIndex.
const Tabs: React.FC<{activeTabIndex: Number, clickHandler: Function}> = ({activeTabIndex, clickHandler}) => {

    //State to track which three tabs are being displayed on the screen.
    //By default it is 1, 2, 3, which means Feed, Profile, and Explore are being displayed.
    const [activeTabsIndices, setActiveTabIndices] = useState([1,2,3])
    
    //State to change the CSS of right arrow dynamically.
    const [rightArrowStyles, setRightArrowStyles] = useState({})

    //State to change the CSS of left arrow dynamically.
    const [leftArrowStyles, setLeftArrowStyles] = useState({})

    //useEffect hook to track the value of activeTabIndices.
    //This hook is used to disable and enable the arrows.
    useEffect(() => {
        //Disables the right arrow and enables the left one
        if(activeTabsIndices[2] === TAB_VALUES.length - 1) {      
            setRightArrowStyles(styles.disable)
            setLeftArrowStyles({})
        }
        //Disables the left arrow and enables the right one
        else if(activeTabsIndices[0] === 0){
            setLeftArrowStyles(styles.disable)
            setRightArrowStyles({})
        }
        //enables both the arrows
        else{
            setRightArrowStyles({})
            setLeftArrowStyles({})
        }

    }, [activeTabsIndices])

    

    //Function to increase the values of activeTabIndeces by 1.
    //This will move the tabs to right when right arrow is clicked.
    const moveRight = () => {
        let tempActiveTabIndices = activeTabsIndices.map((index) => index + 1);
        setActiveTabIndices(tempActiveTabIndices)  
    }


    //Function to decrease the values of activeTabIndeces by 1.
    //This will move the tabs to left when left arrow is clicked.
    const moveLeft = () => {
        let tempActiveTabIndices = activeTabsIndices.map((index) => index - 1);
        setActiveTabIndices(tempActiveTabIndices)
    }

    return <div className="tabs">
            <div className="tabs__left-symbol" style={leftArrowStyles} onClick={moveLeft}>&#60;</div>
            {/* The tabs are loaded dynamicaly using the TAB_VALUES array. */}
            {
                TAB_VALUES.map((tabName, i) => activeTabsIndices.includes(i) && <div className={`tabs__${tabName}`} style={activeTabIndex === i ? {backgroundColor: "#D9D9D9", color: "#000", fontSize: "1em"}: {}} onClick={() => clickHandler(i)}><p>{tabName}</p></div>)   
            }  
            <div className="tabs__right-symbol" style={rightArrowStyles} onClick={moveRight}>&#62;</div>
        </div>

}

export default Tabs