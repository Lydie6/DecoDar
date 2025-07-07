import { useState } from "react";
import logo from "../assets/logofinale.png";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const LINKS = [
  { name: "Accueil", link: "#" },
  { name: "Services", link: "#" },
  { name: "Apropos", link: "#" },
  { name: "Contact", link: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8  md:px-12">
        <div className=" ">
          <div href="#" className="flex items-center justify-center md:mt-2" >
            <img src={logo} className="h-10 w-auto" alt="VastuSpaze" />
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="hidden  md:flex space-x-6 justify-center  md:space-x-6 ">
          {LINKS.map((link, index) => (
            <a key={index} href={link.link} className="">
              {link.name}
            </a>
          ))}
        </div>

        {/* Bouton Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full left-0 top-[100px] py-4 px-4 border-b-4 z-50`}>
          {LINKS.map((link, index) => (
            <a key={index} href={link.link} className="uppercase text-lg font-medium block py-2 tracking-wide">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}