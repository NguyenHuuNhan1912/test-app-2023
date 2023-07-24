import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Content from './components/content/Content'
import Detail from './components/detail/Detail'
function App() {

  return (
    <main className='my-app'>
      <Sidebar />
      <Content/>
      <Detail />
    </main>
  )
}

export default App
