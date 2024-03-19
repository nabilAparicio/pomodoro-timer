import React from "react";
import styles from "./three-way-switch.module.css";

type ThreeWaySwitchProps = {};

const ThreeWaySwitch: React.FC<ThreeWaySwitchProps> = () => {
  const [switchPosition, setSwitchPosition] = React.useState(0);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.switch} ${
          switchPosition === 2 && styles.switchCenter
        } ${switchPosition === 3 && styles.switchRight}`}
      ></div>
      <button onClick={() => setSwitchPosition(1)} className={styles.button}>
        pomodoro
      </button>
      <button onClick={() => setSwitchPosition(2)} className={styles.button}>
        short break
      </button>
      <button onClick={() => setSwitchPosition(3)} className={styles.button}>
        long break
      </button>
    </div>
  );
};

export default ThreeWaySwitch;
