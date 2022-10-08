


export const mockNodes: Nodes = {
  data: {
    title: 'Root',
    description: 'dssw',
    id: 'dsalksd1',
    links: 'nod'
  },
  branch: [
    {
      data: {
        title: 'title',
        description: 'description',
        links: 'www.git.com',
        id: '12321321ds2'
      },
      branch: [
        {
          data: {
            title: 'Childrentitle',
            description: 'Children description',
            links: 'www.git.com',
            id: '13'
          }
        }
      ]
    },
    {
      data: {
        title: 'Childrentitle',
        description: 'Children description',
        links: 'www.git.com',
        id: '13'
      }
    },
    {
      data: {
        title: 'title2',
        description: 'description2',
        links: 'www.git.com',
        id: '11'
      }
    },
    {
      data: {
        title: 'title3',
        description: 'description3',
        links: 'www.git.com',
        id: '12'
      },
      /* branch: [
        {
          data: {
            title: 'childrentitle',
            description: 'description',
            links: 'www.git.com',
            id: '143'
          },
          branch: [
            {
              data: {
                title: 'Chilrentitle',
                description: 'description',
                links: 'www.git.com',
                id: '1123132'
              }
            }
          ]
        }
      ] */
    },
    {
      data: {
        title: 'Chilrentitle',
        description: 'description',
        links: 'www.git.com',
        id: '1123132'
      }
    }
  ]
}
// mockTree.map(node => node.data.description)