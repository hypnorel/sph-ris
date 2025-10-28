import { cn } from '@/lib/utils/cn'

interface VideoPlaceholderProps {
  title?: string
  description?: string
  aspectRatio?: '16/9' | '9/16' | '1/1'
  className?: string
}

export default function VideoPlaceholder({
  title = 'Vidéo à venir',
  description,
  aspectRatio = '16/9',
  className,
}: VideoPlaceholderProps) {
  const aspectRatios = {
    '16/9': 'aspect-video',
    '9/16': 'aspect-[9/16]',
    '1/1': 'aspect-square',
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center',
        aspectRatios[aspectRatio],
        className
      )}
    >
      {/* Icon play */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-slate-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Overlay info */}
      {(title || description) && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-4">
          <div className="text-white">
            {title && <p className="font-semibold text-sm md:text-base">{title}</p>}
            {description && <p className="text-xs md:text-sm text-slate-200">{description}</p>}
          </div>
        </div>
      )}
    </div>
  )
}
