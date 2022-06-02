import React, { useEffect } from 'react';

import { Biography, Genre, ImageBand, NameBand, NumPlays } from './style';
import api from '../../services/api';
import { BandDetailsDTO, BandDTO } from '../../types/BandDTO';
import { ConteinerBand } from './style';

interface BandViewProps {
    band: BandDTO;
}

const Band: React.FC<BandViewProps> = ({ band }) => {

    const [bandDetails, setBandDetails] = React.useState<BandDetailsDTO | null>(null);

    const getBandDetails = async (id: string) => {
        const response = await api(`/bands/details/${id}`);
        setBandDetails(response.data);
    }

    useEffect(() => {
        getBandDetails(band.id);
    }, [band]);

    return (
        <ConteinerBand>
            <ImageBand><img src={bandDetails?.image}></img></ImageBand>
            <NameBand>{bandDetails?.name || ''}</NameBand>
            <Genre>{bandDetails?.genre || ''}</Genre>
            <NumPlays>{bandDetails?.numPlays || ''}</NumPlays>
            <Biography>{bandDetails?.biography || ''}</Biography>
        </ConteinerBand>
    );
};

export default Band;
