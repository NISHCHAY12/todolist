import { Collapse,Panel } from "antd";

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>hello</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>hello</p>,
  },
];

function List() {
  return (
    <div className="mx-auto p-8 h-auto w-1/2 bg-blue-50 shadow-lg my-8 rounded">

      <Collapse items={items} defaultActiveKey={['1']} />
    </div>
  );
}

export default List;