import { useState } from 'react'

type ButtonProps = {

}

export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props} />
  )
}
