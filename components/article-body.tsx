import React from 'react';

import ReactMarkdown from 'react-markdown/with-html';

import { ImageProps,Post } from '../common/types';
import { getPullRequestUrl } from '../lib/github';

import CodeBlock from './code-block';
import Image from './image';

export default function ArticleBody({ post }: {post: Post}): JSX.Element {
    const MarkdownImage = ({alt, src}: ImageProps): JSX.Element => (
        <Image
            alt={alt}
            src={`/assets/posts/${post.slug}/${src}`}
            className="mx-auto max-h-lg"
        />
    );

    return (
        <article className="flex mx-auto flex-col mb-10 rounded bg-white shadow-lg px-12 py-4">
            <div className="sm:flex sm:justify-between text-center w-full text-sm text-gray-600 font-thin">
                <span className="block mb-4">&mdash; Published: {post.frontmatter.formattedDate}</span>

                <a href={getPullRequestUrl(post)} className="flex items-center text-sm font-normal justify-center">
                    <span className="mr-1">Submit a PR</span>
                    <svg className="h-6 w-6 fill-current">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                </a>
            </div>

            <div className="mb-5">
                <div className="flex justify-center pt-4 mb-4">
                    <h1 className="w-full tracking-wide text-center sm:text-3xl text-xl">
                        {post.frontmatter.title}
                    </h1>
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                        <img
                            alt={post.frontmatter.title}
                            src={`/assets/posts/${post.slug}/${post.frontmatter.cover}`}
                            className="max-w-md h-56 mb-4 rounded-t-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="text-gray-700">
                <ReactMarkdown
                    className="mb-4 prose-sm prose sm:prose lg:prose-lg"
                    escapeHtml={false}
                    source={post.content}
                    renderers={{ code: CodeBlock, image: MarkdownImage}}
                />
            </div>
        </article>
    );
}
