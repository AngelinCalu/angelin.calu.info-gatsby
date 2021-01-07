import React, { useState } from 'react';
import { Link } from 'gatsby';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubscription = async (e) => {
        e.preventDefault();

        setError('');

        if (!name)  return setError('Please write your first name!');
        if (!email) return setError('The email is a required field!');


        const { msg, result } = await addToMailchimp(email, {
            fname: name
        });

        if (result === 'error') {
            setError(msg);
            setSuccess('');
        }

        if (result === 'success') {
            setError('');
            setSuccess(msg);
            setEmail('');
        }
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto px-10 md:px-4 xl:px-0">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-2 xl:gap-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase">
                                About
                            </h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <Link
                                        to="/skills"
                                        title="Skills"
                                        activeClassName="text-blue-700"
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                    >
                                        Skills
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/experience"
                                        title="Experience"
                                        activeClassName="text-blue-700"
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                    >
                                        Experience
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/education"
                                        title="Education"
                                        activeClassName="text-blue-700"
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                    >
                                        Education
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/shipbuilding"
                                        title="Shipbuilding"
                                        activeClassName="text-blue-700"
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                    >
                                        Shipbuilding
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase">
                                Blog
                            </h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <Link
                                        to="/blog"
                                        title="Blog"
                                        activeClassName="text-blue-700"
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                    >
                                        Latest Posts
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="/rss.xml"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="RSS Feed"
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                    >
                                        RSS Feed
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase">
                                    Legal
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link
                                            to="/cookie-policy"
                                            title="Cookie Policy"
                                            activeClassName="text-blue-700"
                                            className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                        >
                                            Cookie Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className="mt-8 xl:mt-0">
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider uppercase">
                            Subscribe to my newsletter
                        </h3>
                        <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                            Get a notification, in your inbox, every time I post. No spam, unsubscribe at any time.
                        </p>
                        <p className="pt-2 text-red-500" dangerouslySetInnerHTML={{ __html: error }} />
                        <p className="pt-2 text-green-500" dangerouslySetInnerHTML={{ __html: success }} />

                        <form onSubmit={handleSubscription} className="mt-4 sm:flex md:max-w-xl">
                            <label htmlFor="firstName" className="sr-only">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="appearance-none min-w-0 w-full md:w-3/4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400"
                                placeholder="First Name"
                            />

                            <label htmlFor="emailAddress" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="emailAddress"
                                id="emailAddress"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="appearance-none min-w-0 w-full mt-1 sm:mt-0 sm:ml-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400"
                                placeholder="E-mail address"
                            />
                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-400 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <a
                            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
                            href="mailto:angelin.calu@gmail.com"
                            title="Email Angelin Calu"
                        >
                            <span className="sr-only">Email me</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                            </svg>
                        </a>
                        <a
                            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
                            target="_blank"
                            title="Angelin Calu on Twitter"
                            rel="noopener nofollow noreferrer"
                            href="https://twitter.com/@AngelinCalu"
                        >
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>

                        <a
                            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
                            target="_blank"
                            title="Angelin Calu on Facebook"
                            rel="noopener nofollow noreferrer"
                            href="https://facebook.com/angelin.calu"
                        >
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>

                        <a
                            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
                            target="_blank"
                            title="Angelin Calu on Instagram"
                            rel="noopener nofollow noreferrer"
                            href="https://www.instagram.com/angelin.calu"
                        >
                            <span className="sr-only">Instagram</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>

                        <a
                            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
                            target="_blank"
                            title="Angelin Calu on Github"
                            rel="noopener nofollow noreferrer"
                            href="https://github.com/AngelinCalu"
                        >
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a
                            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
                            target="_blank"
                            title="Angelin Calu on LinkedIn"
                            rel="noopener nofollow noreferrer"
                            href="https://linkedin.com/in/angelincalu"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="7.025 7.025 497.951 497.95"
                            >
                                <path
                                    d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>

                        <a
                            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
                            target="_blank"
                            title="Angelin Calu on StackOverflow"
                            rel="noopener nofollow noreferrer"
                            href="https://stackoverflow.com/users/2012740/angelin-calu"
                        >
                            <span className="sr-only">StackOverflow</span>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6"><path d="M17.24 19.399v-4.804h1.6V21H4.38v-6.405H5.98v4.804h11.26zM7.582 17.8h8.055v-1.604H7.582V17.8zm.195-3.64l7.859 1.641.34-1.552-7.861-1.642-.338 1.553zm1.018-3.794l7.28 3.398.679-1.463-7.281-3.399-.678 1.454v.01zm2.037-3.589l6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm3.982-3.778l-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002z" fill="currentColor" /></svg>
                        </a>

                        
                    </div>
                    <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 md:mt-0 md:order-1 text-center">
                        &copy; 2021 Angelin Calu. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
