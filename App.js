
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Kartu profil utama */}
      <View style={styles.kartu}>

        {/* Foto profil */}
        <Image
          source={require('./assets/profile.jpg')}
          style={styles.foto}
        />

        {/* Nama lengkap */}
        <Text style={styles.nama}>CECILIA </Text>

        {/* NIM dan program studi */}
        <Text style={styles.nim}>
          253303620009 · Sistem Informasi
        </Text>

        {/* Judul skill */}
        <Text style={styles.judul}>MY SKILLS</Text>

        {/* Daftar skill */}
        <View style={styles.tagContainer}>
          <Text style={[styles.tag, styles.tagBiru]}>Canva</Text>
          <Text style={[styles.tag, styles.tagUngu]}>MS Word</Text>
          <Text style={[styles.tag, styles.tagPink]}>Drawing</Text>
        </View>

        {/* Motto */}
        <Text style={styles.quote}>
          "dimana bumi dipijak,disitu kita dipajak."
        </Text>

        {/* Tombol bonus */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Hubungi Saya</Text>
        </Pressable>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// Pengaturan desain aplikasi
const styles = StyleSheet.create({

  // Tampilan layar utama
  container: {
    flex: 1,
    backgroundColor: '#F3EEFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  // Kartu profil
  kartu: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 28,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#6B4EFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  // Foto profil lingkaran
  foto: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#B69AFF',
    marginBottom: 18,
  },

  // Nama
  nama: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#493477',
    marginBottom: 6,
  },

  // Identitas mahasiswa
  nim: {
    fontSize: 13,
    color: '#817493',
    marginBottom: 22,
    textAlign: 'center',
  },

  // Judul skill
  judul: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#75609D',
    marginBottom: 12,
    letterSpacing: 2,
  },

  // Wadah skill
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 9,
    marginBottom: 22,
  },

  // Bentuk lencana
  tag: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 15,
    overflow: 'hidden',
  },

  tagBiru: {
    backgroundColor: '#7986CB',
  },

  tagUngu: {
    backgroundColor: '#9575CD',
  },

  tagPink: {
    backgroundColor: '#D88BBF',
  },

  // Motto
  quote: {
    fontSize: 13,
    color: '#9585AA',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 24,
  },

  // Tombol hubungi saya
  button: {
    backgroundColor: '#8E70CC',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

});
