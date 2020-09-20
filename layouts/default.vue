<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
        <b class="b-title has-text-white">Đồ án ra trường</b>
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns has-background-black main">
      <div class="container column is-12">
        <nuxt />
      </div>
    </section>
    <footer class="footer has-background-primary">
      <div class="content has-text-centered is-primary">
        <p>
          <strong>JAV Search</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is not licensed.
        </p>
      </div>
    </footer>
  </div>
</template>
<style lang="sass">
.footer
  position: fixed
  left: 0
  bottom: 0
  width: 100%
  padding: 1.5rem 1.5rem 3rem
  height: 20px
  box-sizing: border-box
.main
  min-height: 100vh
</style>
<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
