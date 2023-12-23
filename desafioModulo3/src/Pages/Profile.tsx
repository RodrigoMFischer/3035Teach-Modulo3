import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { useLoading } from '../Context/LoadingContext'

import { getUserData, getUserRepos } from '../Services/gitHub.service'
import { Modal } from '../Components/modal';
import { Spinner } from '../Components/Spinner'
import { Paginator } from '../Components/Paginator'
import { Header } from '../Components/Header';

export interface Repo {
    name: string;
    description: string;
    html_url: string;
    language: string;
    visibility: string;
}

export interface UserData {
    avatar_url: string;
    repos_url: string;
    public_repos: number;
    name: string;
    bio: string;
    repos: Repo[];
}

const inicialUser = {
    avatar_url: '',
    repos_url: '',
    public_repos: 0,
    name: '',
    bio: '',
    repos: [],
}

function Profile() {
    const [user, setUser] = useState<UserData | null>(inicialUser)
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const [selectedRepository, setSelectedRepository] = useState<Repo | null>(null)

    const { isLoading, setLoadingState } = useLoading();

    const param = useParams<string>()

    const buildUserProfile = async (userName: string) => {
        setLoadingState(true);
        const userData = await getUserData(userName);
        const repos = await getUserRepos(userName);

        let reposDataToUse: Repo[] | null = null;
        if (repos) {
            reposDataToUse = repos.data.map((current: Repo) => {
                return {
                    name: current.name,
                    description: current.description,
                    html_url: current.html_url,
                    language: current.language,
                    visibility: current.visibility,
                }
            })
        }

        if (userData && reposDataToUse) {
            setUser({
                avatar_url: userData.data.avatar_url,
                repos_url: userData.data.repos_url,
                public_repos: userData.data.public_repos,
                name: userData.data.name,
                bio: userData.data.bio,
                repos: reposDataToUse,
            });
        } else {
            setUser(null);
        }
        setLoadingState(false)
    };

    useEffect(() => {
        if (param.profile) {
            buildUserProfile(param.profile);
        }
    }, [])

    const handleCloseModal = () => setModalOpen(false)

    const handleOpenModal = (index: number) => {
        if (user) {
            setSelectedRepository(user.repos[index]);
            setModalOpen(true);
            window.scrollTo({ top: 0});
        }
    }

    return (
        <>
            <Header />
            <div className="flex justify-center items-center bg-slate-100 ">
                <div className="m-6 inline-flex bg-white rounded-xl p-7 custom-shadow">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-screen">
                            <Spinner />
                        </div>
                    ) : user ? (
                        <div >
                            <div className={`${isModalOpen ? "blur" : ''}`}>
                                <h1 className="font-bold text-4xl p-2 mb-7 text-gray-800">Informações do Perfil</h1>

                                <div className="p-4 max-md:w-4/5 flex flex-row gap-6 w-3/4 rounded-xl border border-gray-200 h-48 items-center">
                                    <img src={user?.avatar_url} alt='user image' className=' h-40 rounded-xl m-4' />
                                    <div>
                                        <h2 className="text-slate-400">Nome</h2>
                                        <h2 className="text-gray-800 font-medium py-2">{user?.name}</h2>
                                        <h2 className="text-slate-400">Descrição</h2>
                                        <p className="text-gray-800 py-2">{user?.bio}</p>
                                    </div>
                                </div>

                                <h1 className="font-bold text-4xl p-2 my-7 text-gray-800">Repositórios</h1>

                                <div >
                                    <Paginator repos={user.repos} setModalOpen={handleOpenModal} />

                                </div>
                            </div>
                            {isModalOpen && (<Modal onClose={handleCloseModal}
                                name={selectedRepository!.name}
                                html_url={selectedRepository!.html_url}
                                description={selectedRepository!.description}
                                language={selectedRepository!.language}
                                visibility={selectedRepository!.visibility}
                            />)}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-screen text-4xl font-bold text-gray-800">
                            <p>Perfil não encontrado.</p>
                        </div>)}
                </div>
            </div>
        </>
    )

}

export default Profile;