'use client'

import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Image from 'next/image'

interface MDXContentProps {
  content: string
}

export default function MDXContent({ content }: MDXContentProps) {
  // Custom components for markdown rendering
  const components = useMemo(
    () => ({
      // Headings with auto-generated IDs
      h2: ({ children, ...props }: any) => (
        <h2
          id={props.id}
          className="text-3xl font-bold text-slate-900 mt-12 mb-4 scroll-mt-24"
          {...props}
        >
          {children}
        </h2>
      ),
      h3: ({ children, ...props }: any) => (
        <h3
          id={props.id}
          className="text-2xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-24"
          {...props}
        >
          {children}
        </h3>
      ),
      // Paragraphs
      p: ({ children }: any) => (
        <p className="text-slate-700 leading-relaxed mb-6">{children}</p>
      ),
      // Lists
      ul: ({ children }: any) => (
        <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700">
          {children}
        </ul>
      ),
      ol: ({ children }: any) => (
        <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-700">
          {children}
        </ol>
      ),
      li: ({ children }: any) => <li className="ml-4">{children}</li>,
      // Links
      a: ({ children, href }: any) => (
        <a
          href={href}
          className="text-primary-600 hover:text-primary-700 underline"
          target={href?.startsWith('http') ? '_blank' : undefined}
          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ),
      // Images
      img: ({ src, alt }: any) => {
        // Handle relative paths
        const imageSrc = src?.startsWith('/') ? src : `/blog/${src}`
        return (
          <span className="block my-8">
            <Image
              src={imageSrc}
              alt={alt || ''}
              width={800}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
            {alt && (
              <span className="block text-center text-sm text-slate-500 mt-2 italic">
                {alt}
              </span>
            )}
          </span>
        )
      },
      // Blockquotes
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-6 bg-primary-50 rounded-r-lg">
          <div className="text-slate-700 italic">{children}</div>
        </blockquote>
      ),
      // Code blocks
      code: ({ inline, children, ...props }: any) => {
        if (inline) {
          return (
            <code
              className="px-1.5 py-0.5 bg-slate-100 text-primary-600 rounded text-sm font-mono"
              {...props}
            >
              {children}
            </code>
          )
        }
        return (
          <code
            className="block p-4 bg-slate-900 text-slate-100 rounded-lg overflow-x-auto text-sm font-mono my-6"
            {...props}
          >
            {children}
          </code>
        )
      },
      // Strong (bold)
      strong: ({ children }: any) => (
        <strong className="font-bold text-slate-900">{children}</strong>
      ),
      // Emphasis (italic)
      em: ({ children }: any) => <em className="italic">{children}</em>,
      // Horizontal rule
      hr: () => <hr className="my-8 border-slate-200" />,
    }),
    []
  )

  return (
    <ReactMarkdown
      components={components}
      rehypePlugins={[
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ]}
    >
      {content}
    </ReactMarkdown>
  )
}
