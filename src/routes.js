import Route from './components/app/route'

import Landing from './components/landing'
import Question1 from './components/question1'

export const routes = [
  { path: 'question1', component: Question1 },
]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes
}
