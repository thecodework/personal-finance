<template>
    <div id="mainContainer">
        <!-- Statusbar -->
        <f7-statusbar>
        </f7-statusbar>
        <!-- Left Panel -->
        <f7-panel layout="dark" left="" reveal="">
            <f7-view :dynamic-navbar="true" id="left-panel-view" main="" navbar-through="">
                <f7-navbar sliding="" title="John Doe" v-if="$theme.ios">
                </f7-navbar>
                <f7-pages>
                    <f7-page>
                        <f7-navbar sliding="" title="John Doe" v-if="$theme.material">
                        </f7-navbar>
                        <f7-list>
                            <f7-list-item link="/login/" link-close-panel="" link-view="#main-view" title="Profile">
                            </f7-list-item>
                            <f7-list-item link="/category/" link-close-panel="" link-view="#main-view" title="Settings">
                            </f7-list-item>
                            <f7-list-item link="/expense/" link-close-panel="" link-view="#main-view" title="About">
                            </f7-list-item>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-panel>
        <!-- Main Views -->
        <f7-views>
            <f7-view :dynamic-navbar="true" id="main-view" navbar-through="" url="/">
                <!-- iOS Theme Navbar -->
                <f7-navbar v-if="$theme.ios">
                    <f7-nav-left>
                        <f7-link icon="icon-bars" open-panel="left">
                        </f7-link>
                    </f7-nav-left>
                    <f7-nav-center sliding="">
                        Personal Finance
                    </f7-nav-center>
                </f7-navbar>
                <!-- Material Theme Navbar -->
                <f7-navbar v-if="$theme.material">
                    <f7-nav-left>
                        <f7-link icon="icon-bars" open-panel="left">
                        </f7-link>
                    </f7-nav-left>
                    <f7-nav-center sliding="">
                        Personal Finance
                    </f7-nav-center>
                    <f7-nav-right>
                        <f7-link>
                            <f7-icon f7="bookmark" size="20">
                            </f7-icon>
                        </f7-link>
                        <f7-link>
                            <f7-icon f7="search" size="20">
                            </f7-icon>
                        </f7-link>
                        <f7-link open-login-screen="#login-screen">
                            <f7-icon f7="collection" size="20">
                            </f7-icon>
                        </f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <f7-list form="">
                </f7-list>
                <tabs></tabs>
                <login :is-logged-in="isLoggedIn" @logged-in="isLoggedIn = true"></login>
                <a class="floating-button floating-button-to-popover open-popover color-purple" href="#">
                    <i class="icon icon-plus">
                    </i>
                </a>
                <div class="popover demo-popover">
                    <div class="popover-inner">
                        <div class="list-block">
                            <ul>
                                <li>
                                    <a class="item-content item-link" href="#">
                                        <div class="item-inner">
                                            <div class="item-title">
                                                Income
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a class="item-content item-link" href="#">
                                        <div class="item-inner">
                                            <div class="item-title">
                                                Expense
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </f7-view>
        </f7-views>
    </div>
</template>
<script>
    import Tabs from './Components/Tabs.vue'
    import Login from './Components/Login.vue'

    export default {
        data() {
            return {
                isLoggedIn: false
            }
        },
        components: { Tabs, Login }
    }
</script>