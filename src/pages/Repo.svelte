<script>
  import { link } from 'svelte-routing'
  import StarsCounter from '../components/StarsCounter.svelte'
  import ForksCounter from '../components/ForksCounter.svelte'
  import IssuesCounter from '../components/IssuesCounter.svelte'
  import PullsCounter from '../components/PullsCounter.svelte'
  import Error from './Error.svelte'
  import marked from 'marked'

  // PROPS
  export let reponame // Received from svelte-routing
  export let username // Received from svelte-routing

  const repoRequest = fetch(`https://api.github.com/repos/${username}/${reponame}`)
    .then(res => {
      if (res.status !== 200) {
        return Promise.reject()
      }

      return res.json()
    })
  const readme = fetch(`https://api.github.com/repos/${username}/${reponame}/readme`, {
    headers: {
      'accept': 'application/vnd.github.VERSION.raw'
    }
  })
    .then(res => res.text())
    .then(markdown => marked(markdown))
</script>

<svelte:head>
  <!-- svelte-ignore component-name-lowercase -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css">
</svelte:head>

{#await repoRequest}
  <div class="page page--loading">
    <progress class="matter-progress-circular"></progress>
  </div>
{:then repo}
  <div class="page page--repo">
    <div class="repo__header">
      <a class="repo__owner" href="/view/{repo.owner.login}" use:link>
        <img src={repo.owner.avatar_url} alt="">
        {repo.owner.login}
      </a>
      <a class="repo__name" href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
      {#if repo.description}
        <p class="repo__description">{repo.description}</p>
      {/if}
      {#if repo.homepage}
        <a class="repo__website" href={repo.homepage} target="_blank" rel="noopener noreferrer">{repo.homepage}</a>
      {/if}

      <div class="counters-row">
        <StarsCounter number={repo.stargazers_count} iconSize="16" />
        <ForksCounter number={repo.forks_count} iconSize="16" />
        <IssuesCounter number={repo.open_issues_count} iconSize="16" />
        <PullsCounter number={repo.open_issues_count} iconSize="16" />
      </div>

      <a
        href={repo.html_url}
        class="matter-button-outlined repo__open"
        target="_blank"
        rel="noopener noreferrer"
      >VIEW REPO ON GITHUB</a>
    </div>

    {#await readme then readme}
      <div class="repo__readme markdown-body" id="readme">
        {@html readme}
      </div>
    {/await}
  </div>
{:catch error}
  <Error message="Could not fetch this repo. See the console for more details" />
  {@debug error}
{/await}

<style>
  .page--repo {
    padding: 0 0 30px;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .repo__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 0px;
    border-bottom: 1px solid rgba(0,0,0,.15);
    width: inherit;
  }
  .repo__owner {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
  .repo__owner > img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 6px;
  }
  .repo__name {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .repo__description {
    font-size: 15px;
    margin-bottom: 6px;
  }
  .repo__website {
    font-size: 15px;
  }
  .repo__website::before {
    background: url(/icons/link.svg) no-repeat center;
    background-size: contain;
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 6px;
  }
  .counters-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 6px;
    column-gap: 20px;
    row-gap: 6px;
  }
  .repo__open {
    width: inherit;
    margin-top: 16px;
  }
  .repo__readme {
    padding: 20px 0px;
    font-size: 16px;
    line-height: normal;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    .repo__readme {
      padding: 20px 20px;
      font-size: 14px;
    }
    .repo__header {
      padding: 24px 22px;
    }
  }
</style>
