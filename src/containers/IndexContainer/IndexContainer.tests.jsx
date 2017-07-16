import React from 'react'
import { shallow } from 'enzyme'

import IndexContainer from './IndexContainer'

describe('IndexContainer', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<IndexContainer {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})