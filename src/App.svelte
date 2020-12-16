<script>
  import { onMount } from 'svelte'
  import Form from './components/Form.svelte'
  import Profile from './components/Profile.svelte'

  // STATE
  let username = ''
  let showProfilePage = false

  // $: console.log('username', username)

  // METHODS
  function handleFormSubmit () {
    showProfilePage = true
  }
</script>

{#if !showProfilePage}
  <Form
    bind:username
    on:submit={handleFormSubmit}
  />
{:else}
  <Profile {username} />
{/if}
