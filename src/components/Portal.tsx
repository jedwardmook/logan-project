import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode
  Component: React.ElementType
}

const Portal = ({Component, children}: PortalProps) => {
  const portalRoot = document.getElementById('portal-root')
  if (!portalRoot) return null;

  return createPortal(<Component>{children}</Component>, portalRoot);
}

export default Portal