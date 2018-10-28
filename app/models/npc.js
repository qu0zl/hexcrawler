import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    HD: DS.attr(),
    HP: DS.attr(),
    AC: DS.attr(),
    attack: DS.attr(),
    move: DS.attr(),
    save: DS.attr('number'),
    AL: DS.attr(),
    CL: DS.attr('number'),
    XP: DS.attr('number'),
    equipment: DS.attr(),
    special: DS.attr(),
    spells: DS.attr(),
    renderAC() {
        if (typeof(this.AC) == "string")
            return this.AC
        return `${19-this.AC}[${this.AC}]`;
    },
    renderEquipment() {
        return this.equipment ? `<br>&nbsp<b>Equipment: </b>${this.equipment}` : "";
    },
    renderHP() {
        return this.HP ? `<b>HP </b>${this.HP}; ` : "";
    },
    renderSpells() {
        return this.spells ? `<br><b>Spells:</b> ${this.spells} ` : "";
    },
    renderSpecial() {
        return this.special ? `<b>Special:</b> ${this.special} ` : "";
    },
    render() {
        return `<br><br><b>${this.name}</b>: <b>HD </b>${this.HD}; <b>AC </b> ${this.renderAC()}; <b>Atk </b> ${this.attack}; <b>Move </b>${this.move}; <b>Save </b>${this.save}; <b>AL </b>${this.AL}; <b>CL/XP </b>${this.CL}/${this.XP}; ${this.renderSpecial()}${this.renderSpells()}${this.renderEquipment()}`
    },
});
