import { useRef } from 'react';
import { Repo } from '../Pages/Profile'
import '../App.css'

interface ModalProps extends Repo {
    onClose: () => void;
}

export function Modal({ onClose, name, html_url, description, language, visibility }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <div onClick={handleCloseModal}
        ref={modalRef}  className="m-5 rounded-xl p-7 custom-shadow flex flex-col justify-center items-center bg-white fixed inset-0 z-40 top-[70px] ">
            <div className="w-full absolute top-0 left-0">
                <h1 className="font-bold text-4xl p-2 my-4 mx-10 text-gray-800">Especificações</h1>
            </div>
            <div className="bg-white rounded-lg p-6 pointer-events-auto custom-shadow w-2/4 max-lg:w-2/3">

                <button onClick={onClose} className=' text-slate-400 font-bold text-2xl float-right hover:text-black'>&times;</button>
                <h1 className="p-2 text-gray-800 font-medium text-2xl">Nome: {name}</h1>
                <hr/>
                <div className="p-2 my-4 rounded-sm bg-neutral-100">
                    <p className="text-slate-400">Linguagem</p>
                    <p>{language}</p>
                </div>
                <div className="p-2 my-4 rounded-sm bg-neutral-100">
                    <p className="ext-slate-400 ">Visibilidade</p>
                    <p className="ext-gray-800">{visibility}</p>
                </div>
                <div className="p-2 my-4 rounded-sm bg-neutral-100">
                    <p className="ext-slate-400 ">Link</p>
                    <a className="text-gray-800 text-ellipsis" href={html_url}>{html_url}</a>
                </div>
                <div className="p-2 my-4 rounded-sm bg-neutral-100">
                    <p className="text-slate-400">Descrição</p>
                    <p className="text-gray-800">{description}</p>
                </div>
            </div>
        </div>

    )
}