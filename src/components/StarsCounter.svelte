<script>
  export let number
  export let iconSize = 14
</script>

<div class="stars-counter">
  <img src="/icons/star.svg" alt="" width={iconSize} height={iconSize}> {number} Star{number === 1 ? '' : 's'}
</div>

<style>
  .stars-counter {
    display: flex;
    align-items: center;
    opacity: .8;
  }
  .stars-counter > img {
    margin-right: 4px;
    margin-top: 2px;
  }
</style>
