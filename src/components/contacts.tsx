import React from "react";
import { twMerge } from "tailwind-merge";
import { Separator } from "./ui/separator";

const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge("fill-current", className)}
  >
    <path d="M23 9V15H22V17H21V19H20V20H19V21H18V22H16V23H15V18H14V17H15V16H17V15H18V14H19V9H18V6H16V7H15V8H14V7H10V8H9V7H8V6H6V9H5V14H6V15H7V16H9V18H7V17H6V16H4V17H5V19H6V20H9V23H8V22H6V21H5V20H4V19H3V17H2V15H1V9H2V7H3V5H4V4H5V3H7V2H9V1H15V2H17V3H19V4H20V5H21V7H22V9H23Z" />
  </svg>
);

const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge("fill-current", className)}
  >
    <path d="M22 2V1H2V2H1V22H2V23H22V22H23V2H22ZM13 12V20H10V9H13V10H14V9H18V10H19V20H16V12H13ZM4 8V5H7V8H4ZM7 9V20H4V9H7Z" />
  </svg>
);

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge("fill-current", className)}
  >
    <path d="M23 9V15H22V17H21V19H20V20H19V21H17V22H15V23H14V15H16V14H17V12H14V9H15V8H17V5H13V6H11V8H10V12H7V15H10V23H9V22H7V21H5V20H4V19H3V17H2V15H1V9H2V7H3V5H4V4H5V3H7V2H9V1H15V2H17V3H19V4H20V5H21V7H22V9H23Z" />
  </svg>
);

export default function Contact() {
  return (
    <div className="md:fixed md:bottom-8 md:px-12 flex flex-col gap-4 md:flex-row md:gap-0 justify-center md:justify-between md:items-end w-full">
      <div className="flex md:flex-col gap-8 md:items-center h-full">
        <div className="flex md:flex-col gap-8">
          <a href="https://github.com/lekhoi2709">
            <GitHubIcon className="hover:fill-blue-500 focus:fill-blue-500 hover:-translate-y-1 transition ease-in-out duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/ledinhkhoi/">
            <LinkedInIcon className="hover:fill-blue-500 hover:-translate-y-1 transition ease-in-out duration-200" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006550712882">
            <FacebookIcon className="hover:fill-blue-500 hover:-translate-y-1 transition ease-in-out duration-200" />
          </a>
        </div>
        <Separator
          orientation="vertical"
          className="h-16 bg-current hidden md:block"
        />
      </div>
      <div className="flex flex-col items-center gap-8">
        <a
          href="mailto:koledinleko@gmail.com"
          className="md:[writing-mode:vertical-rl] hover:text-blue-500 hover:-translate-y-1 transition ease-in-out duration-200"
        >
          <p className="text-sm">koledinleko@gmail.com</p>
        </a>
        <Separator
          orientation="vertical"
          className="h-16 bg-current hidden md:block"
        />
      </div>
    </div>
  );
}
