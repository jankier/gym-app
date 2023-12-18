import "./Home.css";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton/ActionButton";
import body_builder_home from "../../assets/body-builder-home.png";
import adidas_logo from "../../assets/adidas-logo.png";
import kfd_logo from "../../assets/kfd-logo.png";
import strefa_mocy_logo from "../../assets/strefa-mocy-logo.png";
import wk_dzik_logo from "../../assets/wk-dzik-logo.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div id="home" className="home-section">
      <motion.div
        className="home-section-text-img"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div
          className="left-side-home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="logo-home">
            <span className="logo-text-home">
              GYM
              <span>B</span>
              ROS
            </span>
          </div>
          <div className="description-text">
            <span>
              Hey, <span>GYM BROS</span>! Are you ready to take your fitness
              game to the next level? It's time to sculpt those muscles, ignite
              your passion for power, and conquer your goals like never before
              and all this with your best buddy.
            </span>
          </div>

          <div className="join-now-button">
            <ActionButton
              setSelectedPage={() => setSelectedPage(SelectedPage.ContactUs)}
            >
              JOIN NOW
            </ActionButton>
          </div>
        </motion.div>
        <div className="right-side-home">
          <img src={body_builder_home} alt="body builder image"></img>
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="sponsors-home">
          <img src={adidas_logo} alt="adidas logo"></img>
          <img src={kfd_logo} alt="kfd logo"></img>
          <img src={strefa_mocy_logo} alt="strefa mocy logo"></img>
          <img src={wk_dzik_logo} alt="wk dzik logo"></img>
        </div>
      )}
    </div>
  );
};

export default Home;
