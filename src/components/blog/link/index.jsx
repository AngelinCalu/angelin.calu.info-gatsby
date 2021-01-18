import React from 'react';
import { Link as InternalLink } from 'gatsby';

export default function Link({ children, href, className, style, title }) {
    if (href.startsWith('/')) {
        return <InternalLink to={href}>{children}</InternalLink>;
    }

    const onPage = href.startsWith('#');

    return (
        <a
            className={className}
            href={href}
            style={style}
            title={title}
            target={onPage ? null : '_blank'}
            rel={onPage ? null : 'noopener noreferrer nofollow'}
        >
            {children}
        </a>
    );
}
