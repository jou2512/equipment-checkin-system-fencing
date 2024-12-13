import '@testing-library/jest-dom'
import { AppwriteException } from 'appwrite'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveValue(value: string | number | string[]): R
      toBeChecked(): R
    }
  }
}