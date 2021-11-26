// @vendors
import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

// @components
import CurrencyInput from 'react-native-currency-input';
import Membership from './Membership';
import Experiences from './Experiences';

// @styles
import styles from './styles';

const Screen = () => {
  const [petMoney, setPetMoney] = useState(0);
  const [valueSaved, setValueSaved] = useState(0);
  const calculateSaved = () => {
    setValueSaved(parseInt(((petMoney * 15) / 100) * 12));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backArrow}
        source={require('../assets/arrow_down.png')}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.sectionCardContainer}>
            <Text style={styles.title}>
              LAIKA
              <Text style={styles.titleColorSecond}> Member</Text>
            </Text>
            <Text style={styles.textsub}>
              Conviertete en miembro, recibe beneficios exclusivos y dale lo
              mejor a tu mascota.
            </Text>
            <Image
              style={styles.imageCard}
              source={require('../assets/card_member.png')}
            />
          </View>
          <Membership />
          <View style={styles.saveMargin}>
            <Text style={styles.subtitles}>
              Calcula tu ahorro {'\n'}con la membresia
            </Text>
            <Text style={styles.textsub}>
              ¿Cuanto gastas al mes en tu peludo?
            </Text>
            <CurrencyInput
              prefix="$"
              onChangeValue={setPetMoney}
              value={petMoney}
              precision={0}
              style={styles.input}
              borderRadius={12}
              marginVertical={10}
            />
            <TouchableOpacity
              onPress={calculateSaved}
              style={styles.buttonPrimary}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.saveText}>
              Te ahorras {'\n'}
              <Text style={styles.titleColorSecond}>${valueSaved}</Text>
              {'\n'} al año
            </Text>
          </View>
          <Experiences />
        </View>
      </ScrollView>
    </View>
  );
};

export default Screen;
