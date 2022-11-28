import { View } from "react-native";
import { Text } from "react-native-elements";
import  {  H2, P, A, H5}  from  '@expo/html-elements' ;
import styles from "../styles/MainStyle";

export default function TermosDeUso() {
    return(
        <View style={styles.containerTermos}>            
            
            <Text style={styles.tituloTermos}><H2>Política Privacidade</H2></Text>
            <Text style={styles.paragraphTermos}>
            <P >A sua privacidade é importante para nós. É política do app-applicationExam respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <A href="http://localhost:19000">app-applicationExam</A>, e outros sites que possuímos e operamos.</P>
            <P> Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado. </P> 
            <P>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</P> <P>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</P>
            <P> O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <A href="https://privacidade.me/" target='_BLANK'>políticas de privacidade</A>. </P> <P>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</P>
            <P>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</P><H5>Compromisso do Usuário</H5> <P>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o app-applicationExam oferece no site e com caráter enunciativo, mas não limitativo:</P> <P> O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <A href="https://privacidade.me/" target='_BLANK'>políticas de privacidade</A>. </P> <P>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</P>
            
            <P>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</P><H5>Compromisso do Usuário</H5> <P>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o app-applicationExam oferece no site e com caráter enunciativo, mas não limitativo:</P> 


            </Text>
        </View>        

        



    );
}