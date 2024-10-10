import { InfoContactItem } from "../interface/info-contact-item";
import {FaEnvelope, FaMapMarkedAlt, FaPhoneAlt} from "react-icons/fa"

export const infoContactData:InfoContactItem[]=[
    {
        icon:FaPhoneAlt,
        titleEn:"Phone",
        titleVi:"Điện thoại",
        descriptionVi:"0399 161 228",
        descriptionEn:"0399 161 228"
    },
    {
        icon:FaEnvelope,
        titleVi:"Email",
        titleEn:"Email",
        descriptionVi:"nam.nguyenbku00@gmail.com",
        descriptionEn:"nam.nguyenbku00@gmail.com"
    },
    {
        icon:FaMapMarkedAlt,
        titleEn:"Address",
        titleVi:"Địa chỉ",
        descriptionEn:"Topaz Home 2 Apartment Block A3, 144 Street 154, Tan Phu Ward, Thu Duc City, Ho Chi Minh City",
        descriptionVi:"Chung cư Topaz Home 2 Block A3, 144 Đường 154, Phường Tân Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh"
    }
]