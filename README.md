
# 🛍️ Fake Store App - React Native

Aplicativo de loja virtual criado com **React Native + Expo**, que consome a [Fake Store API](https://fakestoreapi.com/) para listar produtos, exibir detalhes e permitir favoritar itens localmente com `AsyncStorage`.

---

## ✅ Funcionalidades

- Tela de **login estática** (email/senha fixos)
- Lista de produtos consumida da **Fake Store API**
- Tela de **detalhes do produto**
- **Favoritar produtos**, com persistência via AsyncStorage
- Suporte a execução em **web**, **Android** e **iOS**

---

## 📁 Estrutura do Projeto

```
/FakeStoreApp
│
├── App.js
├── /screens
│   ├── LoginScreen.js
│   ├── ProductListScreen.js
│   └── ProductDetailScreen.js
├── /services
│   └── api.js
├── /storage
│   └── favorites.js
├── /styles (opcional)
│   └── *.js
├── package.json
└── README.md
```

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/FakeStoreApp.git
cd FakeStoreApp
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Instale o Expo (caso ainda não tenha)

```bash
npm install -g expo-cli
```

---

## ▶️ Rodar o projeto

### 🔁 Em qualquer plataforma

```bash
npx expo start
```

> Isso abrirá uma aba no navegador com opções para rodar no **emulador Android/iOS**, ou diretamente na **web**.

---

## 🌐 Executar no navegador (Web)

Se quiser rodar o app no navegador:

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
npx expo start --web
```

---

## ✅ Credenciais para Login

- **Email:** `admin@admin`
- **Senha:** `123456`

---

## 📦 API utilizada

- URL base: [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

---

## 💾 Armazenamento local

- Favoritos são salvos via **AsyncStorage** e persistem entre sessões do app.

---

## 🧪 Testado em

- ✅ Expo Go (Android)
- ✅ Navegador (Web)
- ✅ Emulador Android Studio

---

## 📸 Prints (opcional)

Adicione capturas de tela aqui, como:
- Tela de Login
- Lista de Produtos
- Tela de Detalhes com botão de favorito
