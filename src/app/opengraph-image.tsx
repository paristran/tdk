import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505',
        }}
      >
        {/* TDK Monogram Mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#2563eb',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Geometric "T" shape inside the monogram */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 8,
                  backgroundColor: '#ffffff',
                  borderRadius: 4,
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 32,
                  backgroundColor: '#ffffff',
                  borderRadius: 4,
                  marginTop: 4,
                }}
              />
            </div>
          </div>
        </div>

        {/* TDK Company Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: 16,
          }}
        >
          TDK Company
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#9ca3af',
            fontWeight: 400,
          }}
        >
          Premium Software Development
        </div>
      </div>
    ),
    { ...size }
  )
}
