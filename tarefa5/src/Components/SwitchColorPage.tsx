import { FC } from 'react'
import Switch from './Switch'

const SwitchColorPage: FC = () => {
  return (
    <div className='font-mono flex flex-col justify-center items-center h-screen dark:bg-zinc-900 dark:text-white'>
      <h1 className='text-2xl'>Módulo 3 - Deasfio 5</h1>
      <h2>Utilizando conceitos de context api, crie uma página com um botão que alterne entre o modo escuro e claro.</h2>
      <h3>Context API + Tailwind</h3>
      <div className='mt-2'>
        <Switch />
      </div>
    </div>
  )
}

export default SwitchColorPage;
