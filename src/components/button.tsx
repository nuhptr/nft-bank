import clsx from 'clsx'

interface ButtonProps {
  styles?: string
  name: string
  onClick?: () => void
}

export default function Button({ styles, name, onClick }: ButtonProps) {
  return (
    <button
      className={clsx(
        'py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]',
        styles
      )}
      type='button'
      onClick={onClick}>
      {name}
    </button>
  )
}
