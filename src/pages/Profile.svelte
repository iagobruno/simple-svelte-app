<script>
  import ReposList from '../components/ReposList.svelte'
  import Loading from '../components/Loading.svelte'
  import Error from '../components/Error.svelte'
  import octokit from '../common/octokit.js'

  // PROPS
  export let params = {} // Received from svelte-spa-router

  // STATES
  let userRequest
  $: username = params.username

  $: {
    userRequest = octokit.users.getByUsername({ username })
      .then(res => {
        return {
          ...res.data,
          company: res.data.company?.replace(/\@(\w+)/gi, '<a href="https://github.com/$1" target="_blank">$1</a>')
        }
      })
  }
</script>

<svelte:head>
  <title>{username} - GitHub Explorer</title>
</svelte:head>

{#await userRequest}
  <Loading />
{:then user}
  <div class="page page-profile">
    <div class="avatar__wrapper">
      <img class="avatar" src="{user.avatar_url}" alt="">
      <div class="gh-badge"></div>
    </div>
    <div class="username">@{user.login}</div>
    <h2 class="name">{user.name}</h2>

    {#if user.company}
      <div class="company">Works on {@html user.company}</div>
    {/if}

    <div class="infos-row">
      <div class="infos-row__col">
        <strong>{user.followers}</strong>
        <span>Followers</span>
      </div>
      <div class="infos-row__col">
        <strong>{user.following}</strong>
        <span>Following</span>
      </div>
      <div class="infos-row__col">
        <strong>{user.public_repos}</strong>
        <span>Repositories</span>
      </div>
    </div>

    {#if user.bio}
      <p class="bio">{user.bio}</p>
    {/if}
    {#if user.blog}
      <a class="website" href={user.blog} target="_blank" rel="noopener noreferrer">{user.blog}</a>
    {/if}

    <ReposList {username} />

    <a
      href="https://github.com/{user.login}"
      class="matter-button-outlined"
      target="_blank"
      rel="noopener noreferrer"
    >VIEW FULL PROFILE ON GITHUB</a>
  </div>
{:catch error}
  <Error message="Could not fetch the user. See the console for more details" />
  {@debug error}
{/await}

<style>
  .page--loading progress {
    width: 60px;
    height: 60px;
  }

  .page-profile {
    padding: 60px 20px;
  }
  .avatar__wrapper {
    --size: 124px;
    height: var(--size);
    width: var(--size);
    position: relative;
    margin-bottom: 10px;
  }
  .avatar {
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.1);
    display: block;
    width: 100%;
    height: 100%;
  }
  .gh-badge {
    background: url(/icons/github.svg) center no-repeat;
    background-color: white;
    background-size: cover;
    border: 1.6px solid white;
    border-radius: 50%;
    height: 28px;
    width: 28px;
    position: absolute;
    bottom: 3px;
    right: 7px;
  }
  .username {
    opacity: .7;
    font-size: 15px;
  }
  .name {
    font-size: 28px;
    font-weight: bold;
    margin: -2px 0 0;
  }
  .company {
    margin: 8px 0 2px;
  }
  .company::before {
    background: url(/icons/org.svg) no-repeat center;
    background-size: contain;
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  .infos-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 20px 0 24px;
    font-size: 15px;
  }
  .infos-row__col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* .infos-row__col > span {
    font-size: 14px;
  } */
  .bio {
    text-align: center;
    margin: 0 0 24px;
  }
  .website {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin: -10px 0 24px;
  }
  .website::before {
    background: url(/icons/link.svg) no-repeat center;
    background-size: contain;
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  a.matter-button-outlined {
    text-decoration: none;
    margin: 34px 0 0;
  }
</style>
