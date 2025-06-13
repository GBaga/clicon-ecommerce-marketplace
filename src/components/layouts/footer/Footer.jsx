import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 px-4 sm:px-6 pt-12 pb-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Resources */}
        <div className="space-y-6">
          <h6 className="text-sm text-white font-medium">RESOURCES</h6>
          <ul className="space-y-3">
            {[
              "Graphic Design Tools",
              "Video Editing Tools",
              "Image Enhancer",
              "Remove Backgrounds",
              "Photo Enhancement",
              "Explore All Tools",
            ].map((item, i) => (
              <li key={i}>
                <Link href="#">
                  <span className="text-[13px] text-gray-400 hover:text-white">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="space-y-6">
          <h6 className="text-sm text-white font-medium">HELPFUL LINKS</h6>
          <ul className="space-y-3">
            {[
              "Subscription Plans",
              "Our Story",
              "Developer API",
              "Career Opportunities",
              "Become a Contributor",
              "Brand Guidelines",
              "Upcoming Events",
              "Search Insights",
              "Latest Articles",
            ].map((item, i) => (
              <li key={i}>
                <Link href="#">
                  <span className="text-[13px] text-gray-400 hover:text-white">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className="space-y-6">
          <h6 className="text-sm text-white font-medium">POLICIES</h6>
          <ul className="space-y-3">
            {[
              "Terms & Conditions",
              "User Agreement",
              "Data Privacy Policy",
              "Copyright Notice",
              "Cookie Usage Policy",
              "Manage Cookies",
            ].map((item, i) => (
              <li key={i}>
                <Link href="#">
                  <span className="text-[13px] text-gray-400 hover:text-white">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div className="space-y-6">
          <h6 className="text-sm text-white font-medium">SOCIAL MEDIA</h6>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-blue-600 w-8 h-8"
                  viewBox="0 0 49.652 49.652"
                >
                  <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 112.196 112.196"
                >
                  <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" />
                  <path
                    fill="#fff"
                    d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 152 152"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="22.26"
                      y1="22.26"
                      x2="129.74"
                      y2="129.74"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#fae100" />
                      <stop offset=".15" stopColor="#fcb720" />
                      <stop offset=".3" stopColor="#ff7950" />
                      <stop offset=".5" stopColor="#ff1c74" />
                      <stop offset="1" stopColor="#6c1cd1" />
                    </linearGradient>
                  </defs>
                  <circle cx="76" cy="76" r="76" fill="url(#a)" />
                  <path
                    fill="#fff"
                    d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z"
                  />
                  <circle cx="76" cy="76" r="13.56" fill="#fff" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-8">
            <h6 className="text-[13px] text-gray-400 font-medium">
              Get exclusive assets sent straight to your inbox
            </h6>
            <div className="mt-6">
              <Link
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-sm text-white font-medium py-3 px-6 tracking-wide rounded"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-600" />

      {/* Copyright */}
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-gray-400 text-[13px]">
          ReadymadeUI Copyright © 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
