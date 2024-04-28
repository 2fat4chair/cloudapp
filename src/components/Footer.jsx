import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full mt-24 bg-slate-900  text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-gray-600 py-8 px-4">
        <div className="mx-auto sm:mx-0">
          <h6 className="font-bold uppercase py-2">Solution</h6>
          <ul>
            <li className="py-1 px-0">Marketing</li>
            <li className="py-1 px-0">Analytics</li>
            <li className="py-1 px-0">Commerce</li>
            <li className="py-1 px-0">Data</li>
            <li className="py-1 px-0">Cloud</li>
          </ul>
        </div>
        <div className="mx-auto sm:mx-0">
          <h6 className="font-bold uppercase py-2 ">Support</h6>
          <ul>
            <li className="py-1 px-0">Pricing</li>
            <li className="py-1 px-0">Documentation</li>
            <li className="py-1 px-0">Guides</li>
            <li className="py-1 px-0">API</li>
          </ul>
        </div>
        <div className="mx-auto sm:mx-0">
          <h6 className="font-bold uppercase py-2">Company</h6>
          <ul>
            <li className="py-1 px-0">About</li>
            <li className="py-1 px-0">Blog</li>
            <li className="py-1 px-0">Jobs</li>
            <li className="py-1 px-0">Press</li>
            <li className="py-1 px-0">Partners</li>
          </ul>
        </div>
        <div className="mx-auto sm:mx-0 pr-8 sm:pr-0">
          <h6 className="font-bold uppercase py-2">Legal</h6>
          <ul>
            <li className="py-1 px-0">Claims</li>
            <li className="py-1 px-0">Privacy</li>
            <li className="py-1 px-0">Terms</li>
            <li className="py-1 px-0">Policies</li>
            <li className="py-1 px-0">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <hr className=" mx-2 bg-gray-600 p-[0.045rem] mx-auto max-w-[1220px] border-none" />

      <div className="flex flex-col  max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p>2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default Footer;
