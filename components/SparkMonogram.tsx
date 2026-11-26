import type { CSSProperties } from "react";
import styles from "./SparkMonogram.module.css";

type SparkMonogramProps = {
  size?: number;
  className?: string;
  animated?: boolean;
};
type SparkMonogramStyle = CSSProperties & { "--spark-size": string };

export default function SparkMonogram({
  size = 220,
  className = "",
  animated = true,
}: SparkMonogramProps) {
  const style: SparkMonogramStyle = { "--spark-size": `${size}px` };

  return (
    <svg
      className={`${styles.sparkMonogram} ${animated ? styles.animated : ""} ${className}`.trim()}
      style={style}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Khadijah monogram spark"
    >
      <title>Khadijah monogram spark</title>
      <circle className={styles.glow} cx="100" cy="100" r="45" />
      <g className={styles.spark}>
        <path d="M100 54 Q104 96 146 100 Q104 104 100 146 Q96 104 54 100 Q96 96 100 54 Z" fill="white" />
      </g>
      <g className={styles.orbit}>
        <circle className={styles.limeDot} cx="138" cy="62" r="6" />
      </g>
    </svg>
  );
}
