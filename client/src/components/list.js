import axios from 'axios'
import { useState, useEffect } from 'react'
import { Checkbox, Collapse } from "antd";
import { Input } from 'antd';
import { Modal } from 'antd';
const { Panel } = Collapse;


function List() {

  const [description, setDescription] = useState({
    des : ""
  });

  const handleinput = (e) => {
    const value = e.target.value;
    setDescription({
      ...description,
      [e.target.name]: value
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [desc , setDesc] = useState([]);
  const showModal = (resp) => {
    setDesc(resp);
    // console.log(desc)
    setIsModalOpen(true);
  };

  const handleOk = (e) => {
    console.log(desc.id);
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const userData = {
      id: desc.id,
      title: desc.title,
      body: description.des,
      check: desc.check,
      date: date
    };
    axios.put('http://localhost:3030/tasks/' + desc.id, userData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    window.location.reload(false);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const [show, setShow] = useState(false);
  const [data, setData] = useState([])
  const [record, setRecord] = useState(data)
  useEffect(() => {
    axios.get('http://localhost:3030/tasks/')
      .then(res => {
        setData(res.data)
        setRecord(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const search = (e) => {
    setRecord(data.filter(f => f.title.toLowerCase().includes(e.target.value)))
  }


  const delete_task = async (id) => {
    // e.preventDefault();
    console.log(id)
    axios({
      method: 'DELETE',
      url: 'http://localhost:3030/tasks/' + id
    });
    window.location.reload(false);
  }

  const toggle_check = async (resp) => {
    const userData = {
      id: resp.id,
      title: resp.title,
      body: resp.body,
      check: !resp.check,
      date: resp.date
    };
    axios.put('http://localhost:3030/tasks/' + resp.id, userData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    window.location.reload(false);
  }

  




  return (
    <div className="mx-auto p-8 h-auto w-1/2 h-2/3 bg-blue-50 shadow-lg my-8 rounded overflow-y-auto ">

      <div >
        <Input className='form-control mb-2' onChange={search} placeholder='Search'/>
        
        
        <Collapse accordion bordered={false}>
          {record.map((resp, i) => (
            <Panel className={`font-poppins text-md font-bold text-purple-900 ${resp.check === true ? 'line-through' : ''}`} header={resp.title} key={i} extra={<Checkbox checked={resp.check} onClick={() => toggle_check(resp)} />}>
              <p className='font-poppins font-light all-initial'>{resp.body}</p>
              <div>
                <p className='font-poppins font-light all-initial'>Last Update : {resp.date}</p>
                <input type="submit" value="update" onClick={() => showModal(resp)} className="bg-blue-500 hover:bg-blue-700 text-white mt-2 py-2 px-4 rounded-full ml-4 font-poppins cursor-pointer" />
                <input type="submit" value="delete" onClick={() => delete_task(resp.id)} className="bg-red-500 hover:bg-red-700 text-white mt-2 py-2 px-4 rounded-full ml-4 font-poppins cursor-pointer" />
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
      <>
      <Modal title="Edit Description" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <textarea id='des' rows="5" name="des" onChange={handleinput} value={description.des} className="bg-transparent border-2 rounded border-purple-900 w-full outline-none text-purple-900 font-poppins"/>
        {/* <input type="submit" value="add" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-full ml-4 font-poppins cursor-pointer"/> */}
    
      </Modal>
    </>
    </div>
  );
}

export default List;
