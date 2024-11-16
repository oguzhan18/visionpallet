import { motion } from 'framer-motion'
import React from 'react'

import { joinClasses } from '@/utils/joinClasses'

import style from './TopBarModal.module.scss'

const Modal: React.FC<{
  onClose: () => void
  children: React.ReactNode
  modalClassName?: string
}> = ({ children, onClose, modalClassName }) => {
  return (
    <motion.div className={`modalContainer`}>
      <div
        className={`modalBackdrop`}
        style={{
          opacity: 0,
        }}
        onClick={() => onClose()}
      />
      <motion.div
        className={joinClasses(`modal`, modalClassName)}
        initial={{ opacity: 0, y: `-50%` }}
        animate={{
          opacity: 1,
          y: `0%`,
          transition: {
            type: `spring`,
            stiffness: 500,
            damping: 25,
          },
        }}
        exit={{ opacity: 0, y: `-100%` }}
        transition={{
          type: `spring`,
          stiffness: 500,
          damping: 50,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

const Content: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return <div className={joinClasses(style.content, className)}>{children}</div>
}

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: () => void
    children: React.ReactNode
    className?: string
  }
> = ({ onClick, children, className, ...props }) => {
  return (
    <button
      className={joinClasses(style.button, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

const Header: React.FC<{
  title: string
  children?: React.ReactNode
  className?: string
}> = ({ title, children, className }) => {
  return (
    <div className={joinClasses(style.header, className)}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

const exports = {
  Container: Modal,
  Header,
  Button,
  Content,
}
export default exports
