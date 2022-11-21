import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image, ScrollView } from 'react-native';
import CustomApiHook from './CustomApiHook';
import { AsyncStorage } from 'react-native';
import { useEffect,useState } from 'react';


export default function Home() {
    const data = CustomApiHook('https://fakestoreapi.com/products');
    

    useEffect(()=>{
        
    },[])
    
  return (
   <ScrollView>
<FlatList
            data={(data)}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={
                ({item}) => (
<View style={{backgroundColor:'blue', margin:10, height:300,width:180,borderRadius:10, elevation:2,alignItems:'center' }}>
<Image source={{uri:item.image}} style={{height:100,width:100}} />
                    
                    <Text style={{fontSize:20, color:'white',margin:10}}> {item.title}</Text>
                    <Text style={{fontSize:20, color:'white',margin:10}}>  ${item.price}</Text>
                </View>

                
                )
                }
            
        />
    
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});