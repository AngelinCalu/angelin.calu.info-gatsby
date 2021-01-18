import React from 'react';
import { Link as InternalLink } from 'gatsby';

export default function Link({ children, href }) {
    if (href.startsWith('/')) {
        return <InternalLink to={href}>{children}</InternalLink>;
    }

    const onPage = href.startsWith('#');

    return (
        <a href={href} target={onPage ? null : '_blank'} rel={onPage ? null : 'noopener noreferrer nofollow'}>
            {children}
        </a>
    );
}
