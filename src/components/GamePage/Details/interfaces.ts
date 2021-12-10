import { AboutProps } from "./Description/About/interfaces";

export interface Props extends AboutProps {
  src: string;
  metacritic: number;
}

export interface Menu {
  name: string;
  status: boolean;
  id: string;  
}
