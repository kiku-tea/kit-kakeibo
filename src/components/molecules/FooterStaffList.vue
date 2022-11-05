<template>
  <ul >
    <li v-for="(staff, index) in staffList" :key="index" >
      <span>{{staff}}</span>
    </li>
  </ul>
</template>
<script>
  export default{
    data(){
      return {
        staffList: [
          'Photo & Movie_Jun Okada［BE NATURAL］',
          'Styling_Tomoya Yagi',
          'Hair & Make-up_Yuka Toyama［mod’s hair］',
          'Web Development_Yusuke Fukunaga'
        ]
      }
    }
  }
</script>