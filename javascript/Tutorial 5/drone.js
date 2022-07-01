// parent class Dron
class Drone{
    constructor(type='dron', speed=0, battery=100){
        this.type = type;
        this.speed = speed;
        this.battery = battery;
        this.owners = [];
    }
}

class CivilDrone extends Drone{
    constructor(type='civil dron', speed=50 , battery=100){
        super(type,speed,battery);
        this.owners = [];
    }

    registerDroneOwner(deviceId,fullname,address){
        this.owners.push({
            type:this.type,
            speed:this.speed,
            battery:this.battery,
            deviceId,
            fullname,
            address
        })
    }

    getDronOwner(){
        return this.owners;
    }
}

class MilitaryDrone extends Drone{
    constructor(type='military drone', speed=150,battery=100){
        super(type,speed,battery);
        this.owners = [];
    }

    registerDroneOwner(deviceId,fullname,address){
        this.owners.push({
            type:this.type,
            speed:this.speed,
            battery:this.battery,
            deviceId,
            fullname,
            address
        })
    }

    getDronOwner(){
        return this.owners;
    }
}

let civil = new CivilDrone();
civil.registerDroneOwner('dron001','Ahmad','Hasselt');
civil.registerDroneOwner('dron002','Reza','Liege');
civil.registerDroneOwner('dron005','Mahdi','Everywhere');
console.log(civil.getDronOwner());

let military = new MilitaryDrone();
military.registerDroneOwner('Alpha','MOD','Kabul');
military.registerDroneOwner('Delta','NDS','Istanbul');
military.registerDroneOwner('Beta','Police Department','Limburg');
console.log(military.getDronOwner());