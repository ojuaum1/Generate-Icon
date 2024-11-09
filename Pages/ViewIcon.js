import React, { useEffect, useState } from "react";
import Svg, { SvgUri, LocalSvg, Path } from "react-native-svg";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";

// Importanto o svg
import svg from "./assets/angle-left-solid.svg";
import { useNavigation } from "@react-navigation/native";

const ViewIcon = ({ route }) => {
  const navigation = useNavigation();
  const [avatar, setAvatar] = useState("");
  const [search, setSearch] = useState({});

  useEffect(() => {
    setSearch({ ...route.params });
  }, []);

  useEffect(() => {
    SearchAvatar();
  }, [search.seed]);

  const SearchAvatar = () => {
    search.seed &&
      setAvatar(
        `https://api.dicebear.com/9.x/${search.type}/svg?seed=${search.seed}`
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="30px" height="30px" fill="#359dd2">
            <Path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </Svg>
        </TouchableOpacity>

        <Text style={[styles.title, styles.titleWhite]}>
          Tipo de avatar :{" "}
          <Text style={styles.title}>{search.type && search.name}</Text>
        </Text>

        <View style={styles.containerView}>
          <Text style={styles.texts}>
          "Informe o seu nome abaixo e crie um avatar exclusivo baseado em você!
          </Text>

          <TextInput
            onChangeText={(txt) => setSearch({ ...search, seed: txt })}
            style={styles.input}
            placeholder="Informe o nome"
            placeholderTextColor="#ffffff"
            keyboardType="text"
          />

          <View style={styles.container}>
            <SvgUri width="100%" height="100%" uri={avatar} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    alignContent: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f0f4ff',  // Fundo claro azulado
  },
  containerView: {
    flex: 2,
    gap: 15,
    paddingVertical: 30,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#312371',  // Azul escuro para destaque do título
  },
  titleWhite: {
    color: '#312371',  // Azul escuro para contraste com fundo claro
  },
  texts: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    color: '#4b4e6d',  // Cinza escuro para subtítulos ou textos
    lineHeight: 24,
  },
  input: {
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    color: '#FFFFFF',  // Texto azul escuro no input
    borderColor: '#5f63f2',  // Borda em tom roxo-azulado
    backgroundColor: '#312371',  // Fundo branco para o input
  },
  card: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: "#ffffff",  // Cartão branco
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5f63f2',  // Tom roxo-azulado para botão de ação
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',  // Texto branco no botão
    fontSize: 16,
    fontWeight: '600',
  },
});



export default ViewIcon;
