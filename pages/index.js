import Link from 'next/link'
import { useContext } from 'react'
import LocaleContext from '../utils/localeContext'
import en from '../locales/en.json'
import ar from '../locales/ar.json'

export default function Home() {
  const {locale, setLocale} = useContext(LocaleContext)
  const t = locale === 'ar' ? ar : en
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">YourStore — {t.brand}</h1>
        <div>
          <button onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')} className="px-3 py-1 border rounded">
            {locale === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-8">
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">{t.hero_title}</h2>
          <p className="mt-2 text-gray-600">{t.hero_sub}</p>

          <div className="mt-4 flex gap-3">
            <Link href="/shop/demo-shop"><a className="px-4 py-2 bg-indigo-600 text-white rounded">Open demo shop</a></Link>
            <Link href="/dashboard"><a className="px-4 py-2 border rounded">Go to dashboard</a></Link>
          </div>
        </section>
      </main>
    </div>
  )
}
