import { useEffect, useState } from 'react';
import { Repo } from '../Pages/Profile'
import { Card } from './Card';

interface CardProps {
    repos: Repo[];
    setModalOpen: (index: number) => void;
}

export function Paginator({ repos, setModalOpen }: CardProps) {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);

    const handleResize = () => {
        setWindowSize(window.innerWidth);
        setCurrentPage(1);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {

        if (windowSize <= 1100) {
            setCardsPerPage(2);
        } else if (windowSize <= 1450) {
            setCardsPerPage(3);
        } else {
            setCardsPerPage(4);
        }
    }, [windowSize]);


    const maxPages = Math.ceil(repos?.length / cardsPerPage);

    const handleNextPage = () => {
        if (currentPage < maxPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const start = (currentPage - 1) * cardsPerPage;
    const end = currentPage * cardsPerPage;

    return (
        <div className="inline-flex flex-col gap-3">
            <div className="flex flex-row justify-end gap-2">
                <span>{currentPage} de {maxPages}</span>
                <button onClick={handlePrevPage} disabled={currentPage === 1}
                    className="rounded-md border border-gray-600 px-2 text-gray-600 disabled:border-gray-300 disabled:text-gray-300">
                    &lt;
                </button>
                <button onClick={handleNextPage} disabled={currentPage === maxPages}
                    className="rounded-md border border-gray-600 px-2 text-gray-600  disabled:border-gray-300 disabled:text-gray-300">
                    &gt;
                </button>
            </div>
            <div className="flex flex-row gap-8">
                {repos?.slice(start, end).map((current, index) => (
                    <Card
                        key={start + index}
                        setModalOpen={() => setModalOpen(start + index)}
                        index={start + index}
                        description={current.description}
                        link={current.html_url}
                    />
                ))}
            </div>
        </div>
    );
}

