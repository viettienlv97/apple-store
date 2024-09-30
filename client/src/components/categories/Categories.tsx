import { FC } from 'react'

const CATE = {
  ALL: 'all',
  IPHONE: 'iphone',
  IPAD: 'ipad',
  WATCH: 'watch',
  AIRPOD: 'airpod',
  MAC: 'macbook',
  MOUSE: 'mouse',
  KEYBOARD: 'keyboard',
  OTHER: 'other'
}

type Props = {
  selectedCategory: string
  onSelectCategory: (cate: string) => void
}

const Categories: FC<Props> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div>
      <h5 className='lato-regular-italic fw-bold mb-4'>CATEGORIES</h5>
      <h6 className='lato-regular-italic fw-bold bg-black text-light py-2 px-4'>
        APPLE
      </h6>
      <ul className='list-unstyled'>
        <li className='lato-regular-italic px-4 py-1'>
          <span
            role='button'
            className={`navlink ${
              selectedCategory === CATE.ALL ? 'active' : undefined
            }`}
            onClick={() => onSelectCategory(CATE.ALL)}
          >
            All
          </span>
        </li>
        <h6 className='lato-regular-italic fw-bold bg-light text-black py-2 px-4'>
          IPHONE & MAC
        </h6>
        <li className='lato-regular-italic px-4 py-1'>
          <span
            role='button'
            className={`navlink ${
              selectedCategory === CATE.IPHONE ? 'active' : undefined
            }`}
            onClick={() => onSelectCategory(CATE.IPHONE)}
          >
            iPhone
          </span>
        </li>
        <li className='lato-regular-italic px-4 py-1'>
          <span
            role='button'
            className={`navlink ${
              selectedCategory === CATE.IPAD ? 'active' : undefined
            }`}
            onClick={() => onSelectCategory(CATE.IPAD)}
          >
            iPad
          </span>
        </li>
        <li className='lato-regular-italic px-4 py-1'>
          <span
            role='button'
            className={`navlink ${
              selectedCategory === CATE.MAC ? 'active' : undefined
            }`}
            onClick={() => onSelectCategory(CATE.MAC)}
          >
            Macbook
          </span>
        </li>
        <h6 className='lato-regular-italic fw-bold bg-light text-black py-2 px-4'>
          WIRELESS
        </h6>
        <li className='lato-regular-italic px-4 py-1'>
          <span
            role='button'
            className={`navlink ${
              selectedCategory === CATE.AIRPOD ? 'active' : undefined
            }`}
            onClick={() => onSelectCategory(CATE.AIRPOD)}
          >
            Airpod
          </span>
        </li>
        <li className='lato-regular-italic px-4 py-1'>
          <span
            role='button'
            className={`navlink ${
              selectedCategory === CATE.WATCH ? 'active' : undefined
            }`}
            onClick={() => onSelectCategory(CATE.WATCH)}
          >
            Watch
          </span>
        </li>
        <h6 className='lato-regular-italic fw-bold bg-light text-black py-2 px-4'>
          OTHER
        </h6>
        <li className='lato-regular-italic px-4 py-1'>
          <span
            role='button'
            className={`navlink ${
              selectedCategory === CATE.MOUSE ? 'active' : undefined
            }`}
            onClick={() => onSelectCategory(CATE.MOUSE)}
          >
            Mouse
          </span>
        </li>
        <li className='lato-regular-italic px-4 py-1'>
          <span
            role='button'
            className={`navlink ${
              selectedCategory === CATE.KEYBOARD ? 'active' : undefined
            }`}
            onClick={() => onSelectCategory(CATE.KEYBOARD)}
          >
            Keyboard
          </span>
        </li>
        <li className='lato-regular-italic px-4 py-1'>
          <span
            role='button'
            className={`navlink ${
              selectedCategory === CATE.OTHER ? 'active' : undefined
            }`}
            onClick={() => onSelectCategory(CATE.OTHER)}
          >
            Other
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Categories
