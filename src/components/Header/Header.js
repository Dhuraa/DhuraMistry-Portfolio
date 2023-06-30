import Pdf from "../../documents/DhuraMistry_Resume.pdf";

const Header = () => {
  const links = [
    { title: "About", path: "/" },
    { title: "Skills", path: "/Skills" },
    { title: "Work", path: "/Work" },
    { title: "Contact", path: "/Contact" },
  ];

  const displaylinks = links.map((link) => {
    return (
      <li className="p-2">
        <a href={link.path}>{link.title}</a>
      </li>
    );
  });

  return (
    <div class="flex bg-gray-900 text-slate-50">
      <span class="text-2xl font-bold">Dhura Mistry</span>
      <ul className="list-none flex justify-center gap-4">
        {displaylinks}
        <li className="p-2">
          <a href={Pdf} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
