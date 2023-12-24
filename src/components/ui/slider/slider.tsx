import { ChangeEvent } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderProps = {
  onValueChange: (values: [number, number]) => void
  minValue: number
  maxValue: number
  max?: number
  min?: number
  value: [number, number]
}

export const Slider = ({
  onValueChange,
  min = 0,
  max = 100,
  minValue,
  maxValue,
  value,
  ...props
}: SliderProps) => {
  return (
    <div className={s.container}>
      <input
        type="text"
        value={minValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onValueChange([+event.currentTarget.value, maxValue])
        }}
        className={s.value}
      />
      <SliderRadix.Root
        value={value}
        className={s.sliderRoot}
        defaultValue={[minValue, maxValue]}
        min={min}
        max={max}
        step={1}
        onValueChange={onValueChange}
        {...props}
      >
        <SliderRadix.Track className={s.sliderTrack}>
          <SliderRadix.Range className={s.sliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.sliderThumb} />
        <SliderRadix.Thumb className={s.sliderThumb} />
      </SliderRadix.Root>
      <input
        type="text"
        value={maxValue}
        className={s.value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onValueChange([minValue, +event.currentTarget.value])
        }}
      />
    </div>
  )
}
