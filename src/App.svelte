<script>
  import { Router, Route } from 'svelte-routing'

  import Home from './pages/Home.svelte'
  import Profile from './pages/Profile.svelte'
  import Repo from './pages/Repo.svelte'
  import Error from './pages/Error.svelte'
</script>

<Router>
  <Route path="/view/:username/:reponame" component={Repo} />
  <Route path="/view/:username" component={Profile} />
  <Route path="/" component={Home} />
  <Route>
    <Error title="404" message="Page not found." />
  </Route>
</Router>
