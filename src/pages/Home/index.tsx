import React, { useEffect } from 'react';

import { ConteinerBody, ConteinerList, ListItem } from './style';

import bandsList from '../../data/bands.json';
import api from '../../services/api';

interface BandType {
    id: string;
    name: string;
}

const Home: React.FC = () => {
    const [bands, setBands] = React.useState<BandType[]>([]);

    const getBandDetails = async (id: string) => {
        const response = await api(`/bands/details/${id}`);
        return response.data;
    }

    useEffect(() => {
        setBands(bandsList.bands);
    }, []);

    return (
        <ConteinerBody>
            <h1>
                Lista de bandas
            </h1>

            <ConteinerList>
                {bands.map((band: BandType) => (
                    <ListItem key={band.id}>
                        <span>{band.name}</span>
                        <button onClick={e => { e.preventDefault(); getBandDetails(band.id) }} style={{ width: '80px', height: '30px' }}>Detalhes</button>
                    </ListItem>
                ))}
            </ConteinerList>

        </ConteinerBody>
    );
};

export default Home;
