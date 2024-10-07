import { ItemsExperienceItem } from "./items-experience-item";

export interface ExperienceItem{
    icon:string,
    titleVi:string,
    titleEn:string
    descriptionVi:string,
    descriptionEn:string
    items:ItemsExperienceItem[]
}