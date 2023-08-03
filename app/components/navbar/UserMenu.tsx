"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const registerModal = useRegisterModal();

  return (
    <div className="flex relative flex-row items-center gap-3">
      <div
        className="st-text-sm hidden md:block py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer whitespace-nowrap"
        onClick={() => {}}
      >
        Airbnb your home
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="st-flex-row p-4 h-[52px] md:py-2 md:px-2 border-[1px] border-neutral-200 gap-3 rounded-full cursor-pointer hover:shadow-md transition"
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-14 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
