import { memo } from 'react'

import SectionMainBanner from 'components/SectionMainBanner'

const Main: React.FC = () => {
  return (
    <main>
      <SectionMainBanner />
    </main>
  )
}

export default memo(Main)
