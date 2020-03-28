import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import {composeAsync} from 'expo-mail-composer';


import styles from './styles';
import logoImg from '../../assets/logo.png'


export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;

    const message = `ola ${incident.name}, Estou entrando em contato pois gostaria de ajudar no cado "${incident.title}" com o valor de R$ ${incident.value},00`;
    
    function navigationBack(){
        navigation.goBack();
    }

    function sendMail(){
        composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name={'arrow-left'} size={28} color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
            
                <Text style={styles.incidentProperty, {marginTop: 0}}>ONG:</Text>
    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ {incident.value},00</Text>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle} >Salve o Dia</Text>
                <Text style={styles.heroTitle} >Salve o heroi desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato</Text>
                
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendWatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>

                    </TouchableOpacity>


                </View>
            </View>
        </View>        
    );
}