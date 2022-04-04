import { render, screen } from '@testing-library/react'

import ProductFeed from '.'

describe('<ProductFeed />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductFeed />)

    expect(screen.getByRole('heading', { name: /ProductFeed/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
