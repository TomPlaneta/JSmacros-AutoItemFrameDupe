//Auto Item Frame Dupe for 6b6t by TomPlaneta

//Steps to reproduce:
//1. Place item you want dupe in item frame and in hot bar slot
//2. Aim yourself at the item frame
//3. Press bound key

let x = 10; //delay
let y = 0; //delay after dupe (I found it useful on server lag)
let z = 10; //number of turns

const reverse = !GlobalVars.getBoolean("ToggleScript");
GlobalVars.putBoolean("ToggleScript", reverse);
if (reverse) {
    Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
        .append("ItemFrameDupe").withColor(0x5)
        .append("]").withColor(0x7).append(" enabled").withColor(0xc)
        .build());
} else {
    Chat.log(Chat.createTextBuilder().append("[").withColor(0x7)
        .append("ItemFrameDupe").withColor(0x5)
        .append("]").withColor(0x7).append(" disabled").withColor(0xc)
        .build());
}
while (GlobalVars.getBoolean("ToggleScript")) {
       Time.sleep(y);
    for (let i = 0; i < z; i++) {
      Player.getPlayer().interact();
      Time.sleep(x);}
      Player.getPlayer().attack();
}
