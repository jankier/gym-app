import { motion } from "framer-motion";
import ActionButton from "../../../shared/ActionButton/ActionButton";
import { SelectedPage } from "../../../shared/types";
import "./Plan.css";

const childVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  price: string;
  features: Array<string>;
  setSelectedPage: (value: SelectedPage) => void;
};

const Plan = ({ icon, title, price, features, setSelectedPage }: Props) => {
  return (
    <motion.div className="plan" variants={childVariant}>
      <div className="header-plan">
        <div className="icon-plan">{icon}</div>
        <span>{title}</span>
        <span className="price-tag">$ {price}</span>
      </div>
      <div className="plan-features">
        {features.map((feature) => (
          <div className="separate-feature">
            <div className="tick-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="join-now-btn">
        <ActionButton
          setSelectedPage={() => setSelectedPage(SelectedPage.ContactUs)}
        >
          Join now
        </ActionButton>
      </div>
    </motion.div>
  );
};

export default Plan;
