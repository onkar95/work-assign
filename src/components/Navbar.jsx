
import { File } from "lucide-react";

import UserDropDown from "./customUI/UserDropDown";
import { useState } from "react";
import { routes } from "../db";
import ThemeDropDown from "./customUI/ThemeDropDown";
import { useThemeContext } from "../context/themeContext";

export const Navbar = () => {
  const [navelement, setNavelement] = useState(routes)
  const { currentTheme } = useThemeContext()

  return (
    <div className="flex items-center justify-between text-white shadow-sm hover:opacity-100  px-5 py-2 bg-neutral-900">
      <div>
        <File />
      </div>

      <div className="flex items-center">
        <ThemeDropDown />
        <UserDropDown />
      </div>
    </div>
  );
};
