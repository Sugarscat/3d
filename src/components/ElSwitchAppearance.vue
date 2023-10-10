<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <label class="label-switch-appearance">
    <div class="toggle">
      <input class="toggle-state" type="checkbox" name="check"
             :checked="isChecked">
      <div class="indicator"></div>
      <span @click="toggleDark()"/>
    </div>
  </label>
</template>


<script>
import {useDark} from "@vueuse/core";

const isDark = useDark()
export default {
  name: "ElSwitchAppearance",
  data() {
    return {
      isChecked: isDark.valueOf().value
    }
  }
}
</script>

<style scoped>
.label-switch-appearance {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.label-switch-appearance span {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.label-switch-appearance .label-text {
  margin-left: 16px;
}

.label-switch-appearance .toggle {
  isolation: isolate;
  position: relative;
  height: 30px;
  width: 60px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--ui-box-shadow3);
}

.toggle-state {
  display: none;
}

.indicator {
  height: 100%;
  width: 200%;
  background: var(--ui-el-background);
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: var(--ui-box-shadow2);
}

.toggle-state:checked ~ .indicator {
  transform: translate3d(25%, 0, 0);
}
</style>