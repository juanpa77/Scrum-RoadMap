import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, afterEach } from 'vitest'
import { Node } from '.'

describe('Node', () => {
  const data: Data = {
    title: 'title',
    description: 'description',
    links: 'www.git.com',
    id: 'dsd123'
  }

  afterEach(cleanup)

  it('should render title correctly', () => {
    render(<Node data={data} />)
    screen.getByText('title')
  })
})