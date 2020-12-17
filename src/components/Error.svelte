<script>
  export let title = '🚨 ERROR'
  export let message = ''
</script>

<div class="page page--error">
  <strong>{title}</strong>
  <p>{message}</p>
</div>

<style>
  .page--error {
    font-size: 18px;
    text-align: center;
    /* color: red; */
  }
  .page--error strong {
    font-size: 22px;
    margin-bottom: 4px;
  }
</style>
