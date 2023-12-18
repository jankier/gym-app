import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../../shared/types";
import "./Benefit.css";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div className="benefit-box" variants={childVariant}>
      <div className="icon-element">
        <div className="icon-box">{icon}</div>
      </div>
      <h4 className="title-element">{title}</h4>
      <p className="description-element">{description}</p>
      <AnchorLink
        className="button-element"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        offset="97"
      >
        Learn more
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
