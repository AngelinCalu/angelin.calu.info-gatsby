import { MDXProvider } from '@mdx-js/react';
import Code from './src/components/code'
import React from 'react';

const components = {
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-bold">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-bold">{children}</h6>,
    'p.inlineCode': (props) => (
        <code className="bg-gray-100 rounded-sm text-red-600 text-sm font-mono px-1 py-px" {...props} />
    ),
    pre: ({ children: { props } }) => {
        if (props.mdxType === 'code') {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={
                        props.className && props.className.replace('language-', '')
                    }
                    {...props}
                />
            );
        }
    }
};

export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>;
