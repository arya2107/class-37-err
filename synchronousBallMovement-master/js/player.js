class Player{
constructor(){
this.index=null;
this.distance=0
this.name=null;
}
getCount(){
    var ref=database.ref("playerCount")
    ref.on("value",function(data){
    playerCount=data.val()
    })
    }
    updateCount(count){
        var ref=database.ref("/")
        ref.update({
        playerCount:count
        })
    
        
    }
    update(){
    var index="players/player"+this.index
    database.ref(index).set({
        name:this.name,
        distance:this.distance
    })
    }
    static allPlayersInfo(){
    var ref=database.ref("players")
    ref.on("value",(data)=>{
        allPlayers=data.val()
    })
    }
}