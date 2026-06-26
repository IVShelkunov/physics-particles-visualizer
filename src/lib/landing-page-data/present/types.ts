import { ReactNode } from "react";
export type LinkType = "main" | "secondary";
export interface ILink {
    id: number,
    type: LinkType;
    text: string;
    href: string;
}
export interface IPresent {
    subTitle: string;
    title: string;
    decription: ReactNode;
    links: ILink[];
}