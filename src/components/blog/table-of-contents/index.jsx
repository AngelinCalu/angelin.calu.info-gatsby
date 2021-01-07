import React from 'react';
import Scrollspy from 'react-scrollspy';

const TableOfContents = ({ items }) => {

    const headingsList = (items, level) => {
        let headings = [];
        items.forEach((item) => {
            headings.push({ ...item, level });
            item.items && headings.push(...headingsList(item.items, level + 1));
        });
        return headings;
    };

    const allHeadings = headingsList(items, 0);

    return (
        <aside className="sticky top-0 hidden lg:block max-w-xs w-full whitespace-nowrap h-screen overflow-auto pl-2 pt-6">
            <nav>
                <h3 className="uppercase tracking-wide font-semibold whitespace-nowrap mb-6 text-sm text-gray-500 dark:text-gray-200">
                    In this article
                </h3>
                <Scrollspy
                    items={allHeadings.map(heading => heading.url.substring(1))}
                    currentClassName="text-blue-500"
                    className="space-y-3 border-l border-blue-300 pl-3 text-sm"
                >
                    {allHeadings.map((item) => (
                        <li key={item.url} style={{ paddingLeft: `${item.level}rem` }}>
                            <a className="transform transition-colors duration-200" href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </Scrollspy>
            </nav>
        </aside>
    );
};

export default TableOfContents;
