import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react'
import LocaleContext from '../../utils/localeContext'
import en from '../../locales/en.json'
import ar from '../../locales/ar.json'
import mock from '../../data/mock-shop.json'

export default function Shop() {
  const {locale, setLocale} = useContext(LocaleContext)
  const t = locale === 'ar' ? ar : en
  const router = useRouter()
  const { slug } = router.query
  const shop = mock

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-3xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{shop.name}</h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')} className="px-3 py-1 border rounded">
            {locale === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto mt-6">
        <section className="bg-white p-6 rounded shadow">
          <p className="text-gray-600">{shop.description}</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {shop.items.map(item => (
              <div key={item.id} className="p-4 border rounded flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-medium">{item.price} EGP</span>
                    <button className="px-3 py-1 bg-green-600 text-white rounded">Order</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
