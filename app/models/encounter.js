import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    desc: DS.attr(),
    npcs: DS.hasMany('npc', {async: false}),
    render() {
        var stats="";
        var text = `<span class='encounter_title'><b>${this.title}</b>${this.desc ? ": " + this.desc : ""}</span>`;

        var stats_array = this.npcs.invoke("render");
        for (var i=0; i<stats_array.length; i++) {
            if (stats_array[i])
                stats = stats + stats_array[i];
        }
        return { "text": text, "stats": stats };
    },
});
