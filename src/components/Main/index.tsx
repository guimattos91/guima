import { memo } from 'react'

import SectionClients from 'components/SectionClients'
import SectionForms from 'components/SectionForms'
import SectionMainBanner from 'components/SectionMainBanner'
import SectionWhoWeAre from 'components/SectionWhoWeAre'
import SectionWorks from 'components/SectionWorks'

const Main: React.FC = () => {
  return (
    <main>
      <SectionMainBanner />
      <SectionClients />
      <SectionWhoWeAre />
      <SectionWorks />
      <SectionForms />
    </main>
  )
}

export default memo(Main)
