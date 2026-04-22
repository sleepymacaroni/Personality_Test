import personalityMap from "./assets/personality-map.png";
export default function Methodology() {
  return (
    <div className="methodology-content">
      <h1 className="methodology-title">Methods</h1>

      <p>
        The test is composed of first-person (“I”) statements about the self, which participants evaluate based on how strongly they relate to each one using a five-point Likert scale: strongly disagree, disagree, neutral, agree, and strongly agree. Each statement is designed to correspond to a specific core trait, contributing to an overall assessment of personality structure.
      </p>


      <p>
        These traits are mapped onto a two-dimensional coordinate system in which Initiative and Complacence form opposing ends of the vertical axis, while Emotionality and Practicality form opposing ends of the horizontal axis. Each response adjusts the participant’s position along the relevant axis, with scores ranging from -2 to +2 depending on the strength and direction of agreement.
      </p>

      <p>
        Upon completion, all responses are aggregated to generate a final coordinate position within a bounded space. This coordinate is then used to determine the participant’s closest corresponding personality archetype within the system.
      </p>

      <p>
        An image of the relative location of the personality archetypes is shown below for reference, with personality types mapped onto it.
      </p>

    <img
        src={personalityMap}
        alt="Personality archetype map"
        className="methodology-image"
    />

    </div>
  );
}