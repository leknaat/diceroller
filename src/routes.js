import Route from './components/app/route'

import DiceRollerPage from './components/diceRollerPage'


export const routes = []

export default {
  path: '/',
  component: Route,
  indexRoute: { component: DiceRollerPage },
  childRoutes: routes
}

