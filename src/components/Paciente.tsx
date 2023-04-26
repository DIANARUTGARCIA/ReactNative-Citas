import React, {FC} from 'react';
import {Text, View} from 'react-native';

type Props = {
  item: any;
};

const Paciente: FC<Props> = ({item}) => {
  const {paciente, fecha} = item;

  const formatearFecha = (fecha: Date) => {
    const nuevaFecha = new Date(fecha);
    return nuevaFecha.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <View>
      <Text>{paciente}</Text>
      <Text>{formatearFecha(fecha)} </Text>
    </View>
  );
};

export default Paciente;
