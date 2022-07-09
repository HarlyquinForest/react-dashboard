import React, { useContext, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();
  const handleResize = () => setScreenSize(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <div className="flex justify-between p-2 md:mr-5 md:ml-6 relative ">
      <NavButton
        title="منو"
        handler={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg dark:hover:bg-secondary-dark-bg">
        <NavButton
          title="سبد خرید"
          handler={() => handleClick("cart", isClicked.Cart)}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="پیام رسانی"
          handler={() => handleClick("chat", isClicked.Chat)}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor="#03C9D7"
        />
        <NavButton
          dotColor="rgb(254,201,15)"
          title="اعلان ها"
          handler={() => handleClick("notification", isClicked.Notification)}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="پروفایل کاربر" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg dark:hover:bg-card-dark-bg"
            onClick={() => handleClick("userProfile", isClicked.userProfile)}
          >
            <MdKeyboardArrowDown />
            <p>
              <span className="text-gray-400 text-14 dark:text-gray-100">
                سلام,
              </span>{" "}
              <span className="text-gray-500 font-bold ml-1 text-14 dark:text-gray-300">
                جان عزیز
              </span>
            </p>
            <img
              className="border-2 border-amber-200 rounded-full  w-8 h-8 dark:border-white"
              src={avatar}
              alt="user-profile"
            />
          </div>
        </TooltipComponent>
        {isClicked.userProfile && <UserProfile />}
        {isClicked.chat && <Chat />}
        {isClicked.cart && <Cart />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
};
const NavButton = ({ title, handler, icon, color, dotColor }) => {
  return (
    <TooltipComponent
      content={title}
      position="BottomCenter"
      className="font-body"
    >
      <button
        type="button"
        onClick={() => handler()}
        style={{ color: color }}
        className="relative font-display text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-card-dark-bg"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

export default Navbar;
