import React from 'react'
import { RecoilRoot } from 'recoil'
import {render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import SignIn from '../components/SignIn'


test('testing-library', () => {
  const history = createMemoryHistory()
  render(<RecoilRoot>
          <MemoryRouter>
            <SignIn />
          </MemoryRouter>
        </RecoilRoot>)

  expect(screen.getByText(/Forgot password?/i)).toBeInTheDocument()
})