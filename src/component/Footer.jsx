import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const footerLinks = [
  {
    title: "POPULAR GAMES",
    links: [
      { title: "CALL OF DUTY", path: "/" },
      { title: "TONY HAWK PRO SKATxER", path: "/" },
      { title: "CRASH BANDICOOT", path: "/" },
      { title: "SPYRO", path: "/" },
      { title: "SEKIRO", path: "/" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { title: "PRESS", path: "/" },
      { title: "RESEARCH", path: "/" },
      { title: "ACTIVISION BLIZZARD", path: "/" },
      { title: "CONTACT US", path: "/" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { title: "TERMS OF USE", path: "/" },
      { title: "PRIVACY POLICY", path: "/" },
      { title: "COOKIE POLICY", path: "/" },
      { title: "COOKIE SETTINGS", path: "/" },
      { title: "ONLINE SAFETY", path: "/" },
      { title: "APPLICANT PRIVACY POLICY", path: "/" },
    ],
  },
];
function Footer() {
  return (
    <footer className="bg-black text-white">
    
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">
        
        <div className="flex flex-col gap-y-4">
          <img
            src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png "
            className="w-48"
          />
          <h3 className="text-xl font-bold">Follow us</h3>


          <div className="flex gap-4">
          <a href="#" className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10 text-white">
  <FaFacebookF className="w-4 h-4" />
</a>
<a href="#" className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10 text-white">
  <RiTwitterXLine className="w-4 h-4" />
</a>
<a href="#" className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10 text-white">
  <FaLinkedinIn className="w-4 h-4" />
</a>
<a href="#" className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10 text-white">
  <FaYoutube className="w-4 h-4" />
</a>
<a href="#" className="flex items-center justify-center border-2 border-white rounded-full w-10 h-10 text-white">
  <AiFillInstagram className="w-4 h-4" />
</a>
 </div>
     </div>
        <div className="flex flex-col md:flex-row justify-between w-full gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-2">{section.title}</h3>
              <ul className='font-bold '>
                {section.links.map((link, idx) => (
                  <li className='text-neutral-400 text-xl hover:text-white' key={idx}>
                    <a href={link.path} >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-blue-500 my-6" />
 <p className="text-center text-sm pb-6">
        COPYRIGHT © 2023 ACTIVISION PUBLISHING, INC.
      </p>
    </footer>
  );
}

export default Footer;





