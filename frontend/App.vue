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
            <f7-card>
              <!-- <f7-card-header>Card header content</f7-card-header> -->
              <f7-card-content><img src="http://wpidiots.com/html/writic/red-writic-template/css/img/demo-images/avatar1.jpg"></f7-card-content>
              <!-- <f7-card-footer>Card footer content</f7-card-footer> -->
            </f7-card>
            <!-- <f7-block inner>
              <p>Left panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title> -->
            <!-- <f7-list>
              <f7-list-item link="#/account/" title="About"></f7-list-item>
              <f7-list-item link="/category/" title="Form"></f7-list-item>
            </f7-list> -->
            <!-- <f7-block-title>Load page in main view</f7-block-title> -->
            <f7-list>
              <f7-list-item link="/account/" title="Account" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/category/" title="Category" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/expense/" title="Expense" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <!-- <f7-panel right cover layout="dark">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Right Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Right Panel" sliding></f7-navbar>
            <f7-block>
              <p>Right panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel> -->

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>Personal Finance</f7-nav-center>
          <!-- <f7-nav-right>
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
          </f7-nav-right> -->
        </f7-navbar>
        <!-- Pages -->
        <!-- <f7-pages> -->
          <!-- <f7-page> -->
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>Personal Finance</f7-nav-center>
              <!-- <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right> -->
            </f7-navbar>
            <!-- <f7-link href="/account/">Account</f7-link> -->
            <!-- Page Content -->
          <!-- </f7-page> -->
        <!-- </f7-pages> -->
      </f7-view>
    </f7-views>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view navbar-fixed>
        <f7-pages>
          <f7-page>
            <f7-navbar title="Popup">
              <f7-nav-right>
                <f7-link close-popup>Close</f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>

    <!-- Login Screen -->
    <!-- <f7-login-screen id="login-screen">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Login</f7-login-screen-title>
            <f7-list form>
              <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input name="username" placeholder="Username" type="text"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input name="password" type="password" placeholder="Password"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button title="Sign In" close-login-screen></f7-list-button>
              <f7-list-label>
                <p>Click Sign In to close Login Screen</p>
              </f7-list-label>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-login-screen> -->
        <!-- <div class="ui menu">
            <router-link to="/login" class="item">Login</router-link>

            <router-link to="/dashboard" class="item">Dashboard</router-link>
            <router-link to="/account" class="item">Add Account</router-link>
            <router-link to="/expense" class="item">Add Expense</router-link>
            <router-link to="/category" class="item">Add Category</router-link>
        </div>
        <div class="ui stackable three column centered grid">
          <div class="column"><router-view></router-view></div>
        </div>
    </div> -->
</div>
</template>
<script>
    export default {}
</script>