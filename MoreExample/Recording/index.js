import React from 'react';
import { View , Text,SafeAreaView , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AudioRecorderPlayer from "react-native-audio-recorder-player";
const audioRecorderPlayer = new AudioRecorderPlayer();
export default class index extends React.Component
{
    constructor() {
        super();
        this.state = {
            time: '00:00:00',
            start:false,
            url:'',
            playTime:'00:00:00',
            playDuration:'00:00:00',
            play:false
        }
    }


    onStart = async  () => {
        const result  = await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e)=>{
            this.setState({
                start:true,
                time:audioRecorderPlayer.mmssss(Math.floor(e.current_position))
            })
            return;
        });
    };


    onStop = async () => {
      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      this.setState({ url : result});
    };

    play = async () => {
      const result  = await audioRecorderPlayer.startPlayer();
      audioRecorderPlayer.addPlayBackListener((e)=>{
          if(e.current_position == e.duration){
              audioRecorderPlayer.stopPlayer();
          }
          this.setState({
              play:true,
              playTime:audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
              playDuration:audioRecorderPlayer.mmssss(Math.floor(e.duration)),
          });
          return;
      });

    };

    pause = async () => {
        this.setState({
            play:false
        })
      await audioRecorderPlayer.pausePlayer();
    };


    render(){
        return <SafeAreaView style={{ flex:1 }}>
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>{this.state.time}</Text>
                <TouchableOpacity onPress={(!this.state.start) ? this.onStart : this.onStop}>
                    <Icon color={(!this.state.start) ? 'black' : 'red'} name={(!this.state.start) ? "microphone" : "microphone-slash"} size={50} />
                </TouchableOpacity>

                {
                    this.state.url != '' &&
                        <View>
                            <Text>{this.state.playTime} - { this.state.playDuration}</Text>
                            <TouchableOpacity onPress={(!this.state.play) ? this.play : this.pause}>
                                <Text>{!this.state.play ? 'Dinle' : 'Durdur'}</Text>
                            </TouchableOpacity>
                        </View>
                }

            </View>
        </SafeAreaView>
    }
}
