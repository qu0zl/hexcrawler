import DS from 'ember-data';

function merge_data_arrays(a, b) {
    if (b["text"]) {
        if(a["text"])
            a["text"] = a["text"]+b["text"]
        else
            a["text"] = b["text"]
    }
    if (b["stats"]) {
        if(a["stats"])
            a["stats"] = a["stats"]+b["stats"]
        else
            a["stats"] = b["stats"]
    }
    return a;
}

export default DS.Model.extend({
    from: DS.attr('number'),
    to: DS.attr('number'),
    text: DS.attr(),
    encounters: DS.hasMany('encounter', {async: false, inverse:null}),
    tables: DS.hasMany('table', {async: false, inverse: null}),
    match(value_to_compare) {
        return value_to_compare >= this.from && value_to_compare <= this.to;
    },
    render() {
        var data={"text":"", "stats":""};
        if (this.text)
            data["text"] = this.text;

        if (this.encounters.firstObject) {
            var encounter_data = this.encounters.firstObject.render();
            data = merge_data_arrays(data, encounter_data);
        }
        if (this.tables.firstObject) {
            var table_data = this.tables.firstObject.roll();
            data = merge_data_arrays(data, table_data);
        }
        return data;
    },
});
