import {observable, action, computed, makeObservable,autorun,reaction,when} from "mobx";

class MainStore
{
    @observable name = 'Mert';
    @observable surname = 'Buldur';

    constructor() {
        makeObservable(this);
        /*
        autorun(() => {
            alert(this.name);
        })

         */

        /*
        reaction(() => this.name,name  => {
            if(name == 'Ali'){
                alert('İsim Ali Oldu Bırakabilirsin');
            }
        })

         */



        when(() => this.name == 'Ali',()=>alert('isim Ali Oldu'));


    }

    @action getName(){
        return this.name;
    }

    @action setData(name,surname){
        this.name = name;
        this.surname = surname;
    }

    @computed get fullName(){
        return `${this.name} ${this.surname}`
    }

}

export default new MainStore();
