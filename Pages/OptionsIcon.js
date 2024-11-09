import React from 'react';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const AvatarSelection = () => {
  const navigation = useNavigation();

  const avatars = [
    { url: "adventurer-neutral", label: "Adventurer Neutral", seed: "Avery" },
    { url: "avataaars", label: "Avataaars", seed: "Jameson" },
    { url: "big-smile", label: "Big Smile", seed: "Avery" },
    { url: "pixel-art-neutral", label: "Dylan", seed: "James" },
    { url: "open-peeps", label: "Open Peeps", seed: "Sophia" },
    { url: "pixel-art", label: "Pixel Art", seed: "Leo" },
  ];

  const renderAvatar = ({ item }) => (
    <TouchableOpacity 
      style={styles.avatarCard} 
      onPress={() => navigation.navigate('ViewIcon', { type: item.url, seed: item.seed, name: item.label })}
    >
      <SvgUri width="60" height="60" uri={`https://api.dicebear.com/9.x/${item.url}/svg?seed=${item.seed}`} />
      <Text style={styles.avatarText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.mainTitle}>Gerador de Icone</Text>
        <Text style={styles.descriptionText}>Crie avatares e ícones únicos e personalizados com seu nome! 🌟</Text>

        <View style={styles.avatarListContainer}>
          <Text style={styles.subtitleText}>Selecione o estilo do avatar:</Text>
          <FlatList
            data={avatars}
            keyExtractor={(item) => item.url}
            renderItem={renderAvatar}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    padding: 20,
    paddingTop: 30,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
  },
  avatarListContainer: {
    flex: 2,
    paddingVertical: 30,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0a1f44',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#312371',
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#312371',
  },
  avatarCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: '#312371',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default AvatarSelection;
