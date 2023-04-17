import React from 'react';

const Footer = () => {
    return (
      <div className="w-full footer p-5">
        <h4 className='text-center py-2' style={{ color: "white" }}>© Cambialo 2023</h4>
        <div className="flex w-full justify-evenly">
          <div className="container_icons_social">
            <i className=" text-white bx bxl-instagram bx-lg"></i>
          </div>
          <div className="container_icons_social">
            <a
              href="https://www.linkedin.com/in/erickjimenezcruz/
            "
              target="_blank"
              rel="Linkedln">
              <i className="bx bxl-linkedin bx-lg text-white"></i>
            </a>
          </div>
          <div className="container_icons_social">
            <a href="https://github.com/erfajc97" target="_blank">
              <i className=" text-white bx bxl-github bx-lg"></i>
            </a>
          </div>
        </div>
      </div>
    );
};

export default Footer;

