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


iniciando o projeto

npx expo start


biuld do projeto
sera necessario  instalação da EAS
npm install -g eas-cli

configure o projeto
eas build:configure
apos alterar o arquivo eas.json
eas update --branch preview --message "Update the app"

