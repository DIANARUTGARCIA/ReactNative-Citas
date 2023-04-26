import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTexto}>Nueva Cita</Text>
      </Pressable>
      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}>No hay pacientes aún</Text>
      ) : (
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Paciente item={item} />;
          }}
        />
      )}
      <Formulario
        modalVisible={modalVisible}
        onLongPress={() => setModalVisible(false)}
        setModalVisible={setModalVisible}
        setPacientes={setPacientes}
        pacientes={pacientes}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '500',
    marginTop: 10,
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  contenedor: {
    backgroundColor: '#f3F4F6',
    flex: 1,
  },
  btnNuevaCita: {
    backgroundColor: '#C939F4',
    padding: 15,
    marginTop: 20,
    borderRadius: 30,
    marginHorizontal: 35,
  },
  btnTexto: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
