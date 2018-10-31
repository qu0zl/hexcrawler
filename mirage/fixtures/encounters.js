export default [
    {id: 'BlackDragon', title:'Black Dragon', npcIds:['BlackDragon']},
    {id: "PurpleWorm", title: "Purple Worm", npcIds:["PurpleWorm"]},
    {id: "GS", title: "Giant Slug", npcIds:["GiantSlug"]},
    {id: "GFB", title: "Giant Fire Beetles", desc: "!d[1d6+10] giant fire beetles", npcIds:["GFB"]},
    {id: "sGFB", title: "Giant Fire Beetles", desc: "!d[1d4+1] giant fire beetles", npcIds:["GFB"]},
    {id: "Trolls", title: "Trolls", desc: "!d[1d4] troll(s) (groups of 4 or more have 50% chance for a <b>big leader with 8 HD</b>)", npcIds:["Troll","TrollLeader"] },
    {id: "Trolls+", title: "Trolls", desc: "!d[1d4+1] troll(s) plus a <b>big leader with 8 HD</b>", npcIds:["Troll","TrollLeader"] },
    {id: 'TwoHeadedTroll', title: 'Two Headed Troll', npcIds:['TwoHeadedTroll']},
    {id:'Nebunorne', title: 'Neburnone Demon', npcIds:['Nebunorne']},
    {id: "Demon", title: "Demon", desc: "A category !d[1d3] demon", npcIds:["Vrock","Hezrou","Glabrezu"]},
    {id: "Demon3-5", title: "Demon", desc: "A category !d[1d3+2] demon", npcIds:["Glabrezu","Nalfeshnee","Marilith"]},
    {id: "CL", title: "Cavern Lizards", desc: "!d[1d4] cavern lizard(s}", npcIds:["CavernLizard"]},
    {id: "CavernLizardsD8", title: "Cavern Lizards", desc: "!d[1d8] cavern lizard(s}", npcIds:["CavernLizard"]},
    {id: "GHL", title: "Ghouls", desc: "!d[1d8+8] ghouls led by !d[1d4+1] ghasts", npcIds:["Ghast","Ghoul"]},
    {id: "TRG", title: "Troglodytes", desc: "!d[2d10+10] troglodyte raiders with 5HD chieftain", npcIds:["Troglodyte","TroglodyteChieftain"]},
    {id: "Troglodytes+", title: "Troglodytes", desc: "!d[2d10+20] troglodyte raiders with 5HD chieftain", npcIds:["Troglodyte","TroglodyteChieftain"]},
    {id: "Troglodytes++", title: "Troglodytes", desc: "!d[2d10+20] troglodyte raiders with 2 5HD chieftains", npcIds:["Troglodyte","TroglodyteChieftain"]},
    {id: "BP", title: "Black Pudding", npcIds:["BlackPudding"]},
    {id: "GO", title: "Grey Ooze", npcIds:["GreyOoze"]},
    {id: "Wights", title: "Wights", desc: "!d[1d6] wight(s)", npcIds:["Wight"]},
    {id: "Xorn", title: "Xorn", desc: "!d[1d2] xorn", npcIds:["Xorn"]},
    {id: "Khryll", title: "Khryll", npcIds:["Khryll"]},
    {id: "Khrylls", title: "!d[1d2] Khryll", npcIds:["Khryll"]},
    {id: "D3Khryll", title: "!d[1d3] Khryll", npcIds:["Khryll"]},
    {id: "NT", title: "Neh-thalggu", npcIds:["Neh-thalggu"]},
    {id: "Shrooms", title: "Shrooms", desc: "!d[1d2] shroom(s) with !d[1d3] shambling mound servant(s)", npcIds:["Shroom","ShamblingMounds"]},
    {id: "1d4Shriekers", title:"Shriekers", desc: "!d[1d4] shriekers", npcIds:["Shrieker"]},
    {id: "Shriekers", title:"Shriekers", desc: "!d[1d4+2] shriekers", npcIds:["Shrieker"]},
    {id: "FB", title: "Fungus-bats", desc: "!d[4d6] fungus-bats", npcIds:["FungusBat"]},
    {id: "FB+", title: "Fungus-bats", desc: "!d[4d6+3] fungus-bats", npcIds:["FungusBat"]},
    {id: "FB++", title: "Fungus-bats", desc: "!d[4d8+4] fungus-bats", npcIds:["FungusBat"]},
    {id: "LengSpider", title: "Leng-Spider", desc: "1 leng-spider", npcIds:["LengSpider"]},
    {id: 'GiantSpiders', title:'!d[1d8] Giant Spiders', npcIds:['GiantSpider']},
    {id: '2d6GiantSpiders', title:'!d[2d6] Giant Spiders', npcIds:['GiantSpider']},
    {id: "Syanngg", title: "Syanngg", desc: "1 syanngg", npcIds:["Syanngg"]},
    {id: "DenizenOfLeng", title: "Denizen of Leng", desc: "1 denizen of Leng with !d[3d6] night-ghouls", npcIds:["DenizenOfLeng","NightGhouls"]},
    {id: "DenizenOfLeng+", title: "Denizens of Leng", desc: "!d[1d4] denizens of Leng with !d[1d6] night-ghouls", npcIds:["DenizenOfLeng","NightGhouls"]},
    {id: "LT", title: "Leng-troop", desc: "!d[1d4] denizen(s) of Leng", npcIds:["DenizenOfLeng"]},
    {id: "Duergar", title: "Duergar Squad", desc: "!d[1d6+6] duergar plus 3 sergeants and 1 leader", npcIds:["DuergarLeader","DuergarSergeant","Duergar"]},
    {id: "LengCaravan", title: "Leng Caravan", desc: "1 Leng Denizen Merchant, !d[1d2] Denizen guard(s), !d[1d4] Leng-Bats, !d[1d6] night-ghoul guards, !d[1d6+6] slaves, !d[1d6] cavern lizards.", npcIds:["LengMerchant","DenizenOfLeng","LengBats","NightGhouls","CavernLizard"]},
    {id: "DrowCaravan", title: "Drow Caravan", desc: "1 Drow Merchant, !d[1d6+6] Drow guards, !d[1d6] bugbears, !d[1d6+6] slaves, !d[1d6] cavern lizards.", npcIds:["DrowMerchant","DrowGuard","BugbearGuard","CavernLizard"]},
    {id: "DuergarCaravan", title: "Duergar Caravan", desc: "1 Duergar merchant, 10 duergar guards, !d[1d4+4] ogre guards, !d[1d6+6] pack-slaves", npcIds:['DuergarMerchant','DuergarGuard','OgreGuard']},
    {id: "SerpentCaravan", title: "Serpentfolk Caravan", desc: "1 Serpentfolk merchant, !d[1d4] serpentfolk guard(s), !d[1d10+6] troglodyte guards, !d[1d6+6] slaves, !d[1d6] cavern lizards.", npcIds:['SerpentfolkMerchant','SerpentfolkGuard','Troglodyte','CavernLizard']},
    {id: "DarkStalkerCaravan", title: "Dark Stalker Caravan of the !t[DarkfolkCulture] culture", desc: "3 dark stalkers, 1 dark stalker shaman, !d[4d6] dark creepers, !d[2d6+1] bugbear guards", npcIds:["DarkStalker","DarkStalkerShaman","DarkCreeper","BugbearGuard"]},
    {id: "DarkStalkers", title: "Dark Stalkers of the !t[DarkfolkCulture] culture", desc: "!d[1d2] dark stalkers each leading !d[1d6+2] dark creepers", npcIds:["DarkStalker","DarkCreeper"]},
    {id: 'CT1', title:"Cargo", desc: '!d[2d10] bars of platinum worth 250gp each'},
    {id: 'CT2', title:"Cargo", desc: '!d[3d10] gems worth 200gp each'},
    {id: 'CT3', title:"Cargo", desc: '!d[1d4] rolls of silk, unearthly quality, worth 2000gp each'},
    {id: 'CT4', title:"Cargo", desc: 'Cage of !d[1d4+4] adorable, furry little pet-things of unknown species or origin, worth 1000gp each.'},
    {id: 'CT5', title:"Cargo", desc: '!d[1d6+1] potions (determine randomly from tables in rulebook)'},
    {id: 'CT6', title:"Cargo", desc: '!d[1d6+8] potions (determine randomly from tables in rulebook)'},
    {id: 'CT7', title:"Cargo", desc: '!d[1d4] scrolls (determine randomly from tables in rulebook)'},
    {id: 'CT8', title:"Cargo", desc: '1 magic item of any kind (determine randomly from tables in rulebook)'},
    {id: 'CT9', title:"Cargo", desc: '2 magic items of any kind (determine randomly from tables in rulebook)'},
    {id: 'CT10', title:"Cargo", desc: '3 magic items of any kind (determine randomly from tables in rulebook)'},
    {id: 'SlaveTroglodyte', title:'Troglodyte Slave', npcIds:['Troglodyte']},
    {id: 'SlaveHuman', title:'Human Slave', npcIds:['HumanSlave']},
    {id: 'SlaveBugbear', title:'Bugbear Slave', npcIds:['Bugbear']},
    {id: 'SlaveDuergar', title:'Duergar Slave', npcIds:['DuergarSlave']},
    {id: 'SlaveOrc', title:'Orc Slave', npcIds:['Orc']},
    {id: 'SlaveDwarf', title:'Dwarf Slave', npcIds:['Dwarf']},
    {id: 'SlaveElf', title:'Elf Slave', npcIds:['Elf']},
    {id: 'GloomCrawler', title:'Gloom Crawler', npcIds:['GloomCrawler']},
    {id: 'AlarmGoblin', title:'1 Chained-up alarm-goblin', npcIds:['Goblin']},
    {id: 'GoblinDogs', title:'!d[1d6] goblin dogs', npcIds:['GoblinDog']},
    {id: 'Stirges', title:'!d[2d6] stirges', npcIds:['Stirge']},
    {id: 'GiantRats', title:'!d[3d6] giant rats', npcIds:['GiantRat']},
    {id: 'PoisonousSnakes', title:'!d[1d6+10] normal poisonous snakes', npcIds:['Viper','Cobra']},
    {id: 'WraithGroup', title:'!d[1d2] Wraith with !d[1d4] wights and !d[1d6] ghouls', npcIds:['Wraith','Wight','Ghoul']},
    {id: 'CaveCrickets', title:'!d[1d10] cave crickets', npcIds:['CaveCricket']},
    {id: 'GiantLeeches', title:'!d[2d4] giant leeches', npcIds:['GiantLeech']},
    {id: 'CarrionCreepers', title:'!d[1d4+1] carrion creepers', npcIds:['CarrionCreeper']},
];
