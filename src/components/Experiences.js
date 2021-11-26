// @vendors
import React from 'react';
import {View, Text, Image} from 'react-native';

// @styles
import styles from './styles';

const Experiences = () => {
  return (
    <View style={styles.experienceContainer}>
      <Text style={styles.subtitles}>
        Experiencias de LAIKA
        <Text style={styles.titleColorSecond}> Members</Text>
      </Text>
      <View style={styles.experiencesContain}>
        <View>
          <Image
            style={styles.experiencesImage}
            source={require('../assets/Rectangle_480.png')}
          />
        </View>
        <View style={styles.experienceTextAlign}>
          <Text style={styles.experiencesTitle}>
            Me converti en LaikaMember y todo se volvio mas facil.
          </Text>
          <Text style={styles.experiencesSubTitle}>
            Con los beneficios de LikaMember aseguro los mejores precios sumado
            de regalos que le encantan a mi perro y la comodidad de que todo
            llega a la puerta de mi casa.
          </Text>
        </View>
      </View>
      <View style={styles.experiencesContain}>
        <View>
          <Image
            style={styles.experiencesImage}
            source={require('../assets/image_14.png')}
          />
        </View>
        <View style={styles.experienceTextAlign}>
          <Text style={styles.experiencesTitle}>
            Soy LaikaMember y nunca habia logrado ahorrar tanto en las compras
            para mi mascota.
          </Text>
          <Text style={styles.experiencesSubTitle}>
            Con el descuento de la membresia me ahorro mas de 50 mil pesos al
            mes y 600 mil pesos al año.
          </Text>
        </View>
      </View>
      <View style={styles.experiencesContain}>
        <View>
          <Image
            style={styles.experiencesImage}
            source={require('../assets/image_13.png')}
          />
        </View>
        <View style={styles.experienceTextAlign}>
          <Text style={styles.experiencesTitle}>
            Me encanta ser parte del club LaikaMember.
          </Text>
          <Text style={styles.experiencesSubTitle}>
            Logro consentir mucho a mi mascota y ademas se que con mis compras,
            ayudo a mascotas necesitadas
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Experiences;
