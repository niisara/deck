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

  // Check if color is provided in style
  const hasColor = style?.color && typeof style.color === 'string';
  
  // If color is provided, use mask-image approach for better color control
  if (hasColor) {
    const { color, ...restStyle } = style;
    const maskedStyle: React.CSSProperties = {
      ...restStyle,
      WebkitMaskImage: `url(${iconSrc})`,
      maskImage: `url(${iconSrc})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      backgroundColor: color,
      width: iconSize,
      height: iconSize,
    };
    
    return <div className={className} style={maskedStyle} />;
  }

  // Determine the filter to apply
  let appliedFilter = filter;
  if (darkModeInvert) {
    appliedFilter = 'invert(1)';
  }

  // Combine provided styles
  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(appliedFilter && { filter: appliedFilter }),
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
