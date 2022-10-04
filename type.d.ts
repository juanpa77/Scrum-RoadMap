type Data = {
  title: string
  description: string
  links: string
  id: string
}

type Nodes = {
  data: Data
  branch?: Tree
}

type Tree = Nodes[]
