import { observable,action,makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationService from '../config/NavigationService';
class AuthenticateStore
{
    token = null;
    constructor() {
        makeAutoObservable(this,{
            token:observable,
            saveToken:action,
            getToken:action,
            removeToken:action
        })
    }

    async saveToken(token){
        try {
            await AsyncStorage.setItem('token', token);
            this.token = token;

            this.redirectControl();



        } catch (error) {
            // Error saving data
        }
    }

    redirectControl = () => {
        console.log(this.token);
        if(!this.token){
            NavigationService.navigate('Auth');
            return false;
        }
        NavigationService.navigate('App');
    };

    async getToken(){
        try {
            const token = await AsyncStorage.getItem("token");
            this.token = token;
            this.redirectControl();
        }
        catch (e) {
            console.log(e);
        }
    }

    async removeToken(){
        try {
            await AsyncStorage.removeItem('token');
            this.token = null;
            this.redirectControl();
        }
        catch (e) {
            console.log(e)
        }
    }
}

export default new AuthenticateStore();
