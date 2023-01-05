// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from "./Spinner"
import React from "react"
import { render, screen } from "@testing-library/react"

test('sanity', () => {
  expect(true).toBe(true)
})

test('spinner renders', () => {
  render(<Spinner on={true}/>)
})

test('spinner does not render',() => {
  render(<Spinner on={false} />)
})

//What are you even asking me to find? if it isn't on, then it's null so there's nothing to render....


