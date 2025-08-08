import '../styles/globals.css'
import { useState } from 'react'
import LocaleContext from '../utils/localeContext'

export default function App({ Component, pageProps }) {
  const [locale, setLocale] = useState('en')
  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Component {...pageProps} />
    </LocaleContext.Provider>
  )
}
