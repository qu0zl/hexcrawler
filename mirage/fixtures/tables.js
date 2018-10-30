export default [
    {id: "PrimaryPassage", title: 'Primary Passage', dicerollId: "1d40", tableItemIds: ["PP0","PP1","PP2","PP3","PP4","PP5","PP6","PP7","PP8","PP9","PP10","PP11","PP12","PP13","PP14","PP15","PP16","PP17","PP18","PP19","PP20","PP21"] },
    {id: "SecondaryPassage", title: 'Secondary Passage', dicerollId: "1d40", tableItemIds: ["SP0","SP1","SP2","SP3","SP4","SP5","SP6","SP7","SP8","SP9","SP10","SP11","SP12","SP13","SP14","SP15","SP16","SP17","SP18","SP19","SP20","SP21"] },
    {id: "Caravan", title: 'Caravan', dicerollId: "1d100", tableItemIds: ["Car1","Car2","Car3","Car4","Car5"], subTableIds: ["CaravanTreasure"] },
    {id: 'CaravanTreasure', title: 'Caravan Treasure', dicerollId: "1d20", tableItemIds:["CT1","CT2","CT3","CT4","CT5","CT6","CT7","CT8","CT9","CT10","CT11"] },
    {id: 'CaravanSlaves', title:'Caravan Slaves', dicerollId: '1d12', tableItemIds:['CSlave1','CSlave2','CSlave3','CSlave4','CSlave5','CSlave6','CSlave7'] },
];
