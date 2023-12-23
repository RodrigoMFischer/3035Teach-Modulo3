

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


interface PokeCardProps {
  key: number;
  name: string;
  image: string;
  element: string;
  id: number;
  url: string;
};

const elementColors: Record<string, string> = {
  normal: '#C5C1A5',
  fire: '#FFB67D',
  water: '#79A7FF',
  electric: '#FFDE68',
  grass: '#B0E0B0',
  ice: '#A3E7FD',
  fighting: '#E6806D',
  poison: '#C183C1',
  ground: '#E0C468',
  flying: '#C6B7F5',
  psychic: '#FF88A7',
  bug: '#C6D16E',
  rock: '#D1C08A',
  ghost: '#A683B0',
  dragon: '#7B63A3',
  dark: '#8D847D',
  steel: '#D1D1E0',
  fairy: '#FFAAD5'  
};

const defaultBackgroundColor = '#e3e3e3';

const CardContainer = styled.button<Pick<PokeCardProps, 'element'>>`
background-color: ${(props) => elementColors[props.element] || defaultBackgroundColor};
width: 300px;
height: 250px;
margin: 20px;
padding: 15px; 
border: 1px solid #ccc;
border-radius: 8px;
text-align: center;
transition: transform 0.3s ease, box-shadow 0.3s ease; 
position: relative;
cursor: pointer;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
`;

const CardTop = styled.div`
  height: 70%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-size: 1em;
  color: #333;
`;

const CardNumber = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 0.8em;
  font-weight: bold;
  color: #555;
`;

const Element = styled.h1`
  text-transform: capitalize;
  font-size: 1em;
  color: #333;
`;

const PokeCard: React.FC<PokeCardProps> = ({ name, image, id, element }) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/pokemon/${id}`)} element={element}>
      <CardTop >
        <CardNumber>#{id}</CardNumber>
        <Image src={image} alt={name} />
      </CardTop>
      <Title>{name}</Title>
      <Element>{element}</Element>
    </CardContainer>
  );
};

export default PokeCard;