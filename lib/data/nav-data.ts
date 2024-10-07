import { HiEnvelope, HiHome, HiRectangleGroup, HiUser, HiViewColumns } from "react-icons/hi2";
import { NavItem } from "../interface/nav-item";

export const navData:NavItem[]=[
    {
        name:"Home",
        path:"",
        icon:HiHome
    },
    {
        name:"Services",
        path:"/services",
        icon:HiRectangleGroup
    },
    {
        name:"Resume",
        path:"/resume",
        icon:HiUser
    },
    {
        name:"Work",
        path:"/work",
        icon:HiViewColumns
    },
    {
        name:"Contact",
        path:"/contact",
        icon:HiEnvelope
    }

]