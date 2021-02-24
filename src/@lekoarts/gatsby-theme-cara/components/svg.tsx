/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />
        {` `}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 42`,
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </React.Fragment>
    ),
    viewBox: `0 0 30 44.58`,
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
      <React.Fragment>
        <path d="M625.2,445.4c-208.4,0-416.8,0-625.2,0C0,297,0,148.5,0,0c208.4,0,416.7,0,625.2,0
          C625.2,148.5,625.2,296.9,625.2,445.4z M313,188.4c-0.7-1.1-1.2-1.8-1.6-2.6c-28-48.4-55.9-96.9-83.9-145.3
          c-5.8-10-11.5-20.1-17.4-30.1c-1.3-2.3-2.9-4.4-4.5-6.5c-1.4-1.9-3.4-2.7-5.9-2.6c-4.3,0.2-8.2,1.4-11.7,3.7
          c-3.1,2.1-4,4.5-2.9,8.1c0.7,2,1.6,4,2.7,5.9c36.3,64.2,72.6,128.4,108.9,192.6c0.5,0.8,0.9,1.7,1.4,2.5c-0.5,0.9-0.9,1.6-1.3,2.4
          c-11.7,20.4-23.5,40.7-35.2,61.1c-10.6,18.4-21.2,36.8-31.8,55.2c-2.1,3.7-4.5,7.2-7.7,10c-4.7,4.2-9.4,8.5-14.4,12.3
          c-27.1,20.5-57.4,27.3-90.8,20.5c-12.3-2.5-24.6-5-36.9-7.3c-16-3-32.1-5.8-48.1-8.5c-3.5-0.6-7.1-1-10.7-1
          c-4.7,0-8.8,1.7-11.8,5.4c-1.3,1.7-2.6,3.5-3.4,5.5c-3.7,9-5.7,18.3-4.5,28.1c0.9,7.3,4.1,13.4,9.7,18.1c4.4,3.7,9.6,6.2,15.1,7.4
          c9,2,18.1,3.8,27.3,5.4c17.9,3.1,36,4.7,54.1,5.6c3.8,0.2,7.7,0.3,11.5,0.1c9.4-0.6,18.8-1.4,28.2-2.4c9.5-1,19.1-2,28.5-3.4
          c9.8-1.5,19-4.9,27.4-10.3c10.3-6.6,17.8-15.6,23.6-26.3c6.3-11.5,12.4-23.1,18.9-34.5c21.9-38.5,43.9-76.9,65.9-115.3
          c0.3-0.5,0.7-1,1.2-1.8c0.6,1,1,1.7,1.5,2.4c5.1,9,10.3,18,15.4,27.1c18.8,32.9,37.6,65.8,56.3,98.7c4.7,8.3,9.1,16.7,13.7,25
          c9.5,17.3,23.6,28.7,42.7,33.9c9.5,2.6,19.3,3.5,29.1,4.5c6.4,0.7,12.9,1.3,19.3,1.7c8.8,0.6,17.5,1.9,26.3,1.2
          c11.3-0.9,22.7-1.5,33.9-2.6c14.6-1.5,29.1-4,43.5-7.1c6.3-1.3,12.4-3.2,17.8-6.9c6.4-4.3,10.6-10.3,11.8-17.9
          c1.2-7.3,0.7-14.6-1.2-21.8c-1.1-4.2-2.4-8.3-4.8-12c-2.7-4-6.3-6.4-11.1-7.1c-3.4-0.5-6.7-0.2-10,0.4c-11.3,2-22.5,3.9-33.7,6
          c-14.9,2.7-29.8,5.5-44.7,8.4c-8.8,1.7-17.5,3.6-26.5,4.2c-15.4,1-30.3-1.2-44.7-6.6c-15.3-5.8-28.6-14.9-40.6-25.8
          c-4.6-4.1-8.3-8.8-11.3-14.1c-22.1-38.5-44.3-77-66.5-115.5c-0.4-0.8-0.9-1.5-1.3-2.3c0.4-0.8,0.8-1.5,1.2-2.2
          c16.6-29.4,33.3-58.8,49.9-88.2c19.9-35.2,39.8-70.4,59.7-105.6c1-1.8,1.9-3.7,2.6-5.7c1.1-3.4,0.2-5.9-2.8-7.9
          c-3.4-2.4-7.3-3.5-11.5-3.8c-2.7-0.2-4.9,0.7-6.5,2.8c-1.7,2.2-3.3,4.5-4.7,6.9C382,68.8,348.4,127.1,314.8,185.3
          C314.3,186.2,313.7,187.1,313,188.4z M354.6,393.7c-0.6,0-1,0-1.4,0.1c-2.1,0.6-4.1,1.4-6.2,1.9c-5.5,1.5-11,3.2-16.6,4.3
          c-3.7,0.7-7.6,0.8-11.4,0.9c-6.2,0.1-12.5-0.1-18.7,0.1c-3.2,0.1-6.3-0.4-9.4-1.1c-7-1.5-13.8-3.3-20.5-5.7
          c-0.8-0.3-1.6-0.5-2.6-0.7c-0.1,0.5-0.2,0.8-0.2,1.1c0.2,4.6,0.3,9.2,0.6,13.9c0.2,3.4,2.2,5.8,5.3,7.1c8.3,3.4,16.9,5.4,25.8,5.5
          c8.8,0,17.6-0.4,26.3-0.4c8,0,15.5-2.2,22.8-5c3-1.1,5.4-3.3,5.5-7.1c0.1-3,0.6-6,0.8-9C354.7,397.6,354.6,395.7,354.6,393.7z
          M308.9,373.9c-3,0-5.9-0.4-8.5,0.1c-7,1.4-14,3.1-21,4.8c-2.2,0.5-4.3,1.4-6.3,2.3c-3.9,1.8-4.3,5.4-0.8,7.9
          c3.7,2.6,7.7,4.5,12.3,5.1c2.9,0.4,5.9,0.8,8.8,1.2c7.1,0.9,14.1,1.8,21.3,1.6c10.2-0.2,20.2-2,30-4.6c1.5-0.4,3.1-0.8,4.6-1.5
          c1.9-0.9,3.5-2.3,3.6-4.7c0.1-2.6-0.9-4.5-3.1-5.8c-1.2-0.7-2.6-1.3-4-1.6c-2.5-0.6-5-1.2-7.5-1.6c-4.6-0.7-9.3-1.3-14-2.1
          C319,374.3,313.9,373.5,308.9,373.9z"/>
        <path d="M313,188.4c0.8-1.3,1.3-2.2,1.8-3.1C348.4,127.1,382,68.8,415.7,10.5c1.4-2.4,3-4.7,4.7-6.9c1.6-2.2,3.8-3,6.5-2.8
          c4.2,0.3,8,1.4,11.5,3.8c3,2,3.9,4.5,2.8,7.9c-0.6,2-1.5,3.9-2.6,5.7c-19.9,35.2-39.8,70.4-59.7,105.6
          c-16.6,29.4-33.3,58.8-49.9,88.2c-0.4,0.7-0.8,1.4-1.2,2.2c0.4,0.8,0.8,1.5,1.3,2.3c22.2,38.5,44.4,77,66.5,115.5
          c3.1,5.3,6.8,10,11.3,14.1c12.1,11,25.3,20,40.6,25.8c14.4,5.5,29.3,7.6,44.7,6.6c9-0.6,17.7-2.5,26.5-4.2
          c14.9-2.9,29.8-5.7,44.7-8.4c11.2-2.1,22.5-4,33.7-6c3.3-0.6,6.6-0.9,10-0.4c4.8,0.7,8.5,3.1,11.1,7.1c2.4,3.7,3.7,7.8,4.8,12
          c2,7.2,2.4,14.5,1.2,21.8c-1.2,7.6-5.4,13.5-11.8,17.9c-5.4,3.7-11.5,5.5-17.8,6.9c-14.4,3.1-28.9,5.6-43.5,7.1
          c-11.3,1.1-22.6,1.7-33.9,2.6c-8.8,0.7-17.6-0.6-26.3-1.2c-6.5-0.5-12.9-1.1-19.3-1.7c-9.8-1-19.6-1.9-29.1-4.5
          c-19.1-5.2-33.2-16.6-42.7-33.9c-4.6-8.3-9-16.8-13.7-25c-18.7-32.9-37.5-65.8-56.3-98.7c-5.1-9-10.3-18-15.4-27.1
          c-0.4-0.7-0.9-1.4-1.5-2.4c-0.5,0.8-0.9,1.3-1.2,1.8c-22,38.4-44,76.8-65.9,115.3c-6.5,11.4-12.6,22.9-18.9,34.5
          c-5.8,10.6-13.3,19.7-23.6,26.3c-8.4,5.4-17.6,8.8-27.4,10.3c-9.5,1.5-19,2.5-28.5,3.4c-9.4,1-18.8,1.7-28.2,2.4
          c-3.8,0.3-7.7,0.1-11.5-0.1c-18.1-0.8-36.2-2.4-54.1-5.6c-9.1-1.6-18.2-3.4-27.3-5.4c-5.6-1.2-10.7-3.7-15.1-7.4
          c-5.7-4.7-8.8-10.9-9.7-18.1C0.3,388,2.3,378.7,6,369.7c0.8-2,2.1-3.8,3.4-5.5c3-3.7,7.1-5.4,11.8-5.4c3.6,0,7.2,0.4,10.7,1
          c16.1,2.8,32.1,5.6,48.1,8.5c12.3,2.3,24.6,4.8,36.9,7.3c33.3,6.7,63.6,0,90.8-20.5c5-3.8,9.7-8.1,14.4-12.3
          c3.2-2.8,5.6-6.4,7.7-10c10.6-18.4,21.2-36.8,31.8-55.2c11.7-20.4,23.5-40.7,35.2-61.1c0.4-0.8,0.8-1.5,1.3-2.4
          c-0.5-0.9-0.9-1.7-1.4-2.5C260.5,147.4,224.2,83.2,187.9,19c-1.1-1.9-2-3.8-2.7-5.9c-1.2-3.5-0.3-6,2.9-8.1
          c3.5-2.4,7.4-3.5,11.7-3.7c2.5-0.1,4.4,0.7,5.9,2.6c1.6,2.1,3.2,4.2,4.5,6.5c5.9,10,11.6,20.1,17.4,30.1
          c27.9,48.4,55.9,96.9,83.9,145.3C311.8,186.6,312.3,187.3,313,188.4z"/>
        <path d="M354.6,393.7c0,2,0.1,3.9,0,5.8c-0.2,3-0.8,6-0.8,9c-0.1,3.8-2.5,6-5.5,7.1c-7.3,2.8-14.8,5-22.8,5
          c-8.8-0.1-17.6,0.4-26.3,0.4c-8.9,0-17.6-2-25.8-5.5c-3.1-1.3-5.1-3.7-5.3-7.1c-0.3-4.6-0.4-9.2-0.6-13.9c0-0.3,0.1-0.6,0.2-1.1
          c0.9,0.3,1.8,0.4,2.6,0.7c6.7,2.4,13.6,4.2,20.5,5.7c3.1,0.7,6.2,1.2,9.4,1.1c6.2-0.2,12.5,0.1,18.7-0.1c3.8-0.1,7.7-0.1,11.4-0.9
          c5.6-1.1,11.1-2.8,16.6-4.3c2.1-0.6,4.1-1.3,6.2-1.9C353.6,393.7,354,393.7,354.6,393.7z"/>
        <path d="M308.9,373.9c5.1-0.5,10.2,0.3,15.3,1.2c4.6,0.8,9.3,1.3,14,2.1c2.5,0.4,5,0.9,7.5,1.6c1.4,0.4,2.7,0.9,4,1.6
          c2.2,1.2,3.3,3.2,3.1,5.8c-0.1,2.4-1.7,3.7-3.6,4.7c-1.4,0.7-3,1.1-4.6,1.5c-9.8,2.6-19.8,4.4-30,4.6c-7.1,0.2-14.2-0.7-21.3-1.6
          c-2.9-0.4-5.9-0.8-8.8-1.2c-4.6-0.6-8.6-2.4-12.3-5.1c-3.5-2.5-3.1-6,0.8-7.9c2-0.9,4.1-1.8,6.3-2.3c7-1.7,14-3.5,21-4.8
          C303,373.5,305.9,373.9,308.9,373.9z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: `0 0 100 100`,
  },
}

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const SVG = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG
