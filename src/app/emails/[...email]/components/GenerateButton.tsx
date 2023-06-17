import { useState } from 'react'
import { toast } from 'sonner'

export function GenerateButton({ html, route }: { html: string; route: string[] }) {
  const [loading, setLoading] = useState(false)

  if (html === '') return null

  const generateFile = async () => {
    setLoading(true)
    try {
      await navigator.clipboard.writeText(html)
      toast.success('Copiado al portapapeles')

      await fetch('/api/generate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          html,
          route
        })
      })

      toast.success('Archivo creado correctamente')
    } catch (error) {
      toast.error('Error creando archivo')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={generateFile}
      disabled={loading}
      className='fixed top-4 right-4 bg-blue-500 rounded-xl px-4 py-3 font-bold hover:bg-blue-600 transition-colors disabled:opacity-50'
    >
      Generar HTML
    </button>
  )
}
