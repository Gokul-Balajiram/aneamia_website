import React from "react";
import {
  RiFacebookBoxFill,
  RiHeartFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
            <Image src={logo} className="max-w-[30rem]" width={48} alt="logo" />
          </div>
          <div className="media-icons">
            <a target="_blank" rel="noreferrer" href="/">
              <RiInstagramFill size={50} />
            </a>
            <a target="_blank" rel="noreferrer" href="/">
              <RiFacebookBoxFill size={50} />
            </a>
            <a target="_blank" rel="noreferrer" href="/">
              <RiLinkedinBoxFill size={50} />
            </a>
            <a target="_blank" rel="noreferrer" href="/">
              <FaTwitterSquare size={49} />
            </a>
            <a target="_blank" rel="noreferrer" href="/">
              <RiYoutubeFill size={50} />
            </a>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
          <ul className="box">
            <li>
              <Link href="/causes">Causes</Link>
            </li>
            <li>
              <Link href="/symptoms">Symptoms</Link>
            </li>
          </ul>
          <ul className="box">
            <li>
              <Link href="/treatments">Treatment</Link>
            </li>
            <li>
              <Link href="/diet">Diet</Link>
            </li>
          </ul>
          <ul className="box">
            <li>
              <Link href="/e-anemia">E - Anemia</Link>
            </li>
            <li>
              <Link href="/team">The Team</Link>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Contact Us</li>
            <li>
              <Link href="mailto:sampleMail@cb.amrita.edu">
                sampleMail@cb.amrita.edu
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">Copyright &copy; 2023</span>
          <span>
            Made with <RiHeartFill color="red" className="inline" /> by Amrita
          </span>
          <span className="policy_terms">
            <Link href="/">Terms & Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
