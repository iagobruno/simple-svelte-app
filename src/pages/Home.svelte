<script>
  import * as router from 'svelte-spa-router'
  import debounce from 'lodash/debounce'
  import octokit from '../common/octokit'

  // PROPS
  export let username = ''

  // STATES
  let searchResults = []

  function handleSubmit () {
    router.push(`/view/${username}`)
  }

  function handleUsernameChange () {
    searchResults = []
    debounceSearch()
  }

  const debounceSearch = debounce(function searchUsers() {
    if (!username) return;

    octokit.search.users({
      q: username,
      per_page: 10
    })
    .then(res => {
      searchResults = res.data.items
    })
  }, 500)
</script>

<svelte:head>
  <title>GitHub Explorer</title>
</svelte:head>

<div class="page page--form">
  <img class="logo" src="/icons/svelte.svg" alt="Svelte Logo">
  <h1 class="title">GitHub Explorer</h1>
  <p class="description">Enter a GitHub username to see a profile preview.</p>

  <form on:submit|preventDefault={handleSubmit}>
    <label class="matter-textfield-outlined">
      <input
        type="text"
        name="gh-username"
        bind:value={username}
        on:input={handleUsernameChange}
        placeholder=" "
        list="usernames"
        minlength="1"
        maxlength="20"
        required
      >
      <span>GitHub username...</span>
    </label>
    <datalist id="usernames">
      {#each searchResults as item (item.login)}
        <option value={item.login}>
      {/each}
    </datalist>
    <button
      type="submit"
      class="matter-button-contained"
      disabled={!username.length}
    >VIEW PROFILE</button>
  </form>

  <p class="page--home__footer">Built with <a href="https://svelte.dev/">Svelte</a> by <a href="https://github.com/iagobruno">Iago Bruno</a>.</p>
</div>

<style>
  .page--form {
    text-align: center;
    max-width: 460px;
  }
  .logo {
    display: block;
    width: 160px;
    height: 160px;
  }
  .title {
    font-size: 38px;
    font-weight: 700;
    margin: 6px 0 0;
  }
  .description {
    margin: 8px 0 0;
    opacity: .76;
  }
  form {
    margin-top: 30px;
    display: block;
    width: 100%;
  }
  form label,
  input {
    width: 100%;
  }
  form button {
    margin-top: 24px;
  }
  .page--home__footer {
    margin-top: 30px;
    margin-bottom: -30px;
    font-size: 14px;
  }
</style>
