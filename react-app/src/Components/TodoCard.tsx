import { useState } from "react";

export interface ToDoProps {
    owner?: string;
    description: string;
    id: string;
    state: string;
}

export const TodoCard: React.FC<ToDoProps> = (props) => {
    const [state, setState] = useState(props.state);
    const canMoveAcross = state === 'ToDo' || state === 'Doing';
    const canMovePrevious = state === 'Doing' || state === 'Done';

    const card = <>{ props.owner ?? <div>{props.owner} - </div> } {state} - {props.description} </>;

    const moveCard = (path: string, id: string) => () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        };
        fetch(path, requestOptions)
            .then(res => res.json())
            .then(data => setState(data.state));
    }

    

    return (<div>
        <div>{card}</div>
        {canMoveAcross ? <button onClick={moveCard("/moveAcross", props.id)}>Move Across</button> : <></>}
        {canMovePrevious ? <button onClick={moveCard("/movePrevious", props.id)}>Move Previous</button> : <></>}
    </div>);
}