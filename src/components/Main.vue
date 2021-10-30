<template>
  <div class="hello">
    <h1 v-tooltip="{ content: tooltip1, classes: 'tooltipStyle1' }">{{ msg }}</h1>
    <p>
      <span
        v-tooltip.left-start="{ content: tooltip2, classes: 'tooltipStyle2' }"
      >Did I mention that?</span>
      </p>
    <p>
      <span
        v-tooltip.right-start="{ content: tooltip3, classes: 'tooltipStyle3' }"
      >"But hey, what if I love tooltips?"</span>
    </p>
    <p>
      Don't worry, I've got you covered.
      <br>
      <button
        class="rickButton"
        @click="rickThis"
      >
        Check it out.
      </button>
    </p>
    <Rick
      :class="{ rick: isActive }"
      :bla="passUrl"
    />
  </div>
</template>

<script>
import { VTooltip, VClosePopover } from 'v-tooltip'
import Rick from '@/components/Rick.vue'

export default {
  components: {
    Rick
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      tooltip1: 'So do I!',
      tooltip2: 'I really do.',
      tooltip3: 'Really? Totally.',
      isActive: true,
      bla: '0',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      passUrl: ''
    }
  },
  methods: {
    rickThis: function(){
      this.isActive = !this.isActive
      if (this.bla === '1') {
        this.bla = '0'
      }
      else {
        this.bla = '1'
      }
      this.passUrl = this.url.concat(this.bla)
    }
  },
  directives: {
    'tooltip': VTooltip,
    'close-popover': VClosePopover
  }
}
</script>