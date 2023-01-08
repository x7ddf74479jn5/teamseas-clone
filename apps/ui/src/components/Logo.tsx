import { chakra, forwardRef, ImageProps } from "@chakra-ui/react";
import logo from "../assets/TeamSeasLogo.png";

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={logo} ref={ref} {...props} />;
});
