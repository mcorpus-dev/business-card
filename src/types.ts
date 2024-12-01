import { ImageSourcePropType } from "react-native";

export interface ISocial {
  id: number;
  name: string;
  url: string;
  color: string;
}

export interface IProject {
  id: number;
  image: ImageSourcePropType;
  text: string;
}
