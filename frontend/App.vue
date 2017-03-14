<template>
<div id="mainContainer">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="John Doe" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="John Doe" sliding></f7-navbar>
            <f7-list>
              <f7-list-item link="/account/" title="Account" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/category/" title="Category" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/expense/" title="Expense" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>Personal Finance</f7-nav-center>
        </f7-navbar>
        <!-- Material Theme Navbar -->
        <f7-navbar v-if="$theme.material">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>Personal Finance</f7-nav-center>
        </f7-navbar>

        <tabs></tabs>

      </f7-view>
    </f7-views>
</div>
</template>
<script>
import Tabs from './Components/Tabs.vue'

    export default {
        components: { Tabs }
    }
</script>