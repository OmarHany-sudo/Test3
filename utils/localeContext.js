import { createContext } from 'react'
const LocaleContext = createContext({locale: 'en', setLocale: () => {}})
export default LocaleContext
