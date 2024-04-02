import styles from "./clock-display.module.css";

interface ClockDisplayProps {
  percentage: number;
  radius: number;
  children: React.ReactNode;
}

export const ClockDisplay = ({
  percentage,
  radius,
  children,
}: ClockDisplayProps) => {
  const strokeWidth = 8;
  const borderThickness = 14;
  const adjustedRadius = radius - borderThickness - strokeWidth / 2;
  const circleWidth = adjustedRadius * 2 + 8;
  const dashArray = adjustedRadius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div
      className={styles.mainContainer}
      style={{ borderWidth: borderThickness }}
    >
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 -6 ${circleWidth} ${circleWidth + 6}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth}
          r={adjustedRadius}
          className={styles.circleBackground}
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth}
          r={adjustedRadius}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          className={styles.circleProgress}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};
