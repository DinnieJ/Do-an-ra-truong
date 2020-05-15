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
        <b class="b-title">Đồ án ra trường</b>
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
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
  background-color: #7959D5
  height: 20px
  box-sizing: border-box
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
