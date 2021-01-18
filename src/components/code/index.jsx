import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { copyToClipboard } from '../../utils/copy-to-clipboard';
import TopBar from './top-bar';

const Code = ({ codeString, language, ...props }) => {
    const [confirmation, setConfirmation] = useState(false);

    const copyCode = async () => {
        const copied = await copyToClipboard(codeString);
        if (copied) {
            setConfirmation(true);
        }
    };

    if (props['react-live']) {
        return (
            <LiveProvider code={codeString} noInline theme={theme}>
                <div className="font-mono live-editor-wrapper relative rounded border bg-black border-gray-600">
                    <TopBar />
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
                        <TopBar />
                        <div className="absolute h-6 right-0 top-0 px-2 bg-gray-600 rounded-tr rounded-bl cursor-pointer hover:text-white">
                            <button
                                className="flex items-center focus:outline-none"
                                type="button"
                                title="Copy to Clipboard"
                                onClick={copyCode}
                                onAnimationIteration={() => setConfirmation(false)}
                            >
                                {confirmation ? (
                                    <>
                                        <span className="animate-ping" />
                                        <span className="tracking-tighter text-green-300">Copied!</span>
                                        <svg
                                            className="w-6 h-6 transform scale-90 text-green-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                            />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <span>Copy</span>
                                        <svg
                                            className="w-6 h-6 transform scale-90"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                            />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
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
