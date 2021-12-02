import { AboutProps } from "./Description/About/interfaces";

export interface Props extends AboutProps {
  src: string;
}

export interface Menu {
  name: string;
  status: boolean;
  id: string;  
}
