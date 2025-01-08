import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Linking,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  { useRef } from 'react';


const Drawer = createDrawerNavigator();

const products = [
  {
    id: 1,
    name: 'HANASUI PERFECT CHEEK BLUSH & GO PINK Rp.35.500',
    imageUrl: 'https://hanasui.id/front-end/assets/img/product_image/2e86463249e54f6e3a86c0f115ee1f29.png',
  },
  {
    id: 2,
    name: 'HANASUI ACNE TREATMENT SERIES Rp.140.000',
    imageUrl: 'https://hanasui.id/front-end/assets/img/product_image/d5b75a2c220ecd24b512f0809f1088db.png',
  },
  {
    id: 3,
    name: 'HANASUI FLAWLESS GLOW 10 SERIES Rp.105.000',
    imageUrl: 'https://hanasui.id/front-end/assets/img/product_image/529593921fedabc102167ac588ce690b.png',
  },
  {
    id: 4,
    name: 'HANASUI POWER  BRIGHTEXPERT SERUM Rp.28.000',
    imageUrl: 'https://hanasui.id/front-end/assets/img/product_image/24eb7beac8b22a6325ecc9324db0eb1e.png',
  },
  {
    id: 5,
    name: 'HANASUI COLLAGEN WATER SUNSCREEN Rp.40.500',
    imageUrl: 'https://hanasui.id/front-end/assets/img/product_image/74afdc37b497e3f7bb227e7fe8f32af8.png',
  },
  {
    id: 6,
    name: 'Hanasui Serum Cushion Rp.76.500',
    imageUrl: 'https://hanasui.id/front-end/assets/img/product_image/d8d7f7ed1914585cef1a77a7fc4bcc68.png',
  },
  {
    id: 7,
    name: 'HANASUI PERFECT FIT SETTING POWDER Rp.40.500',
    imageUrl: 'https://hanasui.id/front-end/assets/img/product_image/uWcy7sLukWsGXVswbrBJfmlTnrX6mLuBTZobLpXJ.png',
  },
  {
    id: 8,
    name: 'HANASUI MATTEDORABLE LIP CREAM Rp.30.500',
    imageUrl: 'https://hanasui.id/front-end/assets/img/product_image/bf83c7d933d5f63108fb3b2c327f8cf3.png',
  },
  {
    id: 9,
    name: 'HANASUI MATEDORABLE LIP CREAM BOBAT Rp.30.500',
    imageUrl: 'https://hanasui.id/front-end/assets/img/product_image/e8bc9c71323f0464c07c023250d916a7.png',
  },
  {
    id: 10,
    name: 'HANASUI LIP SLEEPING SERUM Rp.27.500',
    imageUrl: 'https://hanasui.id/front-end/assets/img/product_image/PIz5Y9itloAZOlxa8K1hk7AhkxMpq40QJvJts8Xj.png',
  },
];

const HomeScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToProducts = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: 500, // Ganti nilai ini dengan posisi bagian produk
        animated: true,
      });
    }
  };

  const reasons = [
    {
      id: 1,
      title: 'Produk Berkualitas',
      description:
        'Hanasui menggunakan bahan-bahan berkualitas tinggi yang telah teruji secara klinis, sehingga memberikan hasil terbaik untuk kulit Anda.',
      imageUrl:
        'https://i0.wp.com/zaloraadmin.wpcomstaging.com/wp-content/uploads/2023/10/shade-cushion-hanasui.png?fit=1200%2C620&ssl=1',
    },
    {
      id: 2,
      title: 'Aman dan Halal',
      description:
        'Semua produk Hanasui telah tersertifikasi BPOM dan halal, memastikan keamanan dan kenyamanan pengguna.',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-K-LZXiGjZdlTLoZBC2IbO19zD2XCMJLuq7pQptUfYVAhgFbDRpIvp7xL8IPCHEy3O68bpqVFnvukg1gqLqT30WhsDMi6YWuD1b4pUq3j3ApTZqh-i3A1et17S0nVcF1hWy8AxAEPOEZa/s2000/Hanasui+Flawless+Glow+10.jpg',
    },
    {
      id: 3,
      title: 'Harga Terjangkau',
      description:
        'Kami menyediakan produk-produk berkualitas tinggi dengan harga yang ramah di kantong.',
      imageUrl:
        'https://www.beautyhaul.com/assets/uploads/HANASUI_FOUNDATION.jpg',
    },
    {
      id: 4,
      title: 'Cruelty-Free',
      description:
        'Hanasui mendukung konsep cruelty-free, sehingga produk kami tidak melibatkan hewan dalam pengujian.',
      imageUrl:
        'https://garuda.industry.co.id/uploads/berita/detail/58779.jpg',
    },
    {
      id: 5,
      title: 'Layanan Pelanggan Unggul',
      description:
        'Kami memberikan pelayanan yang ramah dan responsif untuk memenuhi kebutuhan pelanggan.',
      imageUrl:
        'https://image.popbela.com/content-images/post/20231102/db4197b89cf4c81613d8a900921f614c.jpg?width=1600&format=webp&w=1600',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={scrollViewRef}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={{
              uri: 'https://media.suara.com/pictures/653x366/2023/02/17/22796-ragam-produk-hanasui.jpg',
            }}
            style={styles.heroImage}
          />
          <Text style={styles.heroHeading}>HANASUI OFFICIAL SHOP</Text>
          <Text style={styles.heroParagraph}>
            Temukan produk terbaik dengan harga terjangkau.
          </Text>
          <TouchableOpacity style={styles.heroButton} onPress={scrollToProducts}>
            <Text style={styles.heroButtonText}>Lihat Produk</Text>
          </TouchableOpacity>
        </View>

        {/* Tentang Kami Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.sectionHeading}>Tentang Kami</Text>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/170111971?v=4' }}
            style={styles.profileImage}
          />
          <Text style={styles.aboutText}>Nama: Bella Nurullita</Text>
          <Text style={styles.aboutText}>NIM: 222303004</Text>
          <Text style={styles.aboutText}>
            Alamat: Jl. Cempaka Putih No24 Jakarta Pusat, Indonesia
          </Text>
          <Text style={styles.aboutText}>
            Hanasui adalah merek kosmetik lokal yang memproduksi produk perawatan wajah, tubuh, dan rambut. Produk-produk Hanasui diklaim aman, halal, dan sudah tersertifikasi BPOM. Hanasui juga mengusung konsep cruelty free, sehingga tidak melibatkan hewan dalam proses pengujian produknya.
          </Text>
        </View>

        {/* Produk Kami Section */}
        <View style={styles.productsSection}>
          <Text style={styles.sectionHeading}>Produk Kami</Text>
          <View style={styles.productGrid}>
            {products.map((product) => (
              <View key={product.id} style={styles.productCardGrid}>
                <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <TouchableOpacity style={styles.orderButton}>
                  <Text style={styles.orderButtonText}>Pesan</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Kenapa Pilih Kami Section */}
        <View style={styles.whychooseusSection}>
          <Text style={styles.sectionHeading}>Kenapa Pilih Kami?</Text>
          <View style={styles.reasonsContainer}>
            {reasons.map((reason) => (
              <View key={reason.id} style={styles.reasonCard}>
                <Image
                  source={{ uri: reason.imageUrl }}
                  style={styles.reasonImage}
                />
                <Text style={styles.reasonTitle}>{reason.title}</Text>
                <Text style={styles.reasonDescription}>{reason.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Hubungi Kami Section */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionHeading}>Hubungi Kami</Text>
          <TextInput placeholder="Nama" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput
            placeholder="Pesan"
            style={[styles.input, styles.messageInput]}
            multiline
          />
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Kirim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.whatsappButton}
            onPress={() => {
              const phoneNumber = '628123456789';
              const url = `https://wa.me/${phoneNumber}`;
              Linking.openURL(url);
            }}
          >
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
              }}
              style={styles.whatsappIcon}
            />
            <Text style={styles.whatsappText}>Hubungi Kami di WhatsApp</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};


const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Tentang Kami */}
        <View style={styles.aboutSection}>
          <Text style={styles.sectionHeading}>Tentang Kami</Text>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/170111971?v=4' }}
            style={styles.profileImage}
          />
          <Text style={styles.aboutText}>Nama: Bella Nurullita</Text>
          <Text style={styles.aboutText}>NIM: 222303004</Text>
          <Text style={styles.aboutText}>
            Alamat: Jl. Cempaka Putih No24 Jakarta Pusat, Indonesia
          </Text>
        </View>

        {/* Tentang Produk */}
        <View style={styles.aboutProductSection}>
          <Text style={styles.sectionHeading}>Tentang Produk</Text>
          <View style={styles.productContent}>
            {/* Foto Produk */}
            
            {/* Deskripsi Produk */}
            <Text style={styles.aboutDescription}>
              Hanasui adalah merek kosmetik lokal yang memproduksi produk perawatan wajah, tubuh, dan rambut. Produk-produk Hanasui diklaim aman, halal, dan sudah tersertifikasi BPOM. Hanasui juga mengusung konsep cruelty free, sehingga tidak melibatkan hewan dalam proses pengujian produknya.
            </Text>
          </View>
        </View>

        {/* Visi Misi */}
        <View style={styles.visionMissionSection}>
          <Text style={styles.sectionHeading}>Hanasui Official Shop</Text>
          <Text style={styles.visionText}>
            <Text style={{ fontWeight: 'bold' }}>Visi: </Text>
            {'\n'}
            Menjadi merek kosmetik lokal yang terpercaya dan terkemuka di Indonesia, yang memberikan produk berkualitas tinggi, aman, halal, dan inovatif untuk mempercantik setiap individu, serta mendukung keberlanjutan lingkungan melalui praktik bisnis yang ramah lingkungan.</Text>
          <Text style={styles.missionText}>
            <Text style={{ fontWeight: 'bold' }}>Misi: </Text>
            {'\n'}
            1. Memberikan Produk Berkualitas Menghadirkan produk kosmetik yang aman, halal, dan tersertifikasi BPOM untuk memenuhi kebutuhan perawatan kulit, tubuh, dan kecantikan konsumen. {'\n'}
            2. Inovasi Berkelanjutan Mengembangkan produk kosmetik yang berbasis pada penelitian dan teknologi terkini, dengan tetap mempertahankan prinsip ramah lingkungan dan cruelty-free. {'\n'}
            3. Mendukung Kepercayaan Diri Membantu pelanggan untuk tampil percaya diri melalui produk kecantikan yang terjangkau dan sesuai dengan kebutuhan pasar lokal maupun global. {'\n'}
            4. Pelayanan Konsumen Unggul Memberikan pelayanan yang cepat, ramah, dan memuaskan untuk menciptakan pengalaman belanja yang menyenangkan bagi konsumen. {'\n'}
            5. Pemberdayaan Lokal Berkontribusi pada pengembangan ekonomi lokal dengan memberdayakan tenaga kerja dan bahan baku lokal, serta mendukung komunitas melalui program sosial dan edukasi.
          </Text>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const WhyChooseUsScreen = () => {
  const reasons = [
    {
      id: 1,
      title: 'Produk Berkualitas',
      description:
        'Hanasui menggunakan bahan-bahan berkualitas tinggi yang telah teruji secara klinis, sehingga memberikan hasil terbaik untuk kulit Anda.',
      imageUrl:
        'https://i0.wp.com/zaloraadmin.wpcomstaging.com/wp-content/uploads/2023/10/shade-cushion-hanasui.png?fit=1200%2C620&ssl=1',
    },
    {
      id: 2,
      title: 'Aman dan Halal',
      description:
        'Semua produk Hanasui telah tersertifikasi BPOM dan halal, memastikan keamanan dan kenyamanan pengguna.',
      imageUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-K-LZXiGjZdlTLoZBC2IbO19zD2XCMJLuq7pQptUfYVAhgFbDRpIvp7xL8IPCHEy3O68bpqVFnvukg1gqLqT30WhsDMi6YWuD1b4pUq3j3ApTZqh-i3A1et17S0nVcF1hWy8AxAEPOEZa/s2000/Hanasui+Flawless+Glow+10.jpg',
    },
    {
      id: 3,
      title: 'Harga Terjangkau',
      description:
        'Kami menyediakan produk-produk berkualitas tinggi dengan harga yang ramah di kantong.',
      imageUrl:
        'https://www.beautyhaul.com/assets/uploads/HANASUI_FOUNDATION.jpg',
    },
    {
      id: 4,
      title: 'Cruelty-Free',
      description:
        'Hanasui mendukung konsep cruelty-free, sehingga produk kami tidak melibatkan hewan dalam pengujian.',
      imageUrl:
        'https://garuda.industry.co.id/uploads/berita/detail/58779.jpg',
    },
    {
      id: 5,
      title: 'Layanan Pelanggan Unggul',
      description:
        'Kami memberikan pelayanan yang ramah dan responsif untuk memenuhi kebutuhan pelanggan.',
      imageUrl:
        'https://image.popbela.com/content-images/post/20231102/db4197b89cf4c81613d8a900921f614c.jpg?width=1600&format=webp&w=1600',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.sectionHeader}>
          <Text style={styles.heading}>Kenapa Pilih Kami?</Text>
        </View>
        <View style={styles.reasonsContainer}>
          {reasons.map((reason) => (
            <View key={reason.id} style={styles.reasonCard}>
              <Image
                source={{ uri: reason.imageUrl }}
                style={styles.reasonImage}
              />
              <Text style={styles.reasonTitle}>{reason.title}</Text>
              <Text style={styles.reasonDescription}>{reason.description}</Text>
            </View>
          ))}
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
const ProductsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.productsSection}>
          <Text style={styles.sectionHeading}>Produk Kami</Text>
          <View style={styles.productGrid}>
            {products.map((product) => (
              <View key={product.id} style={styles.productCardGrid}>
                <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <TouchableOpacity style={styles.orderButton}>
                  <Text style={styles.orderButtonText}>Pesan</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const ContactScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contactSection}>
          <Text style={styles.sectionHeading}>Hubungi Kami</Text>
          <TextInput placeholder="Nama" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput
            placeholder="Pesan"
            style={[styles.input, styles.messageInput]}
            multiline
          />
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Kirim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.whatsappButton}
            onPress={() => {
              const phoneNumber = '628123456789';
              const url = `https://wa.me/${phoneNumber}`;
              Linking.openURL(url);
            }}
          >
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
              }}
              style={styles.whatsappIcon}
            />
            <Text style={styles.whatsappText}>Hubungi Kami di WhatsApp</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    
      <Drawer.Navigator initialRouteName="Beranda">
        <Drawer.Screen name="Beranda" component={HomeScreen} />
        <Drawer.Screen name="Tentang Kami" component={AboutScreen} />
        <Drawer.Screen name="Produk" component={ProductsScreen} />
        <Drawer.Screen name="Kenapa Pilih Kami" component={WhyChooseUsScreen} />
        <Drawer.Screen name="Hubungi Kami" component={ContactScreen} />
      </Drawer.Navigator>
    
  );
};
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>Where to Buy?</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://wa.me/628123456789')}
          style={styles.footerIconContainer}
        >
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
            }}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://shopee.co.id')}
          style={styles.footerIconContainer}
        >
          <Image
            source={{
              uri: 'https://4.bp.blogspot.com/-g2LxbmLtmRc/Xgrl4p_uUSI/AAAAAAAABPg/HxSuSth-BxEFB9AJbvr6mCrXtkg35cjMwCLcBGAsYHQ/s1600/shopee%2B2.png',
            }}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.tokopedia.com')}
          style={styles.footerIconContainer}
        >
          <Image
            source={{
              uri: 'https://www.akun.biz/tips-bisnis/wp-content/uploads/2020/04/tokopedia-wishlist.jpg',
            }}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.lazada.co.id')}
          style={styles.footerIconContainer}
        >
          <Image
            source={{
              uri: 'https://s.viec.co/companies/149/logo.png?operation=crop&quality=100&width=1024&height=1024&version=1567595423',
            }}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  heroSection: { 
    alignItems: 'center', 
    paddingVertical: 25, 
    paddingHorizontal: 15, 
    backgroundColor: '#FFC0CB' 
  },
  heroImage: {
    width: '90%',
    height: 160,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  productContent: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    padding: 10,
  },
  heroHeading: { 
    fontSize: 20, 
    color: '#fff', 
    marginVertical: 8, 
    textAlign: 'center' 
  },
  sectionHeader: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#FFC0CB',
  },
  heroParagraph: { 
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 14, 
    marginBottom: 12 
  },
  heroButton: { 
    backgroundColor: '#fff', 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 20 
  },
  heroButtonText: { 
    color: '#4CAF50', 
    fontSize: 14, 
    fontWeight: 'bold' 
  },
  aboutSection: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginVertical: 12,
  },
  aboutText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginVertical: 8,
  },
  aboutProductSection: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  aboutDescription: {
    fontSize: 14,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 20,
  },
  videoSection: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  videoPlayer: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  visionMissionSection: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
  },
  visionText: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 6,
    textAlign: 'center',
    lineHeight: 20,
  },
  missionText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 20,
  },
  productsSection: { 
    paddingVertical: 20, 
    paddingHorizontal: 10 
  },
  sectionHeading: { 
    fontSize: 20, 
    marginBottom: 10, 
    textAlign: 'center' 
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCardGrid: {
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#FFC0CB',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    borderColor: '#FFC0CB',
    borderWidth: 1,
  },
  productImage: { 
    width: 120, 
    height: 120, 
    borderRadius: 10 
  },
  productName: { 
    marginVertical: 5, 
    fontSize: 12, 
    textAlign: 'center', 
    color: '#333' 
  },
  orderButton: { 
    backgroundColor: '#fff', 
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    borderRadius: 5 
  },
  orderButtonText: { 
    color: '#FFC0CB', 
    fontSize: 12 
  },
  contactSection: { 
    paddingVertical: 20, 
    paddingHorizontal: 15 
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    padding: 10,
    fontSize: 14,
  },
  messageInput: { 
    height: 90, 
    textAlignVertical: 'top' 
  },
  contactButton: { 
    backgroundColor: '#FFC0CB', 
    paddingVertical: 10, 
    borderRadius: 5 
  },
  contactButtonText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 14 
  },
  whatsappButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#25D366',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  whatsappIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  whatsappText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  footerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  whychooseusSection: {
    padding: 20,
    alignItems: 'center',
  },
  whyUsText: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
  reasonsContainer: {
    padding: 15,
  },
  reasonCard: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  reasonImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  reasonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  reasonDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});


export default App;
