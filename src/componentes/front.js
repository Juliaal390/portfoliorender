import Proj1 from './cards/front1';
import Proj2 from './cards/front2';
import Proj3 from './cards/front3';
import Proj4 from './cards/front4';
import ProjLast from './cards/frontLast';

//os estilos estão no index.css

export default function Front(){
    return (
        <>
        <Proj4/>
        <Proj1/>
        <Proj2/>
        <Proj3/>
        <ProjLast/>
        </>
    );
}