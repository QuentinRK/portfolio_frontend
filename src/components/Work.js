import Bounce from "react-reveal/Bounce";
import SectionHeader from "./SectionHeader";
import "../styles/timeline.scss";
import TimeLine from "./Timeline";

const Section = () => {
  return (
    <>
      <div className="work-container" id="work">
        <Bounce>
          <SectionHeader title="Work History" />
          <div>
            <TimeLine />
          </div>
        </Bounce>
      </div>
    </>
  );
};

export default Section;
