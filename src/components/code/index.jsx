import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

import TopBar from './top-bar';

const Code = ({ codeString, language, ...props }) => {
    if (props['react-live']) {
        return (
            <LiveProvider code={codeString} noInline theme={theme}>
                <div className="font-mono live-editor-wrapper relative rounded border bg-black border-gray-600">
                    <TopBar/>
                    <LiveEditor
                        style={{ fontSize: '12px', fontFamily: 'inherit', margin: '0 5px', borderRadius: '5px' }}
                    />
                </div>
                <LiveError />
                <LivePreview />
            </LiveProvider>
        );
    }
    return (
        <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className="gatsby-highlight" data-language={language}>
                    <pre className={`rounded text-sm border border-gray-600 ${className}`} style={style}>
                        <TopBar/>
                        <div className="py-2 overflow-auto">
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    <span className="hidden md:inline-block text-white text-opacity-50 hover:text-opacity-100 flex-none w-10 px-2 mr-2 text-right select-none bg-gray-800 bg-opacity-25">
                                        {i + 1}
                                    </span>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </pre>
                </div>
            )}
        </Highlight>
    );
};

export default Code;
