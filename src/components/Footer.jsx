import React from "react";
import SocialMedia from "./SocialMedia";
import Navbar from "./ShortComponets/Navbar";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    { id: 1, nameLink: "Home", link: "/" },
    { id: 2, nameLink: "Shop", link: "products" },
    { id: 3, nameLink: "About", link: "about" },
    { id: 4, nameLink: "Workshops", link: "workshops" },
    { id: 5, nameLink: "Contact", link: "contact" },
    { id: 6, nameLink: "Terms & Conditions", link: "terms" },
    { id: 7, nameLink: "Privacy", link: "privacy" },
  ];
  const footerLink = links.filter((item)=>item.id<=4).map((item) => {
    const { nameLink, link, id } = item;
    console.log(nameLink)
    return <Navbar key={id} nameLink={nameLink} link={link}  />;
  });
  const footerLinkOther = links.filter((item)=>item.id>4).map((item) => {
    const { nameLink, link, id } = item;
    console.log(nameLink)
    return <Navbar key={id} nameLink={nameLink} link={link}  />;
  });

  return (
    <footer className="mb-0 bg-gray-700 text-white  pb-6">
      <div className=" mx-auto px-4 ">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full md:w-1/2 px-4">
            <h4 className="text-3xl font-semibold text-gray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 md:mb-0 mb-6">
            <SocialMedia className={`h-10 w-10 p-3`}/>
             
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full md:w-1/3 px-4 ml-auto">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  {
                    
                    footerLink 
                    
                  }
                </ul>
              </div>
              <div className="w-full md:w-1/3 px-4">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                {footerLinkOther}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              Copyright ©{" "}
              <span id="get-current-year">{new Date().getFullYear()}</span>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Mystic Theme by
              </Link>
              <a href="" className="text-blueGray-500 hover:text-gray-800">
                 {" "}Judit Szabo.
              </a>
            </div>
          </div>
        </div>
      </div>
      </footer>
  );
}

export default Footer;
