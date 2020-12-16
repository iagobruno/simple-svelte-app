<script>
  // PROPS
  export let username = ''

</script>

<div class="page page--form">
  <img class="logo" src="https://svelte.dev/favicon.png" alt="Svelte Logo">
  <h1 class="title">Hello World!</h1>
  <p class="description">Enter a GitHub username to see a profile preview.</p>

  <form on:submit|preventDefault>
    <label class="matter-textfield-outlined">
      <input
        type="text"
        bind:value={username}
        placeholder=" "
        minlength="1"
        maxlength="20"
        required
      >
      <span>GitHub username...</span>
    </label>
    <button
      type="submit"
      class="matter-button-contained"
      disabled={!username.length}
    >VIEW PROFILE</button>
  </form>
</div>

<style>
  .page--form {
    text-align: center;
    max-width: 460px;
  }
  .logo {
    display: block;
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
</style>
