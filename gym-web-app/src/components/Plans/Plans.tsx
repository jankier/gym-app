import { motion } from "framer-motion";
import { PlanType, SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import Plan from "./Plan/Plan";
import "./Plans.css";

const plans: Array<PlanType> = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "BASIC PLAN",
    price: "25",
    features: [
      "Access to gym during standard hours.",
      "Use of basic exercise equipment.",
      "Locker room and shower facilities.",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "FLEXIBLE PLAN",
    price: "30",
    features: [
      "Access to the gym during flexible hours.",
      "Option to freeze or cancel membership.",
      "Access to both basic and premium facilities.",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "PREMIUM PLAN",
    price: "50",
    features: [
      "24/7 access to the gym.",
      "Personalized workout plans.",
      "Towel service and upgraded locker room.",
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.8 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Plans = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div id="plans" className="plans-section">
      <motion.div
        className="plans-elements"
        onViewportEnter={() => setSelectedPage(SelectedPage.Plans)}
      >
        <div className="plans-header">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span>READY TO</span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span>START YOUR JOURNEY</span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span>WITH US</span>
          </motion.div>
        </div>
        <motion.div
          className="plans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isAboveMediumScreens ? 1 : 0.3 }}
          variants={container}
        >
          {plans.map((plan: PlanType) => (
            <Plan
              key={plan.title}
              icon={plan.icon}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Plans;
