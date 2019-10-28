<template>
  <div>
      <iframe
        :src="bla"
        width="560"
        height="315"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
  </div>
</template>
<script>
export default {
    props: {
      bla: ''
    }
}
</script>