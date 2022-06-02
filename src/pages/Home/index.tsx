import React, { useEffect } from 'react';

import { ConteinerBody, ConteinerContent, ConteinerList, ListItem } from './style';

import bandsList from '../../data/bands.json';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Band from '../Band';
import { BandDTO } from '../../types/BandDTO';

const Home: React.FC = () => {
    const [bands, setBands] = React.useState<BandDTO[]>([]);
    const [band, setBand] = React.useState<BandDTO | null>(null);

    useEffect(() => {
        setBands(bandsList.bands);
    }, []);

    return (
        <ConteinerBody>
            <h1>
                Lista de bandas
            </h1>

            <ConteinerContent>

                <ConteinerList>
                    {bands.map((band: BandDTO) => (
                        <ListItem key={band.id}>
                            <span>{band.name}</span>
                            <button onClick={e => { e.preventDefault(); setBand(band) }} style={{ width: '80px', height: '30px' }}>Detalhes</button>
                        </ListItem>
                    ))}
                </ConteinerList>

                <div>
                    {band ? <Band band={band} /> : <span>Selecione uma banda</span>}
                </div>
            </ConteinerContent>
        </ConteinerBody>
    );
};

export default Home;
