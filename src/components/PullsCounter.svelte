<script>
  export let number
  export let iconSize = 14
</script>

<div class="pulls-counter">
  <img src="/icons/pull.svg" alt="" width={iconSize} height={iconSize}> {number} Pull request{number === 1 ? '' : 's'}
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
