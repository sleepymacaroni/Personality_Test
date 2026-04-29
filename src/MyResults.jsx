import personalityMap from "./assets/personality-map-standard.png";

export default function MyResults() {
  const result = JSON.parse(localStorage.getItem("savedResult"));

  const scale = 40;

  const toPercent = (value) => {
    return ((value + scale) / (2 * scale)) * 100;
  };

  if (!result) {
    return (
      <div className="results-page">
        <h1 className="page-title">My Results</h1>
        <p>You do not have saved results yet. Take the quiz first.</p>
      </div>
    );
  }

  return (
    <div className="results-page">
      <h1 className="page-title">My Results</h1>

      <p className="result-type">
        You are: <strong>{result.type}</strong>
      </p>

      <div className="map-wrapper">
        <img
          src={personalityMap}
          alt="Personality map"
          className="methodology-image"
        />

        <div
          className="dot"
          style={{
            left: `${toPercent(result.x)}%`,
            top: `${100 - toPercent(result.y)}%`
          }}
        />
      </div>
    </div>
  );
}