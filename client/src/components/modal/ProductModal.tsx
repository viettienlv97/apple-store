import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './ProductModal.scss'

type ProductModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const ProductModal: FC<ProductModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return undefined

  return createPortal(
    <div
      className='modal-overlay'
      onClick={onClose}
    >
      <div
        className='content'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal')!
  )
}

export default ProductModal
