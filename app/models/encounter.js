import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    desc: DS.attr(),
    npcs: DS.hasMany('npc', {async: false}),
    render() {
        var text = `${this.title}\n${this.desc ? this.desc : ""}`;

        text += this.npcs.invoke("render");
        return text;
    },
});
