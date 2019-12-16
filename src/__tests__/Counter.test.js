import React from 'react'
import {render, fireEvent, act} from '@testing-library/react'
import Counter from '../components/Counter'


it('Renders out starting text', () => {
    const { container } = render(<Counter/>)
    expect(container.textContent).toContain(`You've clicked 0 times!`)
})

it('Clicking increments state count', () => {
    const { container,getByTestId } = render(<Counter />)
    expect(container.textContent).toContain(`You've clicked 0 times!`)
    const button = getByTestId('counter-button')
    fireEvent.click(button)
    expect(container.textContent).toContain(`You've clicked 1 times!`)
}) 


//he didnt use act() so he's gonna slack that out. its for updating state. 