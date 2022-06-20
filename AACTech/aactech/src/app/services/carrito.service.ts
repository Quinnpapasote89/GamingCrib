import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Pedidos from '../interfaces/pedidos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private firestore: Firestore) { }

  addCarrito(pedido: Pedidos){
    const productoRef=collection(this.firestore, 'carrito');
    return addDoc(productoRef, pedido);
  }

  getCarrito():Observable<Pedidos[]>{
    const productoRef=collection(this.firestore, 'carrito');
    return collectionData(productoRef,{idField: 'id'}) as Observable<Pedidos[]>;
  }
  

}
