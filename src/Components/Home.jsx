import React,{useState} from 'react';
import Task from './Task';

function Home() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    console.log(title, description);
    
    
//     const [inputValue, setInputValue] = useState(0);
 
//     const increment = () => {
//         setInputValue(inputValue + 1);
// };
//     const decrement = () => {
//         setInputValue(inputValue - 1);
//     };
//     useEffect(() => {
//         console.log('Run');
//     }, []);
    
    // const ChangeHandler = (e) => {
    //     inputValue = e.target.value;
    //     console.log(inputValue);
    // }
    const deleteTask = (index) => {
        const filterArr = tasks.filter((val, i) => {
            return i !== index;
        });
        setTasks(filterArr);
};
    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, {
            title,
            description
        }]);
    }
    return (
        <div className='container'>
            <Task />
            <form action="" onSubmit={submitHandler}>
                <input type="text" placeholder='title'
                    value={title} onChange={(e) => setTitle(e.target.value) } />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description'></textarea>
                <button type='submit'>submit</button>
                
            </form>
            {
                tasks.map((item, index) => (
                    <Task
                        key={index}
                        title={item.title}
                        description={item.description}
                        deleteTask={deleteTask}
                        index = {index}
                    />
                ))
            }
        </div>
    );
};

export default Home