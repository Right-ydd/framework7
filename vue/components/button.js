import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import F7Icon from './icon';
import __vueComponentTransformJSXProps from '../runtime-helpers/vue-component-transform-jsx-props.js';
import __vueComponentDispatchEvent from '../runtime-helpers/vue-component-dispatch-event.js';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
let __vueComponentPropsKeys;
function __vueComponentGetPropKeys(props) {
  __vueComponentPropsKeys = Object.keys(props);
  return props;
}
const ButtonProps = Utils.extend({
  noFastclick: Boolean,
  noFastClick: Boolean,
  text: String,
  tabLink: [
    Boolean,
    String
  ],
  tabLinkActive: Boolean,
  href: {
    type: [
      String,
      Boolean
    ],
    default: '#'
  },
  round: Boolean,
  roundMd: Boolean,
  roundIos: Boolean,
  fill: Boolean,
  fillMd: Boolean,
  fillIos: Boolean,
  big: Boolean,
  bigMd: Boolean,
  bigIos: Boolean,
  small: Boolean,
  smallMd: Boolean,
  smallIos: Boolean,
  raised: Boolean,
  outline: Boolean,
  active: Boolean,
  disabled: Boolean
}, Mixins.colorProps, Mixins.linkIconProps, Mixins.linkRouterProps, Mixins.linkActionsProps);
export default {
  name: 'f7-button',
  props: __vueComponentGetPropKeys(ButtonProps),
  render() {
    var _h = this.$createElement;
    const self = this;
    let iconEl;
    let textEl;
    const {text, icon, iconMaterial, iconIon, iconFa, iconF7, iconIfMd, iconIfIos, iconColor, iconSize} = self.props;
    if (text) {
      textEl = _h('span', [text]);
    }
    if (icon || iconMaterial || iconIon || iconFa || iconF7 || iconIfMd || iconIfIos) {
      iconEl = _h(F7Icon, {
        attrs: {
          material: iconMaterial,
          ion: iconIon,
          fa: iconFa,
          f7: iconF7,
          icon: icon,
          ifMd: iconIfMd,
          ifIos: iconIfIos,
          color: iconColor,
          size: iconSize
        }
      });
    }
    return _h('a', __vueComponentTransformJSXProps({
      style: self.props.style,
      class: self.classes,
      ...self.attrs,
      on: { click: self.onClick.bind(self) },
      attrs: { id: self.props.id }
    }), [
      iconEl,
      textEl,
      this.$slots['default']
    ]);
  },
  computed: {
    attrs() {
      const self = this;
      const {href, target, tabLink} = self.props;
      let hrefComputed = href;
      if (href === true)
        hrefComputed = '#';
      if (href === false)
        hrefComputed = undefined;
      return Utils.extend({
        href: hrefComputed,
        target,
        'data-tab': Utils.isStringProp(tabLink) && tabLink || undefined
      }, Mixins.linkRouterAttrs(self), Mixins.linkActionsAttrs(self));
    },
    classes() {
      const self = this;
      const {noFastclick, noFastClick, tabLink, tabLinkActive, round, roundIos, roundMd, fill, fillIos, fillMd, big, bigIos, bigMd, small, smallIos, smallMd, raised, active, outline, disabled} = self.props;
      return Utils.classNames(self.props.className, {
        button: true,
        'tab-link': tabLink || tabLink === '',
        'tab-link-active': tabLinkActive,
        'no-fastclick': noFastclick || noFastClick,
        'button-round': round,
        'button-round-ios': roundIos,
        'button-round-md': roundMd,
        'button-fill': fill,
        'button-fill-ios': fillIos,
        'button-fill-md': fillMd,
        'button-big': big,
        'button-big-ios': bigIos,
        'button-big-md': bigMd,
        'button-small': small,
        'button-small-ios': smallIos,
        'button-small-md': smallMd,
        'button-raised': raised,
        'button-active': active,
        'button-outline': outline,
        disabled
      }, Mixins.colorClasses(self), Mixins.linkRouterClasses(self), Mixins.linkActionsClasses(self));
    },
    props() {
      return __vueComponentProps(this, __vueComponentPropsKeys);
    }
  },
  methods: {
    onClick(event) {
      this.dispatchEvent('click', event);
    },
    dispatchEvent(events, ...args) {
      __vueComponentDispatchEvent(this, events, ...args);
    }
  }
};