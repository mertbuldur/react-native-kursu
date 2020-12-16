import React from 'react';
import { SafeAreaView, View,Text ,TouchableOpacity} from 'react-native';
import YouTube from "react-native-youtube";
export default class index extends React.Component
{
    constructor() {
        super();
        this.state = {
            play:false,
            currentTime:''
        }
    }
    YoutubeRef = React.createRef();
    render(){
        return <SafeAreaView>
            <YouTube
                ref={this.YoutubeRef}
                apiKey={"AIzaSyA8jR12GSitptm9xPx4K-zFPo6c3-it6zQ"}
                play={this.state.play}
                fullscreen={false}
                onReady={e => console.log(e)}
                onChangeState={e => console.log(e)}
                onChangeQuality={e => console.log(e)}
                onError={e => console.log(e)}
                showinfo={true}
                showFullscreenButton={false}
                videoId={"tnmSIHT7sj4"}
                style={{ height:300}}
                onProgress={(e) => {
                    this.setState({ currentTime : e.currentTime})
                }}
            />
            <Text>{this.state.currentTime}</Text>
            <TouchableOpacity onPress={()=>this.setState({ play:!this.state.play})}>
                <Text>{this.state.play ?  'Durdur' : 'Başlat'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.YoutubeRef.current.seekTo(1 * 60)}>
                <Text>İleri Sar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    }
}
