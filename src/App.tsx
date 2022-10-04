import { mockTree } from '../mock/tree'
import Tree from './components/Tree'

function App() {

  return (
    <Tree nodes={mockTree} />
  )
}

export default App
