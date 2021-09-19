import React from 'react';
import {View, StyleSheet} from 'react-native'
import Field from './Field';

export default props => { //Recebe o campo minado criado em functions
    //transforma um array de objetos(fields) em um array do mesmo tamanho com objetos JSX
    const rows= props.board.map((row, r)=>{
        const columns = row.map((field, c)=>{
            return <Field {...field} key={c}/>
        })
        return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container:{
        // flexDirection: 'row',
        backgroundColor: '#EEE',
    }
})