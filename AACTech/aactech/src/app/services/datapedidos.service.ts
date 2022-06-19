import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Pedidos from '../interfaces/pedidos';

@Injectable({
  providedIn: 'root'
})
export class DatapedidosService {

  constructor(private firestore: Firestore) { }

  addpedido(pedido: Pedidos){
    const pedidoRef=collection(this.firestore, 'pedidos');
    return addDoc(pedidoRef, pedido);
  }

  getpedidos():Observable<Pedidos[]>{
    const pedidosRef=collection(this.firestore, 'pedidos');
    return collectionData(pedidosRef,{idField: 'id'}) as Observable<Pedidos[]>;
  }

  deletepedido(pedido: Pedidos){
    const pedidoDocRef=doc(this.firestore, `pedidos/${pedido.id}`);
    return deleteDoc(pedidoDocRef);

  }
}
