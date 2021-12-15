import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import styled from "styled-components";
import { colors } from "src/styles/constants";
import { home } from "store/actions"

const TimeWrap = styled.div`
  font-size: 14px;
  font-family: 'fontStyle-bold';
  display: flex;
  @media (max-width: 767px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .number-wrap {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 35px;
    align-items: center;
    font-size: 12px;
    ::after {
      content: ':';
      position: absolute;
      top: 50%;
      right: -2px;
      transform: translateY(-50%);
    }
    :last-child {
      ::after {
        display: none;
      }
    }
  }
  .caption {
    font-family: 'fontStyle-light';
  }
  .number {
    background: ${colors.primary};
    color: #FFF;
    font-family: 'fontStyle-bold';
    padding: 2px 4px;
    border-radius: 4px;
    margin-right: 2px;
    margin-left: 2px;
    width: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    position: absolute;
    bottom: -15px;
    font-size: 10px;
  }
`

const CountDownTimer = ({props}) => {
  const dispatch = useDispatch()

  // start time
  const calculateStartTime = () => {
    let getTime = +new Date("Dec 12, 2021 12:00:00").getTime()
    let difference = getTime - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Days: ("0" + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2),
        Hrs: ("0" + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
        Mins: ("0" + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
        Secs: ("0" + Math.floor((difference / 1000) % 60)).slice(-2)
      };
    }
    return timeLeft;
  }

  const [startTime, setStartTime] = useState(calculateStartTime());

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartTime(calculateStartTime());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(startTimer);
  });

  const startTimerComponents = [];

  Object.keys(startTime).forEach((interval, i) => {
    startTimerComponents.push(
      <span className="number-wrap" key={i}>
        <span className="number">{startTime[interval]}</span><span className="text">{interval}</span>{" "}
      </span>
    );
  });

  // useEffect(() => {
  //   !startTimerComponents.length && dispatch(home.setFreeDeli('SET_FREE_DELI', 'show'))
  // }, [dispatch, startTimerComponents.length])

  // end calculateStartTime 

  // remaining time 
  const calculateTimeLeft = () => {
    let getTime = +new Date("Dec 12, 2021 23:59:59").getTime()
    let difference = getTime - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Days: ("0" + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2),
        Hrs: ("0" + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
        Mins: ("0" + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
        Secs: ("0" + Math.floor((difference / 1000) % 60)).slice(-2)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, i) => {
    timerComponents.push(
      <span className="number-wrap" key={i}>
        <span className="number">{timeLeft[interval]}</span><span className="text">{interval}</span>{" "}
      </span>
    );
  });

  // useEffect(() => {
  //   !timerComponents.length && dispatch(home.setFreeDeli('SET_FREE_DELI', "hide"))
  // }, [dispatch, timerComponents.length])

  return (  
    <TimeWrap>
      <>
        {
          startTimerComponents.length ?
          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <span className="caption">Start in:</span> {startTimerComponents}
          </span>
          :
          timerComponents.length ?
          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <span className="caption">End in:</span> {timerComponents}
          </span>
          : 
          <span>Time's up!</span>
        }
      </>
    </TimeWrap>
  );
}
 
export default CountDownTimer;