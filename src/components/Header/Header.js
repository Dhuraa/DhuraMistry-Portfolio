import Pdf from "../../documents/DhuraMistry_Resume.pdf";
import { HashLink} from "react-router-hash-link";

const Header = () => {
  const links = [
    { title: "About", path: "#about" },
    { title: "Skills", path: "#skills" },
    { title: "Work", path: "#work" },
    { title: "Contact", path: "#contact" },
  ];

  const displaylinks = links.map((link) => {
    return (
      <HashLink to={link.path}>{link.title}</HashLink>
    );
  });

  return (
    <div class="flex justify-between bg-gray-900 text-slate-50 p-8">
      <span class="text-2xl font-bold">Dhura Mistry</span>
      <ul className="list-none flex justify-center gap-4 font-bold">
        {displaylinks}
        <li className="p-2">
          <a className="bg-white p-2 rounded text-slate-900" href={Pdf} target="_blank">Resume
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
