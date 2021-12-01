<template>
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top" :class="{'scroll': navScroll}">
      <div class="container">

        <a class="navbar-brand logo" href="#">
          <b>Boggy Club</b>
        </a>

        <button data-toggle="collapse" class="navbar-toggler" data-target="#navbarNav"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav ml-auto">

            <li v-for="(v, i) in nav" :key="i" class="nav-item nav-link nav-a">
              <a class="nav-link active" :href="v.link">{{ v.label }}</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {

  computed: {
    //
  },

  methods: {
    navScrollHanddle: function() {
      const top = $(window).scrollTop()
      if (top > 80)
        this.navScroll = true
      else
        this.navScroll = false

    }
  },

  mounted() {

    this.navScrollHanddle()
    $(window).scroll(() => this.navScrollHanddle())

  },

  data() {
    return {
      navScroll: true,
      nav: [{
          label: 'Opensea',
          link: 'https://opensea.io/collection/boggy-cat'
        },
        {
          label: 'Github',
          link: 'https://github.com/boggycat'
        }
      ],
    }
  },
}
</script>
