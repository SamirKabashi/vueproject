<template>
    <v-row justify="center">
      <div>
        <div class="subheading">
            <br>
            <p></p>
          <p>This is time we are live </p>
        </div>
        <v-date-picker
          v-model="date1"
          :events="arrayEvents"
          event-color="green lighten-1"
        ></v-date-picker>
      </div>
    </v-row>
  </template>
  
  <script>
    export default {
      data: () => ({
        arrayEvents: null,
        date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      }),
  
      mounted () {
        this.arrayEvents = [...Array(6)].map(() => {
          const day = Math.floor(Math.random() * 30)
          const d = new Date()
          d.setDate(day)
          return d.toISOString().substr(0, 10)
        })
      },
  
      methods: {
        functionEvents (date) {
          const [,, day] = date.split('-')
          if ([12, 17, 28].includes(parseInt(day, 10))) return true
          if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
          return false
        },
      },
    }
  </script>

  <style>

</style>