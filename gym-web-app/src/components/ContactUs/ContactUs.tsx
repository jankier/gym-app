import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import "./ContactUs.css";
import body_builder_form from "../../assets/body-builder-form.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    trigger: trigger2,
    formState: { errors: errors2 },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const onJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger2();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div id="contactus" className="contact-us-section">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="contact-us-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="contact-us-title">
            <div className="contact-us-subtitle">
              <span>JOIN</span>
              <span> THE</span> <span>REVOLUTION</span>
            </div>
            <form
              className="form-join-now"
              target="_self"
              onSubmit={onJoin}
              action="https://formsubmit.co/2d0d0471328a2ea725b03c9d55a23632"
              method="POST"
            >
              <input
                className="join-now-input"
                type="text"
                placeholder="EMAIL"
                autoComplete="off"
                {...register2("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors2.email && (
                <p className="join-now-error">
                  {errors2.email.type === "required" &&
                    "This field is required."}
                  {errors2.email.type === "pattern" && "Invalkid email adress."}
                </p>
              )}
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank You for joining GYMBROS."
              ></input>
              <button className="form-button" type="submit">
                JOIN NOW
              </button>
            </form>
          </div>
          <div className="contact-us-header-text">
            <span>
              Thank you for considering <span>GYMBROS</span> for your needs. If
              you have any questions, comments, or inquiries, please feel free
              to get in touch with us. Our dedicated team is here to assist you.
            </span>
          </div>
        </motion.div>
        <div className="contact-us-form">
          <motion.div
            className="form-elements"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className="form"
              target="_self"
              onSubmit={onSubmit}
              action="https://formsubmit.co/2d0d0471328a2ea725b03c9d55a23632"
              method="POST"
            >
              <input
                className="form-input"
                type="text"
                placeholder="NAME"
                autoComplete="off"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="form-error">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length exceeded."}
                </p>
              )}
              <input
                className="form-input"
                type="text"
                placeholder="EMAIL"
                autoComplete="off"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="form-error">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalkid email adress."}
                </p>
              )}
              <textarea
                className="form-input-message"
                rows={4}
                cols={150}
                placeholder="MESSAGE"
                autoComplete="off"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="form-error">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length exceeded."}
                </p>
              )}
              <button className="form-button" type="submit">
                SUBMIT
              </button>
            </form>
            <div className="form-img">
              <div>
                <img src={body_builder_form} alt="body builder image" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
