import { IconBaseProps } from "react-icons";

export interface NavItem{
    name:string,
    path:string,
    icon:React.ComponentType<IconBaseProps>
}