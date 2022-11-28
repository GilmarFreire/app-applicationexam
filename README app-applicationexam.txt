README aplicationExam

instalação do node
instalação do npm

instalação do expo-cli
npm install --global expo-cli

gerando a pasta do projeto
expo init app-applicationexam

instalação de dependencias
npm install react-native-elements --save
npm install --save react-native-vector-icons 
npm install @react-navigation/native --save
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack --save
npx expo install react-native-gesture-handler
npx expo install @react-native-masked-view/masked-view
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install react-native-masked-text --save
npx expo install @expo/html-elements
npx expo install expo-linear-gradient
npx expo install styled-components
npm install -g sharp-cli
npx expo prebuild



iniciando o projeto

npx expo start


biuld do projeto
sera necessario  instalação da EAS
npm install -g eas-cli

configure o projeto
eas build:configure
apos alterar o arquivo eas.json
eas.build para a loja de aplicativos e...
eas build -p android --profile preview
para gerar o apk

