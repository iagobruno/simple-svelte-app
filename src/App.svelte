<script>
  import Form from './components/Form.svelte'

  // STATE
  let showProfilePage = false
  let username = ''

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
  <div class="page page--profile">Perfil</div>
{/if}
