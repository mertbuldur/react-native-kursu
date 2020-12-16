import React from 'react';
import { SafeAreaView , View ,Image} from  'react-native';
import {ImageGallery} from '@nlabs/react-native-image-gallery';
export default class index extends React.Component
{
    render(){
        const FetchImage = [
            {
                image:'https://www.mertbuldur.com/public/profile.jpg',
                id:1,
                title:'Mert Buldur'
            },
            {
                image:'https://picsum.photos/id/237/200/300',
                id:2,
                title:'a'
            },
            {
                image:'https://picsum.photos/seed/picsum/200/300',
                id:3,
                title:'b'
            },
            {
                image:'https://picsum.photos/200/300?grayscale',
                id:4,
                title:'c'
            }
        ];
        var images = [];
        images = FetchImage.map((img)=> ({
                url:img.image,
                id:String(img.id),
                title:img.title
            })
        );

        console.log(images);


        return <SafeAreaView style={{ flex:1}}>
            <ImageGallery style={{ flex:1}} images={images} />
        </SafeAreaView>
    }
}
