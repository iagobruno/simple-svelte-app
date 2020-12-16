<script>
  import { onMount } from 'svelte'
  import { Router, Route } from 'svelte-routing'

  import Home from './pages/Home.svelte'
  import Profile from './pages/Profile.svelte'
  import Repo from './pages/Repo.svelte'
  import Error from './pages/Error.svelte'

  function onRouteChange (newPath) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    console.log('Route changed to:', newPath)
  }

  onMount(async () => {
    // Stolen from https://github.com/EmilTholin/svelte-routing/issues/132
    history.pushState = new Proxy(history.pushState, {
      apply (target, thisArg, argumentsList) {
        Reflect.apply(target, thisArg, argumentsList)

        const newPath = argumentsList[2]
        onRouteChange(newPath)
      }
    })
  })
</script>

<Router>
  <Route path="/view/:username/:reponame" component={Repo} />
  <Route path="/view/:username" component={Profile} />
  <Route path="/" component={Home} />
  <Route>
    <Error title="404" message="Page not found." />
  </Route>
</Router>
