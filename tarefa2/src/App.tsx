import React, { useState } from 'react';
import './App.css';

const movies = [
  {
    "id": 1,
    "nome": "Homem Aranha",
    "genero": "Ação",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Spide-Man_Poster.jpg/250px-Spide-Man_Poster.jpg"
  },
  {
    "id": 2,
    "nome": "Super Marios Bros. - O Filme",
    "genero": "Animação",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/4/44/The_Super_Mario_Bros._Movie_poster.jpg"
  },
  {
    "id": 3,
    "nome": "Luther: O Cair da Noite",
    "genero": "Drama",
    "imagem": "https://media.fstatic.com/87P3OkthYv-KtfdxMSwqH-eSB2g=/322x478/smart/filters:format(webp)/media/movies/covers/2023/01/321313250_699300278290829_1479258747461748433_n.jpg"
  },
  {
    "id": 4,
    "nome": "O Beco do Pesadelo",
    "genero": "Suspense",
    "imagem": "https://br.web.img3.acsta.net/pictures/21/11/22/17/54/4745407.jpg"
  },
  {
    "id": 5,
    "nome": "Guardiões da Galáxia",
    "genero": "Aventura",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg"
  },
  {
    "id": 6,
    "nome": "Tudo em Todo o Lugar ao Mesmo Tempo",
    "genero": "Comédia",
    "imagem": "https://cinepop.com.br/wp-content/uploads/2022/06/tudoemtodolugar_2.jpg"
  }
]

function App() {
  const [search, setSearch] = useState('');
  const filteredMovies = movies.filter( (current) => {
    return current.nome.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <div>
      <div className='input-container'>
        
        <input type='text'
          id='search'
          value={search}
          onChange={ (event) => setSearch(event.target.value)}
          placeholder='Pesquise o nome do filme...' />
      </div>

      <table>
        
        <tbody id='body'>
          {filteredMovies.map((movie) => (
            <tr>
              <td>
                <img className='image' src={movie.imagem} alt={movie.nome} />
              </td>
              <tr>
                <td id='id'> ID: {movie.id}</td>
              </tr>
              <tr>
                <td id='movie-name'>{movie.nome}</td>
              </tr>
              <tr>
                <td id='gender'>Genero: {movie.genero}</td>
              </tr>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;