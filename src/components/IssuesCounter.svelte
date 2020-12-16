<script>
  export let number
  export let iconSize = 14
</script>

<div class="issues-counter">
  <img src="/icons/issue.svg" alt="" width={iconSize} height={iconSize}> {number} Issue{number === 1 ? '' : 's'}
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
