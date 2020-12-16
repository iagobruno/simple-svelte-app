<script>
  export let number
  export let iconSize = 14
  export let showLabel = true
</script>

<div class="pulls-counter">
  <img src="/icons/pull.svg" alt="" width={iconSize} height={iconSize}>
  {number}
  {#if showLabel}
    Pull request{number === 1 ? '' : 's'}
  {/if}
</div>

<style>
  .pulls-counter {
    display: flex;
    align-items: center;
    opacity: .8;
  }
  .pulls-counter > img {
    margin-right: 4px;
    margin-top: 2px;
  }
</style>
