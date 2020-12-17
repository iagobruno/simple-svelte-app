import { wrap } from 'svelte-spa-router/wrap'
import NotFound from './pages/NotFound.svelte'

export default {
  '/': lazyRoute(() => import('./pages/Home.svelte')),
  '/view/:username': lazyRoute(() => import('./pages/Profile.svelte')),
  '/view/:username/:reponame': lazyRoute(() => import('./pages/Repo.svelte')),
  '*': NotFound
}

function lazyRoute (asyncComponent) {
  return wrap({
    asyncComponent,
  })
}
