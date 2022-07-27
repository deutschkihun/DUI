import React from "react"
import {render} from '@testing-library/react';

import Button from './Button'

describe('Button', () => {
    test('renders the button components', () => {
        render(<Button variant="success" size="lg" disabled={false}>hello world</Button>)
    })
})