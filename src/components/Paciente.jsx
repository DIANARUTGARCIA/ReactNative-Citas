import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

// type Props = {
//   item: any;
//   setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
//   pacienteEditar: (n: number) => void;
// };

const Paciente = ({
  item,
  setModalVisible,
  pacienteEditar,
  pacienteEliminar,
  setModalPaciente,
  setPaciente,
}) => {
  const {paciente, fecha, id} = item;

  const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha);
    return nuevaFecha.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Pressable
      onLongPress={() => {
        setModalPaciente(true);
        setPaciente(item);
      }}
    >
      <View style={styles.contenedor}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{paciente}</Text>
        <Text style={styles.fecha}>{formatearFecha(fecha)} </Text>

        <View style={styles.contenedorBotones}>
          <Pressable
            style={[styles.btn, styles.btnEditar]}
            onLongPress={() => {
              setModalVisible(true);
              pacienteEditar(id);
            }}
          >
            <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.btnEliminar]}
            onLongPress={() => {
              pacienteEliminar(id);
            }}
          >
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#94a3B8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  texto: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  fecha: {
    color: '#374151',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: '#1986E4',
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
  btnTexto: {
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#fff',
  },
});

export default Paciente;
