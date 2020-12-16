<script>
  import { Router, Route } from 'svelte-routing'

  import Home from './pages/Home.svelte'
  import Profile from './pages/Profile.svelte'
</script>

<Router>
  <Route path="/view/:username" component={Profile} />
  <Route path="/" component={Home} />
</Router>
