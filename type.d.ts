type Data = {
  title: string
  description: string
  links: string
  id: string
}

type Nodes = {
  data: Data
  branch?: Nodes[]
}

type Tree = Nodes[]
