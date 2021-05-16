import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e)=> {
        e.preventDefault();

        if(!text) {
            alert('Please add task name')
        }

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task Name</label>
                <input type="text" placeholder="Add Task Name"  value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Task Date & Time</label>
                <input type="text" placeholder="Add Date" value={day} onChange={(e)=>setDay(e.target.value)} />
            </div>
            <div className="form-control-reminder">
                <label htmlFor="remind">Do you want reminder?</label>
                <input id="remind" type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} checked = {reminder} />
            </div>
            <div className="form-control">
                <input className="btn" type="submit" value="Save Task" />
            </div>
        </form>
    )
}

export default AddTask
