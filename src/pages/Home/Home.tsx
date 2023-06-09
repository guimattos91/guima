import { memo, useEffect } from 'react'

// import { useTranslation } from 'react-i18next'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'

import useTitle from 'hooks/useTitle'
// import LanguageSwitcher from 'components/LanguageSwitcher'

const Home: React.FC = () => {
  // const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default memo(Home)
