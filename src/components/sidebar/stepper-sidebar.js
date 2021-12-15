import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { TripOrigin } from '@material-ui/icons';
import styled from 'styled-components';
import { colors } from "src/styles/constants";

const StepperContainer = styled.div`
  margin-top: 25px;
  .MuiStepper-root {
    .MuiStep-root {
      .MuiStepLabel-root {
        padding: 0;
        .MuiStepLabel-iconContainer {
          padding: 0;
          margin-right: 12px;
          svg {
            width: 20px;
            height: 20px;
            z-index: 9;
            color: ${colors.secondaryGreen};
          }
        }
        .MuiStepLabel-labelContainer {
          span {
            font-size: 16px;
            font-family: 'fontStyle-bold';
            letter-spacing: unset;
            line-height: 0;
            color: ${colors.secondaryGreen};
            &.Mui-disabled {
              color: #6E6E78;
            }
          }
        }
        &.Mui-disabled {
          .MuiStepLabel-iconContainer {
            svg {
              color: #D7D7DC;
            }
          }
        }
      }
    }
    .MuiStepConnector-root {
      margin-left: 8px;
      margin-top: -5px;
      margin-bottom: -5px;
      span {
        min-height: 54px;
        border-left-width: 4px;
        border-color: #D7D7DC;
      }
      &.Mui-active, &.Mui-completed {
        span {
          border-color: ${colors.secondaryGreen};                   
        }        
      }
    }
  }
`

const getSteps = () => {
  return ['Order Pending', 'Order Processing', 'Delivering', 'Completed'];
}

const StepperSidebar = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  
  useEffect(() => {
    props?.status === 'pending' ?
    setActiveStep(0)
    :
    props?.status === 'processing' ?
    setActiveStep(1)
    :
    props?.status === 'delivery' ?
    setActiveStep(2)
    :
    props?.stauts === 'complete' ?
    setActiveStep(3)
    :
    setActiveStep(3)
  }, [setActiveStep, props])
  const StepIcon = (props) => {
    const { active, completed } = props;

    return (
      <>
        {
          completed ? <TripOrigin className="completed" /> : <TripOrigin />
        }
      </>
    )
  }

  return (    
    <StepperContainer>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </StepperContainer>
  );
}

export default StepperSidebar;