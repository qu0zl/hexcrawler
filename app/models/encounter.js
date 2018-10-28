import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    desc: DS.attr(),
    render() {
        return `${this.title}\n${this.desc ? this.desc : ""}`;
    },
});
