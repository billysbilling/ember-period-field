var i18n = require('i18n').module('ember_period_field', require.resolve('../locales')),
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
            return i18n.t('all_time');
        }
    }.property('value.name')
});

module.exports.PeriodFieldMixin = PeriodFieldMixin;

moduel.exports.lang = i18n.lang;