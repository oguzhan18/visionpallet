'use client'
import type { FC } from 'react'
import React from 'react'

import { useStore } from '@/state/gen-state'
import type { Item } from '@/state/items'
import { joinClasses } from '@/utils/joinClasses'
import { useIsInViewport } from '@/utils/useIsInViewport'

import styles from './Item.module.scss'

const ItemInternal: FC<{
  item: Item
  isOpen: boolean
}> = ({ item, isOpen }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInViewport = useIsInViewport(ref)
  const state = useStore([`toggleOpenWindow`, `openContextMenu`, `setState`])
  const text =
    item.body.type === `generated` ? item.body.modifier : item.body.prompt
  return (
    <div
      ref={ref}
      className={joinClasses(styles.wrapper, isOpen && styles.isOpenWrapper)}
      onClick={() => state.toggleOpenWindow(item.id)}
      onContextMenu={(e) => {
        e.preventDefault()
        state.openContextMenu({ elementType: `item`, id: item.id })
      }}
    >
      {isInViewport && (
        <>
          <div
            className={styles.img}
            style={{
              backgroundImage: `url("${item.body.base64}")`,
            }}
          />

          <div className={styles.text}>
            <h1>{item.title}</h1>
            {
              <p>
                {text.substring(0, 90)}
                {text.length > 90 && `...`}
              </p>
            }
          </div>
        </>
      )}
    </div>
  )
}

export const ItemComponent = React.memo(ItemInternal)
