import React from 'react'
import type { DraggableEvent } from 'react-draggable'
import { DraggableCore } from 'react-draggable'

import { useStore } from '@/state/gen-state'
import type { WindowType } from '@/state/windows'
import { joinClasses } from '@/utils/joinClasses'

import style from './RotationPoints.module.scss'

export const ROTATION_POINTS = [
  `topLeft`,
  `topRight`,
  `bottomRight`,
  `bottomLeft`,
] as const

export type RotationPoint = (typeof ROTATION_POINTS)[number]

type WrapAround = (value: number, range: [min: number, max: number]) => number

export const wrapAround: WrapAround = (value, [min, max]) =>
  ((((value - min) % (max - min)) + (max - min)) % (max - min)) + min

const getAngleDegrees = (
  p1: { x: number; y: number },
  p2: { x: number; y: number },
) => {
  const angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x)
  const angleDegrees = angleRadians * (180 / Math.PI)
  return angleDegrees
}

export const getDegrees = (
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  pos: number,
) => {
  const min = 0
  const max = 360
  let angleDegrees = getAngleDegrees(p1, p2)
  angleDegrees = angleDegrees + pos
  const wrapped = wrapAround(angleDegrees, [min, max])
  return wrapped
}

const RotationPoints_Internal: React.FC<{
  id: string
  window: WindowType
}> = ({ id, window }) => {
  const state = useStore([
    `setOneWindow`,
    `spaceMousePosition`,
    `selectedWindow`,
  ])

  const centerPoint = React.useMemo(
    () => ({
      y: window.y + window.height / 2,
      x: window.x + window.width / 2,
    }),
    [window.x, window.y, window.width, window.height],
  )

  const rotationsPointToDegrees: Record<RotationPoint, number> = React.useMemo(
    () => ({
      topLeft: -getAngleDegrees({ x: window.x, y: window.y }, centerPoint),
      topRight: -getAngleDegrees(
        { x: window.x + window.width, y: window.y },
        centerPoint,
      ),
      bottomRight: -getAngleDegrees(
        { x: window.x + window.width, y: window.y + window.height },
        centerPoint,
      ),
      bottomLeft: -getAngleDegrees(
        { x: window.x, y: window.y + window.height },
        centerPoint,
      ),
    }),
    [centerPoint, window.x, window.y, window.width, window.height],
  )

  const onDrag = (
    e: DraggableEvent,
    data: { deltaX: number; deltaY: number },
    pos: RotationPoint,
  ) => {
    if (!(e instanceof MouseEvent)) return

    const mouse = {
      x: state.spaceMousePosition.x,
      y: state.spaceMousePosition.y,
    }
    const degrees = getDegrees(mouse, centerPoint, rotationsPointToDegrees[pos])
    state.setOneWindow(id, { rotation: degrees })
  }

  if (state.selectedWindow !== id) return null

  return (
    <div className={style.wrapper}>
      {ROTATION_POINTS.map((pos) => {
        return (
          <DraggableCore key={pos} onDrag={(e, data) => onDrag(e, data, pos)}>
            <div className={joinClasses(style[pos], style.point)} />
          </DraggableCore>
        )
      })}
    </div>
  )
}

export const RotationPoints = React.memo(RotationPoints_Internal)
