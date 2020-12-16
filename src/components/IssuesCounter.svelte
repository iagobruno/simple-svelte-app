<script>
  export let number
  export let iconSize = 14
  export let showLabel = true
</script>

<div class="issues-counter">
  <img src="/icons/issue.svg" alt="" width={iconSize} height={iconSize}>
  {number}
  {#if showLabel}
    Issue{number === 1 ? '' : 's'}
  {/if}
</div>

<style>
  .issues-counter {
    display: flex;
    align-items: center;
    opacity: .8;
  }
  .issues-counter > img {
    margin-right: 4px;
    margin-top: 2px;
  }
</style>
