import '../App.css'

interface CardProps {
    setModalOpen: () => void;
    index: number;
    description: string;
    link: string;
}

export function Card({ setModalOpen, index, description, link }: CardProps) {


    return (
        <div role="button" onClick={setModalOpen}
            className="flex flex-col  h-72 w-80 rounded-lg border-transparent custom-shadow divide-blue-600"
        >
            <h1 className="text-gray-800 font-medium m-6">Repositorio {index + 1}</h1>
            <hr className="w-full"/>
            <div className="bg-gray-50 h-16 rounded-lg p-2 m-6 font-normal text-justify overflow-hidden">
                <span className="text-slate-400">Link</span>
                <p className="truncate">{link}</p>
            </div>
            <div className="bg-gray-50 h-16 rounded-lg p-2 m-6 font-normal text-justify overflow-hidden">
                <span className="text-slate-400">Descrição</span>
                <p  className="truncate">{description}</p>
            </div>

        </div>
    )
}
