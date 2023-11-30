import { IconType } from 'react-icons';
import { LiaMicrophoneAltSolid, LiaDrumSolid } from 'react-icons/lia';
import { GiGuitar, GiMusicalKeyboard } from 'react-icons/gi';

interface PropsTabs {
  id: number;
  description: string;
  name: string;
  icon: IconType;
}

export const tabs: PropsTabs[] = [
  {
    id: 1,
    name: 'Ezinho Xavier',
    description: 'Vocalista e Guitarrista',
    icon: LiaMicrophoneAltSolid,
  },
  {
    id: 2,
    name: 'Rafael - Pão',
    description: 'Baterista',
    icon: LiaDrumSolid,
  },
  {
    id: 3,
    name: 'Bruno Xavier',
    description: 'Baixista',
    icon: GiGuitar,
  },
  {
    id: 4,
    name: 'Eric Porto',
    description: 'Tecladista e Vocais',
    icon: GiMusicalKeyboard,
  },
];