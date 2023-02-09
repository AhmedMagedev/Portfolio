import React from "react";
import {FaLinkedin} from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";


export default function About() {
  return (
    <section id="footer">
      <div className="container px-5 pb-14 pt-16 mx-auto flex border-5 justify-between border-t-4 border-impreza-gray w-4/6">
        <div className=" items-start ml-6">
         <div className="flex">
         <a href="https://www.linkedin.com/in/ahmedmagedev">
            <FaLinkedin className="text-impreza-orange w-6 h-6 flex-shrink-0 mr-4" />
         </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedmagedev@gmail.com">
                <MdOutlineMail className="text-impreza-orange w-6 h-6 flex-shrink-0 mr-4" />
            </a>
         </div>
        </div>
        <div className="items-end mr-6">
          <p>© 2023 Ahmed Maged. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
