import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Code from './src/components/code';
import Link from './src/components/blog/link';

import { Callout, ExternalLink } from './src/components/ui';

import ThemeWrapper from './src/context/theme';

const components = {
    a: Link,
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
        <MDXProvider components={{ ...components, Callout, ExternalLink }}>{element}</MDXProvider>
    </ThemeWrapper>
);
