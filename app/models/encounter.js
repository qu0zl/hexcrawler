import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    desc: DS.attr(),
    npcs: DS.hasMany('npc', {async: false}),
    render() {
        var text = `<span class='encounter_title'><b>${this.title}</b>${this.desc ? ": " + this.desc : ""}</span>`;

        var stats = this.npcs.invoke("render");
        return { "text": text, "stats": stats };
    },
});
