// @vendors
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// @components
import Collapsible from 'react-native-collapsible';

// @styles
import styles from './styles';

const Membership = () => {
  const [collapsedBenefits, setCollapsedBenefits] = useState({
    showBenefits: true,
  });
  return (
    <View style={styles.benefitsContainer}>
      <View>
        <Text style={styles.textTitle}>Beneficios los 365 dias del año</Text>
        <View style={styles.benefitsContain}>
          <Image
            style={styles.benefitsImages}
            source={require('../assets/Group_2533.png')}
          />
          <Text style={styles.benefitsText}>
            <Text style={styles.boldText}>15%</Text> de descuento en todos los
            productos
          </Text>
        </View>
        <View style={styles.benefitsContain}>
          <Image
            style={styles.benefitsImages}
            source={require('../assets/Group_2533.png')}
          />
          <Text style={styles.benefitsText}>
            Domicilio <Text style={styles.titleColorSecond}>gratis</Text>{' '}
            <Text style={styles.smallText}>*a partir de $120.000</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setCollapsedBenefits(oldObj => ({
            ...oldObj,
            showBenefits: !oldObj.showBenefits,
          }));
        }}
        style={styles.benefitsContain}>
        <Text style={styles.textTitle}>Ver otros beneficios</Text>
        <Image source={require('../assets/arrow_down.png')} />
      </TouchableOpacity>
      <Collapsible collapsed={collapsedBenefits.showBenefits} align="center">
        <View style={styles.benefitsContain}>
          <Image
            style={styles.benefitsImages}
            source={require('../assets/arrow.png')}
          />
          <Text style={styles.benefitsText}>Regalo de bienvenida</Text>
        </View>
        <View style={styles.benefitsContain}>
          <Image
            style={styles.benefitsImages}
            source={require('../assets/arrow.png')}
          />
          <Text style={styles.benefitsText}>
            Bono de Netflix para maratonear
          </Text>
        </View>
        <View style={styles.benefitsContain}>
          <Image
            style={styles.benefitsImages}
            source={require('../assets/arrow.png')}
          />
          <Text style={styles.benefitsText}>
            Beneficios en restaurantes y tiendas
          </Text>
        </View>
        <View style={styles.benefitsContain}>
          <Image
            style={styles.benefitsImages}
            source={require('../assets/arrow.png')}
          />
          <Text style={styles.benefitsText}>
            Por cada pedido que hagas, donaremos un porcentaje a una fundacion
          </Text>
        </View>
      </Collapsible>
      <View style={styles.separator} />
      <View style={styles.membershipView}>
        <View>
          <Text style={styles.textCost}>Paga unicamente</Text>
          <Text style={styles.textValue}>
            $69.900<Text style={styles.textNormal}>/año</Text>
          </Text>
        </View>
        <View style={styles.backgroundText}>
          <Text style={styles.membershipSaveText}>
            Lo que equivale a $5.260 el mes
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>Adquirir membresia</Text>
      </TouchableOpacity>
      <Text style={styles.textConditions}>Aplican terminos y condiciones</Text>
    </View>
  );
};

export default Membership;
