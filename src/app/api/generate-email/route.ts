import { generateFile } from '@/lib/utils'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { html, route } = (await req.json()) as { html: string; route: string[] }

  try {
    await generateFile(html, route)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: 'Error creando archivo' })
  }

  return NextResponse.json({ msg: 'Listo' })
}
