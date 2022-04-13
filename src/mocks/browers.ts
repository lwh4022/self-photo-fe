import { setupWorker } from 'msw'
import handlers from './userActionTest'

export const worker = setupWorker(...handlers)