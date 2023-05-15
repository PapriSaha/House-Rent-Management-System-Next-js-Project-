import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4" style={{ background: 'linear-gradient(204deg, rgba(153,255,204,1) 0%, rgba(153,255,204,1) 100%)' }} align="center">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-100 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            House Rent Management System &copy; 2023
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
    </>
  );
};

export default Footer;
