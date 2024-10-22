import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
import { Button } from 'react-bootstrap'

const ListTask = () => {
    const [status, setStatus] = useState("All")
    const list = useSelector(state => state.listReducer.listTasks)

    return (
        <div>
            <Button variant="outline-primary" onClick={() => setStatus("All")}>All</Button>
            <Button variant="outline-primary" onClick={() => setStatus("Done")}>Done</Button>
            <Button variant="outline-primary" onClick={() => setStatus("Undone")}>UnDone</Button>

            {status === "Done"
                ? list
                    .filter((el) => el.isDone === true)
                    .map((el) => <Task task={el} key={el.id} />)
                : status === "Undone"
                    ? list
                        .filter((el) => el.isDone === false)
                        .map((el) => <Task task={el} key={el.id} />)

                    : list.map(el => (<Task task={el} key={el.id} />))}
        </div>
    )
}

export default ListTask