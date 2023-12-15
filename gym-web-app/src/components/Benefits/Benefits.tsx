import "./Benefits.css";
import { SelectedPage, BenefitType } from "../../shared/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit/Benefit";
import body_builder_benefits from "../../assets/body-builder-benefits.png";

const benefits: Array<BenefitType> = [
  {
    icon: (
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
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: "All necessary tools",
    description:
      "Elevate your workouts with cutting-edge machines and equipment, meticulously chosen to enhance your fitness experience.",
  },
  {
    icon: (
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
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Expert Trainers",
    description:
      "Our team of certified trainers is here to guide, motivate, and personalize your fitness plan, ensuring you achieve results that go beyond your expectations.",
  },
  {
    icon: (
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Flexible Hours",
    description:
      "We understand life gets busy. That's why we offer flexible hours, so you can fit your workouts seamlessly into your schedule.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <div id="benefits" className="benefits-section">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="header-benefits"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="logo-benefits">
            <span className="logo-text-benefits">
              GYM
              <span>B</span>
              ROS
            </span>
          </div>
          <span>YOUR ULTIMATE FITNESS COMPANION</span>
        </motion.div>
        <motion.div
          className="benefits-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="benefits-split">
          <div className="benefits-text-img">
            <div className="left-side-benefits">
              <img src={body_builder_benefits} alt="body builder image"></img>
            </div>
            <motion.div
              className="right-side-benefits"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="benefits-title">
                <span>WELCOME TO YOUR FITNESS SANCTUARY</span>
                <span>THE ULTIMATE GYM EXPERIENCE AWAITS YOU</span>
              </div>
              <div className="benefits-description">
                <p>
                  At <span>GYMBROS</span>, we believe that fitness is not just a
                  destination, it's a journey. Whether you're a seasoned pro or
                  just starting, our gym is your canvas to sculpt the best
                  version of yourself.
                </p>
                <p>
                  It's time to rise above the ordinary and embrace the
                  extraordinary. <span>GYMBROS</span> is not just a brand, it's
                  a lifestyle. Are you ready to join the revolution?
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Benefits;
