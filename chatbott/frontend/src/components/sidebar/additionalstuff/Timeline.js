import React from 'react'
import {fetchScenario,selectScenario} from '../../../Redux/stepsSlice'
import { useDispatch , useSelector} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StepDetails from './StepDetails';
import axios from '../../../axios/axios'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function Timeline() {
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);

  const scenario =  useSelector(selectScenario);      
  React.useEffect(() => {
    const fetchdata = async ()=> {const result = await axios.get('/scenario/selectedScenarioByuserId')
    console.log('result data :p ',result.data.progress);
    setActiveStep(result.data.progress)
  }
    fetchdata();
    dispatch(fetchScenario());
    }, [])

    React.useEffect(() => {
     const x = async ()=>{ 
       if(activeStep !=0){
    const updatecurrentstation =
    {
        activeStep : activeStep
    }
    console.log('activeStep',activeStep);
    const result = await axios.post('/scenario/updateProgress',updatecurrentstation)
    console.log(result.data);}}
x();
      }, [activeStep])
  
  const handleNext = () => {
    //Await ! ! !
   setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };

  const handleBack = () => {
   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
    return (
        <div>
          {console.log('scenario.scenario_id',!scenario)}
          <div >
            { !scenario  ?  <div>null</div> :
                (
                <>
                <Stepper activeStep={activeStep} orientation="vertical">
                {console.log(activeStep ,'  *  ', scenario.scenario_id.steps.length)}
                {scenario.scenario_id.steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel>StepLabel</StepLabel>
                    <StepContent>
                      {console.log(label)}
                      <StepDetails course={label} /> 
                      <div >
                        <div>
                          <Button
                          
                            onClick={handleBack}
                          
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                          
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
             { (activeStep === scenario.scenario_id.steps.length) && (
                console.log('in the end of the day everything is gonna be alright & if its not , its not')
              )}
              </> )
            }
       
      {} 
    </div>

        
        
    </div>
    )
}

export default Timeline
