class Biosensor{
    constructor(name){
        this.owner = name;
        this.heartRate = 0;
        this.live();
    }

    generateRandomBetween(min, max) {
        return parseInt(Math.random() * (max - min) + min);

    }

    beat(){
        let hr=this.generateRandomBetween(60,70);
        this.heartRate=hr;
        console.log('[Owner]:'+this.owner+' ---- [HR]: ' +this.heartRate)
    }
    live(){
        setInterval(()=>{this.beat()},1000);
    }
}
let james=new Biosensor('james')
let sara=new Biosensor('Sara')

