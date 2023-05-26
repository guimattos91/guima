import { memo } from 'react'

import { NavStyled, SectionStyled, SectionStyledSmall } from './style'

interface IMenuMobileProps {
  menuActivate: boolean
  setMenuActivate: React.Dispatch<React.SetStateAction<boolean>>
}
const MenuMobile: React.FC<IMenuMobileProps> = ({
  menuActivate,
  setMenuActivate,
}) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {menuActivate && (
        <>
          <button
            className="hamburger hamburger--squeeze"
            type="button"
            onClick={() => setMenuActivate(false)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <SectionStyled>
            <NavStyled>
              <a href="#clientes" className="px-3">
                Nossos Clientes
              </a>
              <a href="#trabalho" className="px-3">
                Nossos Trabalhos
              </a>
              <a href="#contato" className="px-3">
                Contato
              </a>
            </NavStyled>
          </SectionStyled>
        </>
      )}
    </>
  )
}

export default memo(MenuMobile)
