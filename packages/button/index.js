import FxButton from './src/button';

/* istanbul ignore next */
FxButton.install = function (Vue) {
  Vue.component(FxButton.name, FxButton);
};

export default FxButton;
