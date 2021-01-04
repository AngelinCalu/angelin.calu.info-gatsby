import React from 'react';

import Layout from '../layout';
import SEO from '../components/seo';

const CookiePolicy = () => {
    return (
        <Layout>
            <SEO
                pathname="/cookie-policy"
                title="Cookie Policy"
                description="This page describes the cookies used by Angelin Calu on his personal website, what cookies are and what options the users have."
            />

            <div className="prose prose-sm sm:prose lg:prose-lg min-w-0 max-w-none">
                <h1>Cookie Policy</h1>

                <p>
                    Last updated: <span className="text-sm text-gray-500">04.01.2021</span>
                </p>
                <p>
                    This is the Cookie Policy for the personal website of Angelin Calu, accessible from
                    https://angelin.calu.info.
                </p>
                <p>
                    This Cookies Policy explains what Cookies are and how they are used. You should read this policy so
                    you can understand what type of cookies are used, or the information collected using these cookies
                    and how that information is used.
                </p>
                <p>
                    <strong>What Are Cookies</strong>
                </p>
                <p>
                    As is common practice with almost all professional websites this site uses cookies, which are tiny
                    files that are downloaded to your computer, to improve your experience. This page describes what
                    information they gather, how they are uses and why sometimes these need to be stored. You can also
                    find information about how you can prevent these cookies from being stored however this may
                    downgrade or 'break' certain elements of the sites functionality.
                </p>
                <p>
                    For more general information on cookies, please read more on this excellent resource from{' '}
                    <a
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                        href="https://en.wikipedia.org/wiki/HTTP_cookie/"
                    >
                        "Wikipedia"
                    </a>
                    .
                </p>

                <p>
                    <strong>How are these Cookies used</strong>
                </p>

                <p>
                    When you visit our website, information on your computer is stored in the form of cookies. This does
                    not, however, mean that as a result, someone could receive any direct knowledge of your identity. Unfortunately
                    in most cases there are no industry standard options for disabling cookies without completely
                    disabling the functionality and features they add to this site. It is recommended that you leave on
                    all cookies if you are not sure whether you need them or not in case they are used to provide a
                    service that you use.
                </p>

                <p>
                    <strong>Disabling Cookies</strong>
                </p>

                <p>
                    You can prevent the setting of cookies by adjusting the settings on your browser (see your browser
                    Help for how to do this). Be aware that disabling cookies will affect the functionality of this and
                    many other websites that you visit. Disabling cookies will usually result in also disabling certain
                    functionality and features of the this site. Therefore it is recommended that you do not disable
                    cookies.
                </p>

                <p>
                    <strong>Third Party Cookies</strong>
                </p>

                <p>
                    This website only uses cookies provided by trusted third parties. The following section details which third party
                    cookies you might encounter through this site.
                </p>
                <ul>
                    <li>
                        <p>
                            This site uses Google Analytics, a web analysis service of{' '}
                            <a
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                href="https://about.google/intl/about/"
                            >
                                Google Inc
                            </a>
                            , which is one of the most widespread and trusted analytics solution on the web for helping
                            to understand how you use the site and ways that could improve your experience. These
                            cookies may track things such as how long you spend on the site and the pages that you visit
                            so I can continue to produce engaging content.
                        </p>
                        <p>
                            For more information on Google Analytics cookies, see the official{' '}
                            <a
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                            >
                                Google Analytics page
                            </a>
                            .
                        </p>
                    </li>
                </ul>

                <p>
                    <strong>More Information</strong>
                </p>

                <p>
                    Hopefully that has clarified things for you and as was previously mentioned if there is something
                    that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it
                    does interact with one of the features you use on our site.
                </p>

                <p>
                    However if you are still looking for more information then you can contact Angelin Calu through one
                    of your preferred contact methods:
                </p>

                <ul>
                    <li>Email: angelin.calu@gmail.com</li>
                    <li>Phone: +40 747455422 or +358 469065086</li>
                </ul>
            </div>
        </Layout>
    );
};

export default CookiePolicy;
