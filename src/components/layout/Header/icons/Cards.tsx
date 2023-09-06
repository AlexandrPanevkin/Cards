import { SVGProps, Ref, forwardRef, memo } from 'react'

const Cards = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="442.000000pt"
    height="195.000000pt"
    viewBox="0 0 442.000000 195.000000"
    preserveAspectRatio="xMidYMid meet"
    ref={ref}
    {...props}
  >
    <g
      transform="translate(0.000000,195.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M0 975 l0 -975 2210 0 2210 0 0 975 0 975 -2210 0 -2210 0 0 -975z
m2187 769 c35 -3 67 -12 74 -20 9 -11 8 -52 -5 -182 -9 -92 -21 -171 -26 -176
-10 -10 -202 8 -221 20 -21 13 9 350 33 365 7 5 29 7 48 5 19 -3 63 -8 97 -12z
m-187 -51 c0 -16 -7 -88 -15 -161 -7 -73 -11 -140 -8 -148 6 -16 23 -21 118
-33 l70 -8 -97 -2 c-87 -1 -98 1 -108 18 -15 29 -13 334 2 349 21 21 38 14 38
-15z m-627 -142 c250 -1 257 -2 257 -21 0 -20 -7 -20 -640 -20 l-640 0 0 -550
0 -550 1750 0 1750 0 0 550 0 550 -640 0 c-633 0 -640 0 -640 20 0 11 3 20 8
20 44 1 850 2 1055 1 l267 -1 0 -590 0 -590 -122 -1 c-694 -3 -3461 0 -3464 4
-9 8 -10 1177 -1 1180 4 1 186 1 405 0 218 -1 513 -2 655 -2z m197 -479 c33
-27 18 -46 -20 -27 -61 32 -120 -14 -120 -92 0 -92 64 -142 127 -98 18 13 22
13 33 0 10 -12 6 -18 -22 -35 -18 -11 -43 -20 -56 -20 -36 0 -81 28 -102 63
-39 64 -18 181 39 212 37 20 94 18 121 -3z m290 -114 c25 -72 47 -136 49 -141
2 -5 -7 -7 -20 -5 -18 2 -25 12 -32 41 l-9 37 -54 0 -53 0 -11 -40 c-8 -30
-16 -40 -31 -40 -13 0 -19 5 -17 13 3 6 24 69 47 140 37 111 45 127 64 127 19
0 28 -17 67 -132z m319 108 c33 -30 29 -89 -9 -118 l-29 -23 34 -55 c33 -54
34 -55 12 -58 -12 -2 -23 0 -24 5 -2 4 -17 29 -33 56 -23 36 -36 47 -55 47
-24 0 -25 -3 -25 -55 0 -48 -2 -55 -20 -55 -19 0 -20 7 -20 141 l0 141 74 -4
c55 -2 80 -8 95 -22z m276 10 c87 -37 101 -176 24 -241 -26 -21 -41 -25 -95
-25 l-64 0 0 140 0 140 50 0 c28 0 66 -6 85 -14z m341 -2 c18 -12 22 -20 14
-29 -9 -11 -16 -10 -40 1 -47 24 -99 0 -84 -39 3 -8 31 -26 63 -42 80 -38 99
-79 61 -128 -34 -43 -108 -47 -157 -9 -15 11 -20 22 -14 30 7 12 14 11 39 -2
40 -20 76 -20 97 0 26 26 14 47 -45 76 -30 14 -63 37 -73 49 -22 27 -16 66 15
92 26 22 91 22 124 1z"
      />
      <path
        d="M1787 1030 c-3 -8 -12 -36 -21 -62 l-15 -48 40 0 c45 0 45 3 19 75
-11 30 -20 44 -23 35z"
      />
      <path
        d="M2050 1004 l0 -57 40 6 c52 7 70 22 70 58 0 33 -27 49 -81 49 -29 0
-29 -1 -29 -56z"
      />
      <path d="M2360 950 l0 -110 34 0 c102 0 134 167 40 206 -72 30 -74 27 -74 -96z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(Cards)
const Memo = memo(ForwardRef)

export { Memo as Cards }
