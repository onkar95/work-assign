import { Settings } from "lucide-react";
import {
    GoHome,
    GoHomeFill,
    GoCheckCircle,
    GoCheckCircleFill,
    GoPeople,
} from "react-icons/go";

export const UserData = [
    {
        user: "user1",
        id:1,
        tabs: [
            "tab1",
            "tab2",
            "tab3",
            "tab4",
            "tab5",
        ],
    },
    {
        user: "user2",
        id:2,
        tabs: [
            "tab1",
            "tab2",
            "tab3"
        ],
    },
    {
        user: "user3",
        id:3,
        tabs: [
            "tab1",
            "tab2",
          
        ],
    },
    {
        user: "user4",
        id:4,
        tabs: [
            "tab1",
            "tab2",
            "tab3",
            "tab4"
        ],
    },
    {
        user: "user5",
        id:5,
        tabs: [
            "tab1",
            "tab2",
            "tab3"
        ],
    },

]

export const routes = [
    {
        href: "/",
        label: "Home",
        icon: GoHome,
        activeIcon: GoHomeFill,
    },
    {
        href: "/tasks",
        label: "My Tasks",
        icon: GoCheckCircle,
        activeIcon: GoCheckCircleFill,
    },
    {
        href: "/members",
        label: "Members",
        icon: GoPeople,
        activeIcon: GoPeople,
    },
    {
        href: "/settings",
        label: "Settings",
        icon: Settings,
        activeIcon: Settings,
    },
];