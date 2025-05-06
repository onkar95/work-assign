
import { File, Settings } from "lucide-react";

import UserDropDown from "./ui/UserDropDown";
import { useEffect, useState } from "react";
import { UserData, routes } from "../db";

export const Navbar = () => {
  const [navelement, setNavelement] = useState(routes)

  return (
    <div className="flex items-center justify-between bg-white shadow-sm hover:opacity-100 text-primary  px-5 py-3">
      <div>
        <File />
      </div>
      <div className="flex flex-row gap-3 ">
        {navelement && navelement.map((item) => {

          const Icon = true ? item.activeIcon : item.icon;
          return (

            <a
              href={item.href}
              key={item.href}>

              <div

                className={
                  "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-950 bg-amber-300  hover:opacity-100 text-primary"
                }
              >
                <Icon className="size-5 text-neutral-950" />
                {item.label}
              </div>
            </a>

          );
        })}
      </div>

      <div>
        <UserDropDown />
      </div>
    </div>
  );
};
