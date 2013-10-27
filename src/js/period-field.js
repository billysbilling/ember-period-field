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

    inputValue: Em.computed.alias('value.name')
});

module.exports.PeriodFieldMixin = PeriodFieldMixin;