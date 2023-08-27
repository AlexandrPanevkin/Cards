import { SVGProps, Ref, forwardRef, memo } from 'react'

const DisabledCheckboxSVG = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="26"
    height="26"
    viewBox="3.5 3.5 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g id="Property 1=Disabled Selected">
      <rect id="Vector" x="4" y="6" width="16" height="12" fill="#DCDAE0" />
      <path
        id="Vector_2"
        d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
        fill="#808080"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(DisabledCheckboxSVG)
const Memo = memo(ForwardRef)

export { Memo as DisabledCheckboxSVG }