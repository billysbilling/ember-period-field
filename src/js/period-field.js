var i18nContext = require('i18n-context')('ember_period_field', require.resolve('../locales')),
    t = i18nContext.t,
    PeriodFieldMixin = require('./period-field-mixin');

module.exports = Em.Component.extend(PeriodFieldMixin, {
    template: require('../templates/period-field'),
    
    attributeBindings: ['style'],
    
    classNames: ['period-field'],
    
    classNameBindings: ['selector:focus'],

    width: null,
    
    style: function() {
        var s = [],
            width = this.get('width');
        if (width) {
            s.push('width:'+width+'px;');
        }
        return s.join(' ');
    }.property('width'),

    inputValue: function() {
        var value = this.get('value');
        if (value) {
            return value.get('name');
        } else {
            return t('all_time');
        }
    }.property('value.name')
});

module.exports.PeriodFieldMixin = PeriodFieldMixin;

module.exports.locale = i18nContext.locale;

module.exports.lang = function() {
    console.warn('.lang() is deprecated. Use .locale() instead');
    return i18nContext.locale.apply(null, arguments);
};