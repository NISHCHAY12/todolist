import axios from 'axios'
import { useState, useEffect } from 'react'
import { Checkbox, Collapse } from "antd";
import Description from './desc';
const { Panel } = Collapse;


function List() {


  const [show, setShow] = useState(true);
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3030/tasks')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])


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

  //   const delete_selected_task = async (data) => {
  //     const postsIdsArray = this.data.map((resp) => {
  //       if (resp.check === true) console.log(resp.id);
  //       return resp.id;
  //   })
  //     postsIdsArray.forEach((id) => this.delete_task(id))
  //  }




  return (
    <div className="mx-auto p-8 h-auto w-1/2 h-2/3 bg-blue-50 shadow-lg my-8 rounded overflow-y-auto ">

      <div >
        {/* <input type="submit" value="mark done" className="bg-blue-500 hover:bg-blue-700 text-white mb-2 py-0 px-2 rounded font-poppins cursor-pointer"/> */}
        <Collapse accordion bordered={false}>
          {data.map((resp, i) => (
            <Panel className={`font-poppins text-md font-bold text-purple-900 ${resp.check === true ? 'line-through' : ''}`} header={resp.title} key={i} extra={<Checkbox checked={resp.check} onClick={() => toggle_check(resp)} />}>
              <p className='font-poppins font-light all-initial'>{resp.body}</p>
              <div>
                <p className='font-poppins font-light all-initial'>Last Update : {resp.date}</p>
                <input type="submit" value="update" onClick={() => setShow(!show)} className="bg-blue-500 hover:bg-blue-700 text-white mt-2 py-2 px-4 rounded-full ml-4 font-poppins cursor-pointer" />
                <input type="submit" value="delete" onClick={() => delete_task(resp.id)} className="bg-red-500 hover:bg-red-700 text-white mt-2 py-2 px-4 rounded-full ml-4 font-poppins cursor-pointer" />
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
      {show ? <Description /> : null}
    </div>
  );
}

export default List;
