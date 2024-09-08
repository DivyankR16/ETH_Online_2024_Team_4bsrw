import { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Chart_fill from "../../assets/Chart_fill.png"
import Chat from "../../assets/Chat.png"
import User from "../../assets/User.png"
import Calendar from "../../assets/Calendar.png"
import Search from "../../assets/Search.png"
import Chart from "../../assets/Chart.png"
const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const navigate=useNavigate()
    const [activeMenu, setActiveMenu] = useState("");
    const { pathname } = useLocation();
    console.log(activeMenu)
    const handleMenuClick = (index, path) => {
        const text=path.toLowerCase()
        setActiveMenu(index);
        navigate(`/dashboard/${text}`)
    };
     useEffect(() => {
        setActiveMenu(pathname.substring(11));
  }, [pathname]);
  const Menus = [
    { title: "Home", src: "Chart_fill" },
    { title: "YourVideos", src: "Chat" },
    { title: "UploadVideo", src: "User", gap: true },
    { title: "Subscribed", src: "Calendar" },
    { title: "Profile", src: "Search" },
    { title: "Analytics", src: "Chart" },
    // { title: "Files ", src: "Folder", gap: true },
    // { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex bg-gray-950 z-10">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div
          className="flex gap-x-4 items-center hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Your Dashboard
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-200  font-semibold text-sm items-center gap-x-4 hover:bg-emerald-600
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                Menu.title.toLowerCase() === activeMenu && "bg-emerald-700"
              } `}
              onClick={() => handleMenuClick(index, Menu.title)}
            >
              <img src={`/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};
export default Sidebar;
