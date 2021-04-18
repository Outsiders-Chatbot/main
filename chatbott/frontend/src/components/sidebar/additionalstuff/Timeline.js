import React from 'react'
import {fetchScenario,selectScenario} from '../../../Redux/stepsSlice'
import { useDispatch , useSelector} from 'react-redux'
import { Chrono } from "react-chrono";
function Timeline() {
  const scenario =  useSelector(selectScenario);      
    
    return (
        <div>
          {console.log('scenario.scenario_id',scenario)}
            <div style={{ width: "500px", height: "500px" ,display:'block'}}>
            {scenario ? <Chrono mode="VERTICAL">
            {
               scenario.scenario_id.steps.map( (index ,step)=>{
                 return  <div key={index}>
                   <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
                 </div>           
               })
             }
              
            </Chrono> :  <div>null</div>}
        </div>
        
        </div>
    )
}

export default Timeline
