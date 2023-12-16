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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
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
            <span>ARE</span> <span>YOU</span> <span>READY</span> <span>TO</span>{" "}
            <span>JOIN</span>
            <span> THE</span> <span>REVOLUTION</span>?
          </div>
          <span>
            Thank you for considering <span>GYMBROS</span> for your needs. If
            you have any questions, comments, or inquiries, please feel free to
            get in touch with us. Our dedicated team is here to assist you.
          </span>
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
              target="_blank"
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
