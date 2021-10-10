import flipperAnimationGenerator from './flipperAnimationGenerator.vue'


export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('flipper-animation-generator', flipperAnimationGenerator);
}

export default flipperAnimationGenerator;
