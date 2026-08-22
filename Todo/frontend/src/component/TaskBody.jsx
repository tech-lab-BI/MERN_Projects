function taskBody() {
    const data = [
        {
            taskId : "389309",
            task: "task1",
            date: "12-aug-24",
            isComplete: false,
        },
        {
            taskId: "dt4567",
            task: "task2",
            date: "01-sep-26",
            isComplete: true,
        },
    ]
    return <>
        <p>working</p>
        <div>
            <div>
                <span className="headMargin">Mark</span> |
                <span className="headMargin">Task</span> |
                <span className="headMargin">Deadline</span>
            </div>
            <div>
                <ul>
                    {data.map((item) => (<li>
                        <input type="checkbox" checked={item.isComplete}/> -
                        <span>{item.task}</span> -
                        <span>{item.date}</span> -
                        <span><button>Delete</button></span>
                    </li>))}
                </ul>
            </div>
        </div>
    </>
}

export default taskBody;