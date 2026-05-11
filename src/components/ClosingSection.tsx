import SectionCard from "./SectionCard";
import leave4 from "../assets/leaves/leave_4.png";
import branch1 from "../assets/leaves/branch_1.png";

function ClosingSection() {
  return (
    <SectionCard>
      <img className="section-deco deco-closing-top-left" src={leave4} alt="" aria-hidden="true" />
      <img className="section-deco deco-closing-bottom-right" src={branch1} alt="" aria-hidden="true" />
      <p className="closing">С нетерпением ждём встречи!</p>
    </SectionCard>
  );
}

export default ClosingSection;
