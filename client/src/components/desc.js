// import axios from 'axios'
import {useState} from 'react'
// import { redirect } from 'react-router';
import { Button, Modal } from 'antd';


function Description() {

    const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
    
  return (
    // <div className="mx-auto p-8 h-auto w-1/2 bg-blue-50 shadow-lg my-8 rounded">
    
    //     {/* <label for="task" className="text-lg text-purple-900 font-poppins mr-4 my-4">Add Task :</label>
    //     <input type="text" name="title" value={data.title} onChange={handleinput} className="bg-transparent border-b-2 border-purple-900 w-2/3 outline-none text-purple-900 font-poppins"/>
    //     <input type="submit" value="add" onClick={post_task} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-full ml-4 font-poppins cursor-pointer"/> */}
    // </div>
    <>
  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
    </>
  );
}

export default Description;