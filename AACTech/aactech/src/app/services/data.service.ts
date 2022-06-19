import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Productos from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  addProducto(producto: Productos){
    const productoRef=collection(this.firestore, 'productos');
    return addDoc(productoRef, producto);
  }

  getProductos():Observable<Productos[]>{
    const productoRef=collection(this.firestore, 'productos');
    return collectionData(productoRef,{idField: 'id'}) as Observable<Productos[]>;
  }

  deleteProd(producto: Productos){
    const prodDocRef=doc(this.firestore, `productos/${producto.id}`);
    return deleteDoc(prodDocRef);

  }
}
