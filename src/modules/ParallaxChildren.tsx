import React from 'react';

import { ParallaxChildrenProps } from '../../@types';

const ParallaxChildren: React.FC<ParallaxChildrenProps> = ({ children, onMount, className }) => (
    <div
        ref={(node) => onMount(node)}
        className={className || 'react-villax-content'}
        style={{ position: 'relative' }}
    >
        {children}
    </div>
);

export default ParallaxChildren;
