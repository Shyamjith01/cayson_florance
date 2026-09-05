  import { NextResponse } from 'next/server'
  import { stat, createReadStream } from 'fs'
  import { join } from 'path'
  import { promisify } from 'util'

  const fileStat = promisify(stat)
  const CHUNK_SIZE = 1 * 1024 * 1024 // 1MB chunks

  export async function GET(request) {
    try {
      const { searchParams } = new URL(request.url)
      const file = searchParams.get('file') || 'corporate-hero.mp4'

      if (file.includes('..') || file.includes('/')) {
        return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
      }

      const VIDEO_PATH = join(process.cwd(), 'public', 'video', file)
      const CONTENT_TYPE = file.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'

      const { size } = await fileStat(VIDEO_PATH)
      const range = request.headers.get('range')

      // If the browser sends a Range header, serve partial content (206)
      if (range) {
        const parts = range.replace(/bytes=/, '').split('-')
        const start = parseInt(parts[0], 10)
        const end = parts[1] ? parseInt(parts[1], 10) : Math.min(start + CHUNK_SIZE - 1, size - 1)
        const contentLength = end - start + 1

        const stream = createReadStream(VIDEO_PATH, { start, end })
        const readableStream = nodeStreamToWeb(stream)

        return new Response(readableStream, {
          status: 206,
          headers: {
            'Content-Range': `bytes ${start}-${end}/${size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': contentLength.toString(),
            'Content-Type': CONTENT_TYPE,
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        })
      }

      // No Range header — serve full file (rarely happens with video)
      const stream = createReadStream(VIDEO_PATH)
      const readableStream = nodeStreamToWeb(stream)

      return new Response(readableStream, {
        status: 200,
        headers: {
          'Content-Length': size.toString(),
          'Content-Type': CONTENT_TYPE,
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      })
    } catch (err) {
      console.error('Video stream error:', err)
      return NextResponse.json({ error: 'Video not found' }, { status: 404 })
    }
  }

  /**
   * Convert a Node.js Readable stream into a Web ReadableStream
   * so it can be used with the Web Response API.
   */
  function nodeStreamToWeb(nodeStream) {
    return new ReadableStream({
      start(controller) {
        nodeStream.on('data', (chunk) => {
          controller.enqueue(new Uint8Array(chunk))
        })
        nodeStream.on('end', () => {
          controller.close()
        })
        nodeStream.on('error', (err) => {
          controller.error(err)
        })
      },
      cancel() {
        nodeStream.destroy()
      },
    })
  }
