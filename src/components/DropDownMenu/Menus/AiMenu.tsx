import React from 'react'
import { PiGearLight } from 'react-icons/pi'

import { useStore } from '@/state/gen-state'
import Dropdown from '@/ui/Dropdown'

import style from '../DropDownMenu.module.scss'
import { FalSettingsModalGuard } from '../Modals/FalSettingsModal'

export const AIMenu = () => {
  const state = useStore([
    `setState`,
    `createFalSettingsNode`,
    `centerSpaceAroundWindow`,
  ])
  return (
    <div className={style.item}>
      <Dropdown.Menu
        id="dropdown-ai-button"
        SelectedOption={() => <p>AI</p>}
        Options={[
          <Dropdown.Item
            onClick={() => {
              state.setState((draft) => {
                draft.showFalSettingsModal = true
              })
            }}
            key={`Global Settings`}
            label1="Global Settings"
          />,
          <Dropdown.Item
            onClick={() => {
              const id = state.createFalSettingsNode()
              state.centerSpaceAroundWindow(id)
            }}
            key={`New AI Settings Node`}
            label1="New AI Settings Node"
          />,
        ]}
      />
      <FalSettingsModalGuard />
    </div>
  )
}
