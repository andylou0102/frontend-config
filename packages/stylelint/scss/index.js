module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-hudochenkov/order',
    'stylelint-config-recommended-vue/scss',
  ],
  rules: {
    'scss/at-import-partial-extension-blacklist': null,
    'scss/percent-placeholder-pattern': '^[a-z0-9-]*[a-z0-9]+$',
    'order/properties-alphabetical-order': null,
    'max-nesting-depth': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'selector-max-compound-selectors': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'selector-no-qualifying-type': null,
    'selector-class-pattern': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: [
          'v-deep',
          'v-global',
          'v-slotted',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'deep',
          'global',
          'slotted',
          'export',
        ],
      },
    ],
  },
}
