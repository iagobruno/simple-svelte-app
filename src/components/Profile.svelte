<script>
  // PROPS
  export let username

  // STATE
  let userInfos = fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())

</script>

{#await userInfos}
  <div class="page page--loading">
    <progress class="matter-progress-circular"></progress>
  </div>
{:then user}
  <!-- {@debug user} -->
  <div class="page page-profile">
    <div class="avatar__wrapper">
      <img class="avatar" src="{user.avatar_url}" alt="">
      <div class="gh-badge"></div>
    </div>
    <div class="userid">#{user.id}</div>
    <h2 class="name">{user.name}</h2>

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

    <p class="bio">{user.bio}</p>

    <a
      href="https://github.com/{user.login}"
      class="matter-button-outlined"
      target="_blank"
      rel="noopener noreferrer"
    >VIEW FULL PROFILE ON GITHUB</a>
  </div>
{:catch error}
  <div class="page page--error">🚨 ERROR!<br>See the console.</div>
  {@debug error}
{/await}

<style>
  .page--error {
    font-size: 18px;
    color: red;
    text-align: center;
  }
  .page--loading progress {
    width: 60px;
    height: 60px;
  }
  .avatar__wrapper {
    --size: 124px;
    height: var(--size);
    width: var(--size);
    position: relative;
    margin-bottom: 10px;
  }
  img.avatar {
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.1);
    display: block;
    width: 100%;
    height: 100%;
  }
  .gh-badge {
    background: url(https://github.githubassets.com/pinned-octocat.svg) center no-repeat;
    background-color: white;
    background-size: cover;
    border: 1.6px solid white;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    position: absolute;
    bottom: 2px;
    right: 6px;
  }
  .userid {
    opacity: .6;
    font-size: 14px;
  }
  h2.name {
    font-size: 28px;
    font-weight: bold;
    margin: -2px 0 0;
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
  .infos-row__col > span {
    /* font-size: 14px; */
  }
  .bio {
    text-align: center;
    margin: 0;
  }
  a.matter-button-outlined {
    text-decoration: none;
    margin-top: 34px;
  }
</style>
