import { AboutProps } from "./About/interfaces";
import { Menu } from "../interfaces";

export interface Props extends AboutProps{
  menu: Menu[];
  isReadMoreClicked: boolean;
  description: string;
  onMenuButtonClick: React.MouseEventHandler;
  onReadMoreClick: () => void;
  buttonPosition: () => number;
}