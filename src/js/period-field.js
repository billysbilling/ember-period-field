var PeriodFieldMixin = require('./period-field-mixin');

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
            return t('period_selector.all');
        }
    }.property('value.name')
});

module.exports.PeriodFieldMixin = PeriodFieldMixin;