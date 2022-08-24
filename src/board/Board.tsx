import React, { FunctionComponent } from 'react';
import Tile from '../tile/Tile';
import './Board.css'

interface OwnProps {
}

type Props = OwnProps;

const Board: FunctionComponent<Props> = (props) => {
    const tiles: number[] = Array.from(Array(100).keys())
    return (
        <div className={`background`}>
            <div className="grid-container">
                    {tiles.map(m => <div key={m} className="grid-item tile-border"><Tile id={m}/></div>)}
            </div>
      </div>
    );
}

export default Board;