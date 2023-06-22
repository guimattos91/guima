import React, { memo, useCallback, useState } from 'react'

import { LuLightbulbOff, LuLightbulb } from 'react-icons/lu'

import { useThemeHook } from 'context/ThemeContext'

import { isDayTime } from 'helpers'

import { ButtonStyled } from './style'

const LightButton: React.FC = () => {
  const [lightOn, setLightOn] = useState(isDayTime())
  const { toggleTheme } = useThemeHook()

  const handleClick = useCallback(() => {
    setLightOn((prevState) => !prevState)
    toggleTheme()
  }, [toggleTheme])

  return (
    <ButtonStyled type="button" className="me-3" onClick={handleClick}>
      {lightOn && <LuLightbulbOff size={24} />}
      {!lightOn && <LuLightbulb size={24} />}
    </ButtonStyled>
  )
}

export default memo(LightButton)
