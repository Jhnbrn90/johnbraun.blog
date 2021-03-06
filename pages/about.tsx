import React from 'react';

import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown/with-html';

import Navigation from '../components/navigation';
import SEO from '../components/seo';
import {getAboutPage} from '../lib/about';
import { getSiteMetaData } from '../lib/site';

export default function About({content}: {content: string}): React.ReactNode {
    const siteMetadata = getSiteMetaData();

    return (
        <>
            <SEO
                title="About"
                image="profile/profile_resized.jpg"
                description={siteMetadata.aboutPage}
            />

            <Navigation />

            <main className="sm:mx-auto w-full max-w-5xl sm:w-5/6 md:w-3/4 lg:w-2/3 xl:2/3">
                <article className="flex flex-col mb-10 rounded bg-white shadow-lg sm:px-16 px-10 text-justify py-4">

                    <div className="mb-4">
                        <div className="flex justify-center pt-3 mb-4">
                            <h3 className="w-3/4 sm:text-4xl text-xl font-semibold leading-loose text-center">
                                About
                            </h3>
                        </div>
                    </div>

                    <div className="text-gray-700">
                        <ReactMarkdown
                            escapeHtml={false}
                            source={content}
                        />
                    </div>
                </article>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const content = getAboutPage();

    return {
        props: {
            content,
        },
    };
};
