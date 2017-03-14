<template>
  <f7-page tabbar-fixed namme="tabs">
    <f7-navbar back-link="Back" title="Tabs Routes" sliding></f7-navbar>

    <f7-block tabs>
      <f7-tab route-tab-id="tab1" />
      <f7-tab route-tab-id="tab2" />
      <f7-tab route-tab-id="tab3" />
    </f7-block>

    <f7-toolbar tabbar labels scrollable>
      <f7-link href="/account/" route-tab-link="#tab1" text="Account"></f7-link>
      <f7-link href="/expense/" route-tab-link="#tab2" text="Expense"></f7-link>
      <f7-link href="/category/" route-tab-link="#tab3" text="Category"></f7-link>
    </f7-toolbar>

  </f7-page>
</template>
<script>
import Accounts from './Accounts.vue'
import Expense from './Expense.vue'
import Categories from './Categories.vue'

  export default {
    components: { Accounts, Categories, Expense }
  }
</script>