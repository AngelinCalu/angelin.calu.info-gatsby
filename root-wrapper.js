import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Code from './src/components/code';

import ThemeWrapper from './src/context/theme';

const components = {
    pre: ({ children: { props } }) => {
        if (props.mdxType === 'code') {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={props.className && props.className.replace('language-', '')}
                    {...props}
                />
            );
        }
    },
};

export const wrapRootElement = ({ element }) => (
    <ThemeWrapper>
        <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeWrapper>
);
