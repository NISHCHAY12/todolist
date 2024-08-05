import Box from './box'
import Head from './header'
import List from './list'

function Home() {
    return (
      <div className="bg-indigo-100 h-screen ">
          <div>
            <Head/>
            <Box/>
            <List/>
          </div>
      </div>
    );
  }
  
  export default Home;