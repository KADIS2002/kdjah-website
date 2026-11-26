import SparkMonogram from "./SparkMonogram";

export default function OrbitScene() {
  return (
    <div className="orbit-scene" aria-hidden="true">
      <div className="orbit-ring orbit-ring-outer" />
      <div className="orbit-ring orbit-ring-middle" />
      <div className="orbit-ring orbit-ring-inner" />

      <div className="orbit-arm orbit-arm-spark">
        <div className="orbit-marker orbit-marker-spark">
          <div className="orbit-counter orbit-counter-spark"><SparkMonogram size={200} /></div>
        </div>
      </div>
      <div className="orbit-arm orbit-arm-lime-outer">
        <div className="orbit-marker"><div className="orbit-counter"><span className="orbit-dot orbit-dot-lime-large" /></div></div>
      </div>
      <div className="orbit-arm orbit-arm-lime-inner">
        <div className="orbit-marker"><div className="orbit-counter"><span className="orbit-dot orbit-dot-lime-large" /></div></div>
      </div>
      <div className="orbit-arm orbit-arm-lime-small">
        <div className="orbit-marker"><div className="orbit-counter"><span className="orbit-dot orbit-dot-lime-small" /></div></div>
      </div>
      <div className="orbit-arm orbit-arm-blue-small">
        <div className="orbit-marker"><div className="orbit-counter"><span className="orbit-dot orbit-dot-blue-small" /></div></div>
      </div>
    </div>
  );
}
