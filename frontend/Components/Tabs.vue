<template>
  <f7-page tabbar-fixed name="tabs">
    <!-- <f7-navbar back-link="Back" title="Tabs Routes" sliding></f7-navbar> -->
    <f7-block tabs swipeable>
      <f7-tab route-tab-id="calendar" active/>
      <f7-tab route-tab-id="daily" />
      <f7-tab route-tab-id="weekly" />
      <f7-tab route-tab-id="monthly" />
      <f7-tab route-tab-id="total" />
      <f7-tab route-tab-id="about" />
    </f7-block>

    <f7-toolbar tabbar top>
      <f7-link href="/calendar" route-tab-link="#calendar" text="Calendar"></f7-link>
      <f7-link href="/daily" route-tab-link="#daily" text="Daily"></f7-link>
      <f7-link href="/weekly" route-tab-link="#weekly" text="Weekly"></f7-link>
      <f7-link href="/monthly" route-tab-link="#monthly" text="Monthly"></f7-link>
      <f7-link href="/total" route-tab-link="#total" text="Total"></f7-link>

      
    </f7-toolbar>
    <f7-link href="/about" class="floating-button color-pink" route-tab-link="#about" >
      <i class="icon icon-plus"></i></f7-link>

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