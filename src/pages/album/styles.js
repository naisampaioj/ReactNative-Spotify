import {StyleSheet} from 'react-native';
// import styled from 'styled-components/native';


const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#000',
    },

    Fundo:{
        position: 'absolute',
        // flex: 1,
        height: '10%',
        width: '100%',
        top: 0,
        left: 0,

    },

    ContainerNavBar:{ 
        padding: 10,
        position: 'absolute',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    LinhaHorizontal:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },


    ContainerHeader:{
        paddingHorizontal: 28,
    },

    ContainerTopo:{
        height: '44%',
        width: '63%',
        marginHorizontal: '17%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'flex-start',
        backgroundColor: '#000',
    },

    Photo:{
        alignItems: 'center',
        display: 'flex',
        marginTop: 28,
        width: 165,
        height: 200,
        borderColor: '#000',
    },

    ContainerInfoBand:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },

    MenuUnder:{
        marginTop: 2
    },


    AlbumName:{
        fontSize: 19,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 6,
    },

    BandName:{
        fontSize: 14,
        color: '#A6A6A6',
        marginBottom: 3,
    },


    IconesHeader:{
        marginRight: 20,
        marginTop: 5,
    },


    TituloInfo:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 7,
    },

    //BOTÕES
   

})

export default styles;

// export const ContainerHeader = styled.View``;

    // ButtonFollow :{
    //     marginRight: 20,
    //     color: '#fff',
    //     borderColor: '#fff',
    //     borderWidth: 1,
    //     paddingVertical: 6,
    //     // paddingHorizontal: 15,
    //     borderRadius: 6,
    // },


    // PhotoInfo:{
    //     height: 25,
    //     width: 25,
    //     borderRadius: 13,
    //     marginBottom: 11,
    // },


        // Soundbar:{
    //     display: 'flex',
    //     marginTop: 90,
    //     justifyContent: 'center',
    // },


        // IconePlay:{
    //     alignItems: 'flex-end',
    //     flexDirection: 'row-reverse',
    //     zIndex: 8,

    // },


        // LinhaHorizontal2:{
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },





        // GroupItemNavBar:{
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     color: '#fff',
    // },

        // BandFooter:{
    //     fontSize: 13,
    //     // textTransform: 'uppercase',
    //     paddingVertical: 0,
    //     color: '#A6A6A6',
    //     marginBottom: 11,
    // },

    
    // IconesHeaderContainer:{
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
    // },

       // TituloMusica:{
    //     color: '#1ED760',
    //     fontSize: 19,
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
    // },

    // TituloBanda:{
    //     color: '#A6A6A6',
    //     fontSize: 13,
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
    //     marginTop: 5,

    // },


       // Duracao:{
    //     color: '#fff',
    //     fontSize: 13,
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
        

    // },