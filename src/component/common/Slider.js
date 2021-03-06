import React,{Component} from 'react';
import {Text,View} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import img1 from '../../image/img1.jpg';
import img2 from '../../image/img2.jpg';
import img3 from '../../image/img3.png';

class Slider extends Component{

    constructor(props){
        super(props)
        this.state={
             position:0,
             interval:null
        }
    }

    componentWillMount(){
        this.setState({interval: setInterval(()=>{
            if(this.state.position === 2){
                this.setState({position:0});
            }else{
                this.setState({position:this.state.position+1});

            }
        },3000)});


    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
    }

    render() {

        return(
                <ImageSlider images={[img1,img2,img3]}
                             position={this.state.position}
                             onPositionChanged={position=>{this.setState({position})}}
                />
            )
    }

}



export {Slider}