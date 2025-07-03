import './App.css'
import { FaCat } from "react-icons/fa";

function App() {

  return (
    <>
      <div className='bg-white w-screen h-15 flex items-center justify-center gap-2'>
        <FaCat className='text-purple-900 text-xl' />
        <div className='font-bold text-purple-900 text-xl'>DudaSys</div>
        <FaCat className='text-purple-900 text-xl' />
      </div>
      {/* alerta de gambiarra */}
      <div className='bg-purple-400 w-full h-[42.7vw] justify-items-center pt-48'>
        <div className='bg-white w-64 h-48 justify-items-center rounded-sm pt-6'>
          <div className='font-semibold'>Entrar na sua conta</div>
          <form action="https://getform.io/f/bkknzkeb" method="POST">
            <input
              className="border border-gray-500 rounded-[3px] w-48 h-8 mt-2 ml-8 focus:border-purple-500 focus:outline-none"
              type="email"
              name="email"
              placeholder=" Digite o email"
            />
            <input
              className="border border-gray-500 rounded-[3px] w-48 h-8 mt-0.5 ml-8 focus:border-purple-500 focus:outline-none"
              type="password"
              name="password"
              placeholder=" Digite a senha"
            />
            <div className='h-100px w-100px'>
              <button className='bg-purple-600 hover:bg-purple-500 text-white rounded-[3px] w-48 h-8 mt-2 ml-8' type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
