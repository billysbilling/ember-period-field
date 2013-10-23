module.exports = Em.Mixin.create({
    value: null,

    click: function() {
        this.showSelector();
    },
    
    showSelector: function() {
        var self = this,
            selector = this.get('selector');
        if (!selector) {
            selector = this.container.lookup('component:periodSelector');
            this.set('selector', selector);
            selector.set('value', this.get('value'));
            selector.on('select', this, this.selectorDidSelect);
            selector.one('willDestroyElement', function() {
                self.set('selector', null);
            });
            selector.show(this);
        }
    },
    
    hideSelector: function() {
        var selector = this.get('selector');
        if (selector) {
            selector.destroy();
        }
    },

    selectorDidSelect: function(value) {
        this.hideSelector();
        this.set('value', value);
    }
});
