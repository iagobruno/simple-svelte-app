<script>
  import { link } from 'svelte-routing'
  import StarsCounter from './StarsCounter.svelte'

  // PROPS
  export let username

  const reposRequest = fetch(`https://api.github.com/users/${username}/repos?type=all&sort=updated&per_page=100`)
    .then(res => res.json())
</script>

{#await reposRequest}
  <progress class="loading-repos matter-progress-linear"></progress>
{:then repos}
  <strong class="repos-list__title">REPOS:</strong>

  <ul class="repos-list">
    {#each repos as repo (repo.id)}
      <li class="repos-list__item">
        <img class="repos-list__item__icon" src="/icons/{repo.fork ? 'fork' : 'repo'}.svg" alt="">
        <a href="/view/{repo.full_name}" use:link>{repo.name}</a>
        <StarsCounter number={repo.stargazers_count} />
      </li>
    {/each}
  </ul>
{/await}

<style>
  .loading-repos {
    margin: 30px 0 0;
    width: 50%;
  }

  .repos-list__title {
    align-self: flex-start;
    font-size: 18px;
    margin: 0 0 16px;
  }
  .repos-list {
    --border-color: rgba(0,0,0,0.15);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    position: relative;
    width: inherit;
    margin: 0px 0 0;
    list-style: none;
  }
  .repos-list__item {
    padding: 12px 16px 16px;
    display: flex;
    align-items: center;
  }
  .repos-list__item:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
  }
  .repos-list__item__icon {
    width: 18px;
    height: 18px;
    opacity: .6;
    margin-right: 10px;
    margin-top: 4px;
  }
  .repos-list__item a {
    margin-right: auto;
  }
</style>
