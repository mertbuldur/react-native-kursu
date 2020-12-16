import React from 'react';
import { SafeAreaView , View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
export default class index extends React.Component
{
    render() {
        const images = [
            'http://source.unsplash.com/1024x768/?nature',
            'http://source.unsplash.com/1024x768/?water',
            'http://source.unsplash.com/1024x768/?girl',
            'http://source.unsplash.com/1024x768/?tree',
        ];
        return <SafeAreaView>
            <SliderBox
                images={images}
                sliderBoxHeight={300}
                onCurrentImagePressed={index => alert(index)}
                dotColor={"blue"}
                inactiveDotColor={"red"}
                autoplay
                dotStyle={{
                    width:30,
                    height:30,
                    borderRadius:50
                }}
                currentImageEmitter={index => console.warn('current Pos is :'+index)}

            />
        </SafeAreaView>
    }
}
