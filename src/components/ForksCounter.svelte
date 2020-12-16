<script>
  export let number
  export let iconSize = 14
</script>

<div class="forks-counter">
  <img src="/icons/fork.svg" alt="" width={iconSize} height={iconSize}> {number} Fork{number === 1 ? '' : 's'}
</div>

<style>
  .forks-counter {
    display: flex;
    align-items: center;
    opacity: .8;
  }
  .forks-counter > img {
    margin-right: 4px;
    margin-top: 2px;
  }
</style>
