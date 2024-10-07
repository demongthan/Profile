import { ItemsEducationItem } from "./items-education-item";

export interface EducationItem{
    icon: string;
    titleVi: string;
    titleEn: string;
    descriptionVi:string,
    descriptionEn:string,
    items:ItemsEducationItem[]
}