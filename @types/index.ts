import React, { ReactNode } from 'react';

export type DynamicBlurProp = { min: number; max: number };
export type BlurProp = number | DynamicBlurProp;
export type BgImageProp = string;
export type BgImageSrcSetProp = string;
export type BgImageSizesProp = string;
export type BgVideoProp = string;
export type BgVideoTypeProp = 'video/mp4' | 'video/webm' | 'video/ogg';
export interface SplitChildrenResultType {
    bgChildren: Array<ReactNode>;
    children: Array<ReactNode>;
}

export type ParallaxProps = {
    bgClassName?: string;
    bgImage?: BgImageProp;
    bgImageAlt?: string;
    bgImageSizes?: BgImageSizesProp;
    bgImageSrcSet?: BgImageSrcSetProp;
    bgImageStyle?: { [key: string]: any };
    bgVideo?: BgVideoProp;
    bgVideoStyle?: { [key: string]: any };
    bgVideoType?: BgVideoTypeProp;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    opacity?: number;
    onLoad?: (event: Event) => void;
    bgStyle?: { [key: string]: any };
    blur?: BlurProp;
    children?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    disabled?: boolean;
    parent?: HTMLElement;
    renderLayer?: (percentage: number) => any;
    strength?: number;
    style?: { [key: string]: any };
};

type ParallaxState = {
    bgImage: string;
    bgVideo: string;
    bgImageSrcSet: string;
    bgImageSizes: string;
    bgStyle?: { [key: string]: any };
    imgStyle: { [key: string]: any };
    videoStyle: { [key: string]: any };
    percentage: number;
    splitChildren: SplitChildrenResultType;
};

export type ParallaxChildrenProps = {
    className?: string;
    children?: React.ReactNode;
    onMount(node: HTMLDivElement): void;
};

export class Parallax extends React.Component<ParallaxProps, ParallaxState> {}

export interface StyleObjectType {
    [key: string]: string;
}
