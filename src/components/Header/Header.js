import Pdf from "../../documents/DhuraMistry_Resume.pdf";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const links = [
    { title: "Skills", path: "#skills" },
    { title: "Work", path: "#work" },
    { title: "Contact", path: "#contact" },
  ];

  const displaylinks = links.map((link) => {
    return <HashLink class="py-4 px-2 text-gray-500 font-semibold hover:text-white-500 transition duration-300" to={link.path}>{link.title}</HashLink>;
  });

  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  // btn.addEventListener("click", () => {
  //   menu.classList.toggle("hidden");
  // });

  return (
    <div>
		<nav class="bg-gray-900 fixed z-10 top-0 left-0 right-0 text-slate-50 shadow-lg">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
							<a href="#" class="flex items-center py-4 px-2">
								{/* <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2"/> */}
								<span class="font-bold text-slate-50 text-xl">Dhura Mistry</span>
							</a>
						</div>
						<div class="hidden md:flex items-center space-x-1">
							<HashLink to="#about" class="py-4 px-2 text-white-500 border-b-4 border-white-500 font-semibold ">About</HashLink>
              {displaylinks}
						</div>
					</div>
					<div class="hidden md:flex items-center space-x-3 ">
						<a class="py-2 px-2 font-medium text-gray-500 rounded bg-white text-slate-900 hover:text-white transition duration-300" href={Pdf} target="_blank">Resume</a>
					</div>
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		</nav>
    </div>
    // <div class="md:flex justify-between bg-gray-900 text-slate-50 p-8">
    //   <span class="text-2xl font-bold">Dhura Mistry</span>
    //   <ul className="list-none md:flex md:justify-center gap-4 font-bold">
    //     {displaylinks}
    //     <li className="p-2">
    //       <a className="bg-white p-2 rounded text-slate-900" href={Pdf} target="_blank">Resume
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};
export default Header;
