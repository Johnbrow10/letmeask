import { ButtonHTMLAttributes } from 'react'

// Herdar todos as propriedades do botao do html quando importar esssa fucntion
type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: buttonProps) {


  return (
    <div>
      <button className="button" {...props} />
    </div>
  )
}