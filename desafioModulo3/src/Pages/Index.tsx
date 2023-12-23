import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import { useLoading } from '../Context/LoadingContext'
import { getUserData } from '../Services/gitHub.service'

import { Spinner } from '../Components/Spinner';
import '../App.css'

function Index() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>('');
  const [isUserFound, setIsUserFound] = useState(true)

  const { isLoading, setLoadingState } = useLoading();

  const handleCloseButton = () => {
    setIsUserFound(true)
  }

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingState(true);
    if (userName === '') {
      setIsUserFound(false)
      setLoadingState(false);
    } else {
      const userData = await getUserData(userName);
      if (userData === null) {
        setIsUserFound(false)
        setLoadingState(false);
      } else {
        setLoadingState(false);
        navigate(`/profile/${userName}`)
      }
    }
  };

  return (
    <>
      <main className=" flex flex-row gap-4 h-screen">
        <div className=" w-2/3 bg-blue-900 flex justify-center items-center max-lg:w-1/2">
          <img src="/wtech.png" alt='Logo Wtech' className=' w-1/3 ' />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center w-1/3 max-lg:w-1/2">
            <Spinner />
          </div>
        ) : (
          <div className=" p-2 w-1/3 flex flex-col justify-center items-center max-lg:w-1/2">
            {isUserFound ? (
              <h1 className=" font-bold text-4xl p-2 m-4 text-gray-800">Entrar</h1>
            ) : (
              <div className="h-24 w-full relative bg-orange-400 rounded-3xl">
                <div>
                  <div className="circle1"></div>
                  <div className="circle2"></div>
                  <div className="circle3"></div>
                  <div className="circle4"><span className="flex justify-center items-center text-4xl text-white pt-1">&times;</span></div>
                </div>
                <div className="h-full ml-28 flex  flex-col justify-center relative">
                  <button onClick={handleCloseButton} className="text-white font-bold text-2xl hover:text-black mb-6 absolute right-4">&times;</button>
                  <p className="text-white text-lg font-bold max-lg:text-xs">Ops!</p>
                  <span className="text-white text-xs">Não conseguimos identificar sua conta.</span>
                </div>
              </div>
            )}
            <form className="flex flex-col w-4/5 text-sm m-4" onSubmit={handleFormSubmit}>
              <label htmlFor="userName" className="py-2">Usuário</label>
              <input className={`max-md:text-xs p-2 rounded-sm border border-gray-300 mb-4`}
                type="text"
                id="userName"
                name="userName"
                placeholder="Digite aqui seu usuário do Github"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <button type="submit"
                className="bg-blue-900 text-center text-white font-medium rounded-md p-2 my-4">Entrar</button>
            </form>
          </div>
        )}
      </main>
    </>
  )
}

export default Index;
