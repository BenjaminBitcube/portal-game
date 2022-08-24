import { FunctionComponent } from 'react';
import './Tile.css'

interface OwnProps {
    id: number;
}

type Props = OwnProps;

const Tile: FunctionComponent<Props> = (props) => {
    return (
        <div className="Tile">{props.id}</div>
    );
}

export default Tile;