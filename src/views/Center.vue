<template>
  <div>
    <h1>This is in Personal Center</h1>
    Current User：
    {{username}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      username: this.$store.state.username
    }
  }
}
</script>