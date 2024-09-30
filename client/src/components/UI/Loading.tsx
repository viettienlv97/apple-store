const Loading = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      width='28'
      height='28'
      style={{
        shapeRendering: 'auto',
        display: 'block',
        background: 'rgb(255, 255, 255, 0)'
      }}
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <g>
        <circle
          strokeDasharray='188.49555921538757 64.83185307179586'
          r='40'
          strokeWidth='5'
          stroke='#ffffff'
          fill='none'
          cy='50'
          cx='50'
        >
          <animateTransform
            keyTimes='0;1'
            values='0 50 50;360 50 50'
            dur='1s'
            repeatCount='indefinite'
            type='rotate'
            attributeName='transform'
          ></animateTransform>
        </circle>
        <g></g>
      </g>
    </svg>
  )
}

export default Loading
