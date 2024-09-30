import { FC } from 'react'

type ShippingContentProps = {
  title: string
  desc: string
  className: string
}

const ShippingContent: FC<ShippingContentProps> = ({
  title,
  desc,
  className
}) => {
  return (
    <div className={className}>
      <h5>
        <i>{title}</i>
      </h5>
      <span className='text-gray lato-light-italic'>{desc}</span>
    </div>
  )
}

export default ShippingContent
