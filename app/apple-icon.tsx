import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #DB2777 0%, #C026D3 50%, #7C3AED 100%)',
          fontWeight: 'bold',
          color: 'white',
          fontSize: 100,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        S
      </div>
    ),
    {
      ...size,
    }
  )
}
