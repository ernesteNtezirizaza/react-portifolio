import React from "react";
import "../index.css";
import "./Footer.css";
import {
	FaFacebookF,
	FaTwitter,
	FaPinterest,
	FaInstagram,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer class="footer-1 py-8 sm:py-12">
			<div class="container mx-auto px-4">
				<div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
					<div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
						<h5 class="text-xl font-bold mb-6 text-white">
							Features
						</h5>
						<ul class="list-none footer-links">
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Cool stuff
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Random feature
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Team feature
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Stuff for developers
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Another one
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Last time
								</a>
							</li>
						</ul>
					</div>
					<div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
						<h5 class="text-xl font-bold mb-6 text-white">
							Resources
						</h5>
						<ul class="list-none footer-links">
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Resource
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Resource name
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Another resource
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Final resource
								</a>
							</li>
						</ul>
					</div>
					<div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
						<h5 class="text-xl font-bold mb-6 text-white">About</h5>
						<ul class="list-none footer-links">
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Team
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Locations
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Privacy
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Terms
								</a>
							</li>
						</ul>
					</div>
					<div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
						<h5 class="text-xl font-bold mb-6 text-white">Help</h5>
						<ul class="list-none footer-links">
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Support
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Help Center
								</a>
							</li>
							<li class="mb-2">
								<a
									href="#hh"
									class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
						<h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left text-white">
							Stay connected
						</h5>

						<ul className="contactCircles">
							<li>
								<FaFacebookF className="contactIcon" />
							</li>
							<li>
								<FaTwitter className="contactIcon" />
							</li>
							<li>
								<FaPinterest className="contactIcon" />
							</li>
							<li>
								<FaInstagram className="contactIcon" />
							</li>
						</ul>
					</div>
				</div>

				<div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
					<div class="sm:w-full px-4 md:w-1/6">
						<strong class="text-white">Location</strong>
					</div>
					<div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
						<h6 class="font-bold mb-2 text-white">Address</h6>
						<address class="not-italic mb-4 text-sm text-white">
							123 6th St.
							<br />
							Melbourne, FL 32904
						</address>
					</div>
					<div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
						<button class="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
