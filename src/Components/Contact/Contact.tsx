import { FC } from "react";
import "./Contact.css";
import FooterWave from "../Waves/footerWave";

const Contact: FC = () => {
  return (
    <div id="contact">
      <FooterWave />
      <h1 className="disney text-center fs-1">Keep In Touch</h1>
      <div className="border-bottom nav justify-content-center pb-3 mb-3">
        <a href="https://www.facebook.com/manon.mohamed.182/">
          <div className="bg-ico" id="facebook">
            <i className="bx bxl-facebook-circle social  facebook fs-1"></i>
          </div>
        </a>
        <a href="mailto:mennamohamed549@gmail.com">
          <div className="bg-ico" id="google">
            <i className="bx bxl-google social  google fs-1"></i>
          </div>
        </a>
        <a href="mailto:es-menna.anwar2024@alexu.edu.eg">
          <div className="bg-ico" id="microsoft">
            <i className="bx bxl-microsoft social microsoft fs-1"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/menna-mohamed-anwar-4041a11b6/">
          <div className="bg-ico" id="linkedin">
            <i className="bx bxl-linkedin-square social  linkedin fs-1"></i>
          </div>
        </a>
        <a href="https://github.com/MennaAnwar">
          <div className="bg-ico" id="github">
            <i className="bx bxl-github social  github fs-1"></i>
          </div>
        </a>
        <a href="https://wa.me/+201016790885">
          <div className="bg-ico" id="whatsapp">
            <i className="bx bxl-whatsapp social  whatsapp fs-1"></i>
          </div>
        </a>
      </div>
      <p className="text-center text-white mb-0">© 2024 Menna Mohamed Anwar</p>
    </div>
  );
};

export default Contact;
