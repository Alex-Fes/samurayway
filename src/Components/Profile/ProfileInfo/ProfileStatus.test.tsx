import React from 'react'

import { create } from 'react-test-renderer'

import ProfileStatus from './ProfileStatus'

describe('Profile status component', () => {
  test('status from the props should be in the state', () => {
    const component = create(
      <ProfileStatus
        status={'yoyyoyo'}
        updateStatus={() => {
          'hi'
        }}
      />
    )
    const instance = component.getInstance()

    // @ts-ignore
    instance ? expect(instance.state.status).toBe('yoyyoyo') : null
  })

  test('after creation span should be displayed', () => {
    const component = create(
      <ProfileStatus
        status={'yoyyoyo'}
        updateStatus={() => {
          'hi'
        }}
      />
    )
    const root = component.root
    let span = root?.findByType('span')

    root ? expect(span).not.toBe(null) : null
  })

  test('after creation input should not be displayed', () => {
    const component = create(
      <ProfileStatus
        status={'yoyyoyo'}
        updateStatus={() => {
          'hi'
        }}
      />
    )
    const root = component.root

    expect(() => {
      root?.findByType('input')
    }).toThrow()
  })

  test('after creation span should be contain correct status', () => {
    const component = create(
      <ProfileStatus
        status={'yoyyoyo'}
        updateStatus={() => {
          'hi'
        }}
      />
    )
    const root = component.root
    let span = root?.findByType('span')

    root ? expect(span?.children[0]).toBe('yoyyoyo') : null
  })

  test('input should be displayed in editMode instead of span', () => {
    const component = create(
      <ProfileStatus
        status={'yoyyoyo'}
        updateStatus={() => {
          'hi'
        }}
      />
    )
    const root = component.root
    let span = root?.findByType('span')

    span?.props.onDoubleClick()
    let input = root.findByType('input')

    root ? expect(input.props.value).toBe('yoyyoyo') : null
  })

  test('callback should be called', () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status={'yoyyoyo'} updateStatus={mockCallback} />)
    const instance = component.getInstance()

    // @ts-ignore
    instance.deActivateEditMode()

    instance ? expect(mockCallback.mock.calls.length).toBe(1) : null
  })
})
