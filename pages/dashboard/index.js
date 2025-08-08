import Link from 'next/link'
import { useContext, useState } from 'react'
import LocaleContext from '../../utils/localeContext'
import en from '../../locales/en.json'
import ar from '../../locales/ar.json'
import mock from '../../data/mock-shop.json'

export default function Dashboard() {
  const {locale, setLocale} = useContext(LocaleContext)
  const t = locale === 'ar' ? ar : en
  const [items, setItems] = useState(mock.items)

  function addItem() {
    const newItem = {id: Date.now().toString(), name: 'New Item', description: 'Sample', price: 50, image: '/images/placeholder.png'}
    setItems([newItem, ...items])
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard — {t.brand}</h1>
        <div>
          <button onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')} className="px-3 py-1 border rounded">
            {locale === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-8">
        <section className="bg-white p-6 rounded shadow">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Menu Editor</h2>
            <div className="flex gap-2">
              <button onClick={addItem} className="px-3 py-1 bg-indigo-600 text-white rounded">Add item</button>
              <Link href="/"><a className="px-3 py-1 border rounded">Preview Shop</a></Link>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(it => (
              <div key={it.id} className="p-4 border rounded flex gap-4">
                <img src={it.image} alt={it.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{it.name}</h3>
                  <p className="text-sm text-gray-500">{it.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-medium">{it.price} EGP</span>
                    <div className="flex gap-2">
                      <button className="px-2 py-1 border rounded">Edit</button>
                      <button className="px-2 py-1 border rounded">Delete</button>
                    </div>
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
