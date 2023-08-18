//Constants
import { TAB_VALUES } from "../utils/constants"

//Functioncal component that returns the tabs.
//It accepts two propes: activeTabIndex and clickHandler.
//activeTabIndex tracks the active tab.
//clickHandler updates the value of activeTabIndex.
const Tabs: React.FC<{activeTabIndex: Number, clickHandler: Function}> = ({activeTabIndex, clickHandler}) => {

    return <div className="tabs">
            {/* The tabs are loaded dynamicaly using the TAB_VALUES array. */}
            {
                TAB_VALUES.map((tabName, i) =>  <div className={`tabs__${tabName}`} style={activeTabIndex === i ? {backgroundColor: "#2cc0ff", color: "#000", fontSize: "1em"}: {}} onClick={() => clickHandler(i)}><p>{tabName}</p></div>)   
            }    
        </div>

}

export default Tabs