import { useState } from 'react'
import Actions from './components/task';
import { useSelector, useDispatch } from 'react-redux';
import usePolling from './components/polling';
function App() {
    
    const tasks = useSelector(state => state.tasks);
    const {data, error, isLoading, isError} = usePolling();
    return (
        <div className="min-h-screen bg-white p-8">
                <div className="p-6">
                    <h2 className="mb-6 text-2xl font-semibold">Task Tracking</h2>
                    <div className="space-y-6">
                        {tasks.map((task, index) => (
                            <div>
                                 <Actions task ={task} index={index}/>
                                 <hr className="my-4 border-gray-300" />
                            </div>
                          
                        ))}
                    </div>
                    <div>
                    </div>
                </div>
        </div>
    );
}

export default App;
