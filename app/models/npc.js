import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    HD: DS.attr(),
    AC: DS.attr(),
    attack: DS.attr(),
    move: DS.attr('number'),
    save: DS.attr('number'),
    AL: DS.attr(),
    CL: DS.attr('number'),
    XP: DS.attr('number'),
    equipment: DS.attr(),
    special: DS.attr(),
    renderAC() {
        if (typeof(this.AC) == "string")
            return this.AC
        return `${19-this.AC}[${this.AC}]`;
    },
    renderEquipment() {
        return this.equipment ? `<br>&nbsp<b>Equipment: </b>${this.equipment}` : "";
    },
    render() {
        return `<br><b>${this.name}</b>:<b>HD </b>${this.HD}; <b>AC </b> ${this.renderAC()}; <b>Atk </b> ${this.attack}; <b>Move </b>${this.move}; <b>Save </b>${this.save}; <b>AL </b>${this.AL}; <b>CL/XP </b>${this.CL}/${this.XP}; <b>Special</b>: ${this.special} ${this.renderEquipment()}`
    },
});
