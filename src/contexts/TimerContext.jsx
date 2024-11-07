import { createContext } from "react";
import useTimer from "easytimer-react-hook";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const navigate = useNavigate();
  const [timer, isTargetAchieved] = useTimer({
    countdown: true, // Enable countdown
    precision: "seconds", // Update every second
    target: {
      minutes: 0,
      seconds: 0,
    },
    updateWhenTargetAchieved: true,
  });

  const startTimer = (minutes) => {
    const totalSeconds = minutes * 60; // Convert minutes to seconds
    timer.start({
      startValues: { seconds: totalSeconds }, // Set the starting time in seconds
    });
    navigate("/digital-timer"); // Navigate to the digital-timer page
  };

  const resetTimer = () => {
    timer.reset();
  };

  if (isTargetAchieved) {
    resetTimer();
    navigate("/alarm");
  }

  return (
    <TimerContext.Provider
      value={{
        timer,
        isRunning: timer.isRunning(),
        timerValue: timer.getTimeValues().toString(),
        start: startTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

TimerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
