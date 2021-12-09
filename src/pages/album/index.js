import React, { useState } from 'react';

import { View, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

// import {Container, ContainerHeader, ContainerNavBar, Photo, GroupItemNavBar, ButtonFollow, ContainerInfoBand, BandName, BandFooter} from './styles.js'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faEllipsisV, faPlayCircle, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartFull } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faArrowAltCircleDown, faHouseBlank, faUser } from '@fortawesome/free-regular-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.js';

const Background = ({ children }) => {
    return (
        <LinearGradient colors={['#351230', '#fff0']} style={styles.Fundo}>
            {children}
        </LinearGradient>

    );
};

const Album = () => {
    const [iconConfigure] = useState({
        size: 20,
        color: '#fff'
    });

    return (

        <SafeAreaView style={styles.Container}>
            <ScrollView>
                <View style={styles.ContainerNavBar}>
                    <FontAwesomeIcon icon={faArrowLeft} size={17} color={`#fff9`} />
                </View>
                <Background></Background>
                <View style={styles.ContainerHeader}>
                    <View style={styles.ContainerTopo}>
                        <Image style={styles.Photo} source={require('../../img/albumsoundbar.png')} />
                    </View>
                    <View style={styles.ContainerInfoBand}>
                        <Text style={styles.AlbumName}>Contra o Tempo</Text>
                        <Text style={styles.BandName}>Último Sopro</Text>
                    </View>

                    <View style={styles.MenuUnder}>
                    <TouchableOpacity>
                        <View style={styles.LinhaHorizontal}>
                            <FontAwesomeIcon icon={faHeart} size={20} color={`#fff9`} style={styles.IconesHeader} />
                            <Text style={styles.TituloInfo}>Curtir</Text>
                        </View>
                    </TouchableOpacity>
                        <View style={styles.LinhaHorizontal}>
                            <FontAwesomeIcon icon={faUser} size={20} color={`#fff9`} style={styles.IconesHeader} />
                            <Text style={styles.TituloInfo}>Ver o artista</Text>
                        </View>
                        <View style={styles.LinhaHorizontal}>
                            <FontAwesomeIcon icon={faHeartFull} size={20} color={`#1ED760`} style={styles.IconesHeader} />
                            <Text style={styles.TituloInfo}>Você já curtiu todas as músicas</Text>
                        </View>
                        <View style={styles.LinhaHorizontal}>
                            <FontAwesomeIcon icon={faShareAlt} size={20} color={`#fff9`} style={styles.IconesHeader} />
                            <Text style={styles.TituloInfo}>Compartilhar</Text>
                        </View>
                    </View>

                    
                </View>
            </ScrollView>

        </SafeAreaView>


    );
};

export default Album;



// <SafeAreaView style={styles.Container}>
// <ScrollView>
//     <View style={styles.ContainerNavBar}>
//         <FontAwesomeIcon icon={faArrowLeft} size={19} color={`#fff9`} />
//     </View>
//     <Background></Background>
//     <View style={styles.ContainerHeader}>
//         <View style={styles.ContainerTopo}>
//             <Image style={styles.Photo} source={require('../../img/Usopro.png')} />
//             <Image style={styles.Soundbar} source={require('../../img/soundbar.png')} />
//         </View>
//         <View style={styles.ContainerInfoBand}>
//             <Text style={styles.AlbumName}>Contra o Tempo</Text>
//             <View style={styles.LinhaHorizontal}>
//                 {/* <Image style={styles.PhotoInfo} source={require('../../img/Usopro.png')} /> */}
//                 <Text style={styles.BandName}>Último Sopro</Text>
//             </View>
//             {/* <Text style={styles.BandFooter}>Single • 2019</Text> */}
//         </View>
//         <View style={styles.IconesHeaderContainer}>
//             <FontAwesomeIcon icon={faHeart} size={19} color={`#fff9`} style={styles.IconesHeader} />
//             <FontAwesomeIcon icon={faArrowAltCircleDown} size={19} color={`#fff9`} style={styles.IconesHeader} />
//             <FontAwesomeIcon icon={faEllipsisV} size={19} color={`#fff9`} />
//         </View>
//         <View style={styles.IconePlay}>
//             <FontAwesomeIcon icon={faPlayCircle} size={55} color={`#1ED760`} />
//         </View>
//         <View style={styles.LinhaHorizontal2}>
//             <Text style={styles.TituloMusica}>Contra o Tempo</Text>
//             <FontAwesomeIcon icon={faEllipsisV} size={15} color={`#fff9`} />
//         </View>
//         <Text style={styles.TituloBanda}>Último Sopro</Text>

//         <View style={styles.InfoEP}>
//             <Text style={styles.TituloInfo}>21 de Agosto de 2019</Text>
//             <Text style={styles.Duracao}>1 música • 4 min1s</Text>
//         </View>
//     </View>
// </ScrollView>