import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Acquire Your Next Property?
        </h2>
        <p className="mb-4">Contact our real estate experts today.</p>
        <div className="flex justify-center gap-3">
          <button className="text-3xl ">
            <a
              href="https://wa.me/+2349126663538"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </button>
          <button className="text-2xl ">
            <a
              href="tel:+2348068530094"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaPhone />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
