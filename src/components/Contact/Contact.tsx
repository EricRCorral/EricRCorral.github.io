import { useEffect, useState } from "react";
import { send } from "@emailjs/browser";
import {
  WhatsappIcon,
  GithubIcon,
  LinkedinIcon,
  EmailIcon,
  SendIcon,
} from "../../assets/svg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [{ email, message, name }, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [t, { language }] = useTranslation();

  const [
    getInTouch,
    nameLabel,
    emailLabel,
    messageLabel,
    namePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    footerText,
  ] = [
    t("contact.getInTouch"),
    t("contact.nameLabel"),
    t("contact.emailLabel"),
    t("contact.messageLabel"),
    t("contact.namePlaceholder"),
    t("contact.emailPlaceholder"),
    t("contact.messagePlaceholder"),
    t("contact.footerText"),
  ];

  const validateEmail = (email: string) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email);
  };

  const DISABLE_SUBMIT =
    name.trim().length === 0 ||
    message.trim().length === 0 ||
    !validateEmail(email);

  const handleFormValues = (key: "email" | "message" | "name", value: string) =>
    setFormValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    if (DISABLE_SUBMIT) return;

    send(
      "service_kmy0745",
      "template_t1dqmdu",
      {
        name,
        email,
        message,
      },
      "H4qQCta_T7WzCXS6_"
    )
      .then(() => setFormValues({ email: "", message: "", name: "" }))
      .catch((error) =>
        alert(
          `There was not possible send your message because of the following error: ${error}`
        )
      );
  };

  const contactAnimation = () => {
    const CONTACT = document.getElementById("contact");
    if (!!CONTACT && CONTACT.getBoundingClientRect().top < innerHeight / 1.2) {
      const [getInTouch, form, socialMedia] = CONTACT.children;

      getInTouch.classList.add("get-in-touch-container");
      form.classList.add("contact-form");
      socialMedia.classList.add("links");

      removeEventListener("scroll", contactAnimation);
    }
  };

  useEffect(() => {
    addEventListener("scroll", contactAnimation);
  }, []);

  return (
    <div id="contact">
      <div>
        <h1 {...(language === "es" && { className: "sm" })}>{getInTouch}</h1>
      </div>
      <div className="no-display">
        <div className="inputs-container">
          <div>
            <h2>{nameLabel}</h2>
            <input
              placeholder={namePlaceholder}
              onChange={({ target }) => handleFormValues("name", target.value)}
              value={name}
            />
          </div>
          <div>
            <h2>{emailLabel}</h2>
            <input
              placeholder={emailPlaceholder}
              type="email"
              onChange={({ target }) => handleFormValues("email", target.value)}
              value={email}
            />
          </div>
        </div>
        <div className="text-area-container">
          <div>
            <h2>{messageLabel}</h2>
            <textarea
              placeholder={messagePlaceholder}
              onChange={({ target }) =>
                handleFormValues("message", target.value)
              }
              value={message}
            />
          </div>
          <div
            className={`send-button${DISABLE_SUBMIT ? " disabled" : ""}`}
            onClick={handleSubmit}
          >
            <SendIcon />
          </div>
        </div>
        <footer>{footerText}</footer>
      </div>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=541136695686&text=Hi! I am writing you from your portfolio"
          target="_blank"
        >
          <WhatsappIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-corral-906364192/"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
        <a href="https://github.com/EricRCorral" target="_blank">
          <GithubIcon />
        </a>
        <a
          href="mailto:ecorral.dev@gmail.com?Subject=Hi!%20I%20am%20writing%20you%20from%20your%20portfolio"
          target="_blank"
        >
          <EmailIcon />
        </a>
      </div>
    </div>
  );
};

export default Contact;
