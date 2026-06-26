import { ReactNode } from "react";

export type ScoreColorType = "red" | "green";
export interface IScore {
    id: number;
    title: string;
    value: number;
    color: ScoreColorType;
}
export interface IChallenge {
    subtitle: string;
    title: string;
    description: string;
    scrores: IScore[];
    conclusion: ReactNode;
}