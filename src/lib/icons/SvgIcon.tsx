import React from "react";
import { icons, size, type IconName, type SizeName } from "./Icons";

interface SvgIconProps {
  iconName: IconName;
  sizeName?: SizeName;
  className?: string;
  alt?: string;
  filter?: string;
  style?: React.CSSProperties;
  darkModeInvert?: boolean;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  iconName,
  sizeName = "1x",
  className = "",
  alt = "",
  filter = "",
  style = {},
  darkModeInvert = false,
}) => {
  const iconSrc = icons[iconName];
  const iconSize = size[sizeName] || size["1x"];

  // Combine provided styles with filter and dark mode invert if present
  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(filter && { filter }),
    ...(darkModeInvert && { filter: 'invert(1)' }),
  };

  return iconSrc ? (
    <img 
      src={iconSrc} 
      alt={alt} 
      width={iconSize} 
      height={iconSize} 
      className={className}
      style={combinedStyle}
    />
  ) : null;
};

export default SvgIcon;
