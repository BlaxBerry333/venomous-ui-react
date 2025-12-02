"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { Icon } from "@/components/Icon";
import { Typography } from "@/components/Typographies";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useAvatarActions, useAvatarStyles } from "./Avatar.hooks";
import { type AvatarProps, type AvatarRef, AVATAR_SHAPE_MAP } from "./Avatar.types";

const Avatar = React.memo(
  React.forwardRef<AvatarRef, AvatarProps>(
    (
      { className, style, shape: propShape, width: propWidth, src: propSrc, alt: propAlt, text: propText, ...props },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<AvatarProps>({
        displayName: COMPONENT_DISPLAY_NAMES.Avatar,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const shape = propShape ?? customComponentProps.shape ?? AVATAR_SHAPE_MAP.CIRCLE;
      const width = propWidth ?? customComponentProps.width ?? 40;
      const src = propSrc ?? customComponentProps.src;
      const alt = propAlt ?? customComponentProps.alt;
      const text = propText ?? customComponentProps.text;

      const { componentStyle, insideImageStyle, insideIconStyle, insideTextStyle } = useAvatarStyles({
        shape,
        width,
      });
      const { isImageLoadError, setIsImageError } = useAvatarActions({ src });

      // has image source and loaded with no error
      if (src && !isImageLoadError) {
        return (
          <Box
            as="div"
            ref={ref}
            className={clsx(COMPONENT_CLASSNAME_NAMES.Avatar, className)}
            style={{ ...componentStyle, ...style }}
            {...props}
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              style={{ ...insideImageStyle }}
              onError={() => setIsImageError(true)}
            />
          </Box>
        );
      }

      // has image source but failed to load
      if (src && isImageLoadError) {
        return (
          <Box
            as="div"
            ref={ref}
            className={clsx(COMPONENT_CLASSNAME_NAMES.Avatar, className)}
            style={{ ...componentStyle, ...style }}
            {...props}
          >
            <Icon icon="mdi:help" width={width / 2} style={insideIconStyle} />
          </Box>
        );
      }

      // no image source only text placeholder
      if (!src && text) {
        return (
          <Box
            as="div"
            ref={ref}
            className={clsx(COMPONENT_CLASSNAME_NAMES.Avatar, className)}
            style={{ ...componentStyle, ...style }}
            {...props}
          >
            <Typography.Text as="strong" text={text.trim().slice(0, 2).toUpperCase()} style={insideTextStyle} />
          </Box>
        );
      }

      // no image source and no text placeholder
      return (
        <Box
          as="div"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.Avatar, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          <Icon icon="mdi:account" width={width / 2} style={insideIconStyle} />
        </Box>
      );
    },
  ),
);

Avatar.displayName = COMPONENT_DISPLAY_NAMES.Avatar;
export default Avatar;
