import React from 'react';
import { Image } from 'react-native';

export default class Robot extends React.Component  {
    render(){
        return(
            <Image 
            source={{uri: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/119073268_3366410906809808_4588086748098080282_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=DEo4oIgV5d0AX-0W3rX&_nc_ht=scontent.fsgn2-3.fna&oh=83a028eef404647f580b69ce70c8323b&oe=5FA333AB"}
            }
            style={
                {width: 200, height: 200 }
            }
            >
            </Image>
        );
    }
}