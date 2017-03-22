<template>
<div id="mainContainer">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true" main>
        <f7-navbar v-if="$theme.ios" title="John Doe" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="John Doe" sliding></f7-navbar>
            <f7-list>
              <f7-list-item link="/login/" title="Profile" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/category/" title="Settings" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/expense/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" url="/">
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
          <f7-nav-right>
            <f7-link><f7-icon f7="bookmark" size="20"></f7-icon></f7-link>
            <f7-link><f7-icon f7="search" size="20"></f7-icon></f7-link>
            <f7-link open-login-screen="#login-screen"><f7-icon f7="collection" size="20"></f7-icon></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-list form>
  <!-- Text Input -->
  <f7-list-item>
    <f7-input type="text" placeholder="Name"/>
  </f7-list-item>
  <!-- Password -->
  <f7-list-item>
    <f7-input type="password" placeholder="Password"/>
  </f7-list-item>
  ...
</f7-list>
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