'use client'

import { Facebook, Linkedin, Twitter, Link as LinkIcon } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-slate-600">Partager :</span>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-[#1DA1F2] text-slate-600 hover:text-white transition-colors"
        aria-label="Partager sur Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0A66C2] text-slate-600 hover:text-white transition-colors"
        aria-label="Partager sur LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white transition-colors"
        aria-label="Partager sur Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>

      <button
        onClick={copyToClipboard}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-primary-600 text-slate-600 hover:text-white transition-colors relative"
        aria-label="Copier le lien"
      >
        <LinkIcon className="w-4 h-4" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-slate-900 text-white px-2 py-1 rounded whitespace-nowrap">
            Copié !
          </span>
        )}
      </button>
    </div>
  )
}
