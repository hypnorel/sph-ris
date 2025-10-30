import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, #DB2777, #C026D3, #7C3AED)',
          fontWeight: 'bold',
          color: 'white',
          fontSize: 20,
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
