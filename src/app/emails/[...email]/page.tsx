'use client'
import { render } from '@react-email/render'
import { useEffect, useState } from 'react'
import { GenerateButton } from './components/GenerateButton'
import { Toaster } from 'sonner'

export default function Email({ params }: { params: { email: string[] } }) {
  const [html, setHtml] = useState('')
  const [loading, setLoading] = useState(true)

  const route = params.email.join('/')

  useEffect(() => {
    const getComponent = async (intervalId: NodeJS.Timer) => {
      setLoading(true)
      try {
        const El = (await import(`@/components/${route}`)).default
        const result = render(<El />, { pretty: true })

        setHtml(result)
      } catch (error) {
        clearInterval(intervalId)
      } finally {
        setLoading(false)
      }
    }

    const intervalId = setInterval(() => {
      getComponent(intervalId)
    }, 300)

    getComponent(intervalId)

    return () => clearInterval(intervalId)
  }, [route])

  return (
    <div className='flex justify-center items-center bg-black min-h-screen'>
      {html === '' ? (
        <p className='text-center text-white text-3xl'>
          {loading ? 'Cargando...' : 'No existe el email '}
          {!loading && <span className='font-bold text-red-500'>"{route}"</span>}
        </p>
      ) : (
        <iframe className='w-full min-h-screen' srcDoc={html} title='html email' />
      )}

      <GenerateButton html={html} route={params.email} />

      <Toaster theme='dark' position='top-center' expand />
    </div>
  )
}
