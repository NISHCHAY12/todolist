import axios from 'axios'
import {useState} from 'react'
// import { redirect } from 'react-router';


function Box() {

  const [data, setData] = useState({
    title: "",body: "update to add description",check:false
  });

  const handleinput = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const post_task = (e) => {
    
    e.preventDefault();
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const userData = {
      title : data.title,
      body : data.body,
      check : data.check,
      date : date
    };
    axios.post('http://localhost:3030/tasks',userData )
    .then(res => console.log(res))
    .catch(err => console.log(err))
    window.location.reload(false);
  }



  return (
    <div className="mx-auto p-8 h-auto w-1/2 bg-blue-50 shadow-lg my-8 rounded">
    
        <label for="task" className="text-lg text-purple-900 font-poppins mr-4 my-4">Add Task :</label>
        <input type="text" name="title" value={data.title} onChange={handleinput} className="bg-transparent border-b-2 border-purple-900 w-2/3 outline-none text-purple-900 font-poppins"/>
        <input type="submit" value="add" onClick={post_task} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-full ml-4 font-poppins cursor-pointer"/>
    </div>
  );
}

export default Box;