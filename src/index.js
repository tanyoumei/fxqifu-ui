import Button from '../packages/button/index.js';
const components = [Button]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const expo = {
  version: '1.0.0',
  Button
}

export {
  Button
}

export default expo