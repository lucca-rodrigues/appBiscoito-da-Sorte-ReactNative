import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// import { Container } from './styles';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./img/fechado.png'),
    };
    
    this.verMensagem = this.verMensagem.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais doque muito conhecimento.',
      'o riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz,',
      'Ser ou não ser? Eis a Questão!',
      'Água mole em pedra dura, tanto bate até que fura. Não desista nunca!',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'Acredite em milagres, não dependa deles.'
    ];
  }


  verMensagem(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );
    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./img/aberto.png'),
    });
  }
  render(){
    return(
      <View style={styles.container}>
          <Image 
            style={styles.biscoito}
            source={this.state.img} 
          />
          <Text style={styles.fraseAleatoria}>{this.state.textoFrase}</Text>
          <TouchableOpacity style={styles.btn} onPress={this.verMensagem}>
            <View style={styles.btnArea}>
              <Text style={styles.btnText}>Ver mensagem da Sorte</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  biscoito:{
    width: 220,
    height: 220
  },
  fraseAleatoria: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 17,
    color: '#dd7b22',
    fontWeight:'bold',
  }
})
export default App;