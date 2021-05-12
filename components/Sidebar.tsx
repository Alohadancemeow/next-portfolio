import { AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { ImMail4 } from "react-icons/im";
import { BsMoon, BsSun } from "react-icons/bs";
import { RiFacebookCircleFill, RiSteamFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="https://i.redd.it/hy70ea5m6gx51.png"
        alt="user avatar"
        className="mx-auto rounded-full"
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">3rd </span>
        Rabbit
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Dota 2 feeder
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500"
        href="/mmr.jpg"
        download="mmr.jpg"
      >
        <GiTie className="w-6 h-6" />
        <span>Download MMR</span>
      </a>

      {/* //todo: social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-8 text-green md:w-full">
        <a href="https://www.facebook.com/alohadancemeow/">
          <RiFacebookCircleFill className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/Alohadancemeow">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://medium.com/@3rd_rabbit">
          <AiFillMediumCircle className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://steamcommunity.com/profiles/76561198144315513/?fbclid=IwAR3cRpS5LRjx5JgacRtq-gDCl8rAd5Tn5O_ZM-9yocMR496FH7FNX2qExpc">
          <RiSteamFill className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* //todo: address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>My time at portia, Portia</span>
        </div>
        <p className="my-2">rabbit.bot@outlook.com</p>
        <p className="my-2">Legend - Ancient</p>
      </div>

      {/* //todo: email btn */}
      <div className="py-4 my-5">
        <div
          className="flex items-center justify-center px-4 py-2 my-2 space-x-3 text-lg bg-gray-200 cursor-pointer dark:bg-dark-200"
          onClick={() => window.open("mailto:rabbit.bot@outlook.com")}
        >
          <ImMail4 />
          <span>Email Me</span>
        </div>

        {/* //todo: remove bg black */}
        <div
          onClick={changeTheme}
          className="flex items-center justify-center px-4 py-2 my-2 space-x-3 text-lg bg-gray-200 cursor-pointer dark:bg-dark-200"
        >
          {theme === "light" ? <BsMoon /> : <BsSun />}
          <span>Change Theme</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
