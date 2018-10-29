import DS from 'ember-data';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll(amount, type) {
    var count = 0;
    for (var i=0; i<amount; i++) {
        count += getRandomInt(1, type);
    }
    return count;
}

function replace_markers(text) {
    var matches = text.match(/!d\[.*?]/gi);
    if (matches) {
        for (var i=0; i<matches.length; i++) {
            var split = matches[i].split('[')[1].split(/d/i);
            var dice_type = split[1];
            var minus = dice_type.indexOf('-');
            var plus = dice_type.indexOf('+');
            if (minus != -1)
                minus = parseInt(dice_type.substring(minus+1));
            else
                minus = 0;
            if (plus != -1) {
                plus = parseInt(dice_type.substring(plus+1));
            }
            else
                plus = 0;

            var count = roll(split[0], parseInt(dice_type));
            count += plus;
            count -= minus;
            text = text.replace(matches[i], count);
        }
    }
    return text;
}

export default DS.Model.extend({
    from: DS.attr('number'),
    to: DS.attr('number'),
    encounters: DS.hasMany('encounter', {async: false}),
    tables: DS.hasMany('table', {async: false}),
    //childTables: DS.hasMany('table', {async: false}),
    match(value_to_compare) {
        return value_to_compare >= this.from && value_to_compare <= this.to;
    },
    render() {
        if (this.encounters.firstObject) {
            return replace_markers(this.encounters.firstObject.render());
        }
        return replace_markers(this.tables.firstObject.roll());
    },
});
