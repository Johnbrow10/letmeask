import { ButtonHTMLAttributes } from 'react'

// Herdar todos as propriedades do botao do html quando importar esssa fucntion
type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: buttonProps) {


  return (
    <div>
      <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
    </div>
  )
}