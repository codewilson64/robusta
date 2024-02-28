import React from "react";
import { contacts } from "../constants";

const SocialMedia = ({ icon, index, link }) => (
  <div>
    <div>
      <a href={link}>
        <img src={icon} alt="icon" className={`sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] object-contain  cursor-pointer border border-gray-500 rounded-lg ${index === contacts.length - 1 ? "mr-0" : "mr-8"}`} />
      </a>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section className="py-8 bg-black" id="contact">
      <h2 className="text-white sm:text-4xl text-2xl font-poppins font-semibold text-center">CONTACT ME</h2>
      <div className="flex justify-center items-center py-6">
        {contacts.map((contact, index) => (
          <SocialMedia key={contact.id} {...contact} index={index} />
        ))}
      </div>
      <div className="mt-8 mb-5">
        <p className="text-white text-[14px] text-center">2024 Coffee. All Right Reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
