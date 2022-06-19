import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Proveedores from '../interfaces/proveedores';

@Injectable({
  providedIn: 'root'
})
export class DataproveService {

  constructor(private firestore: Firestore) { }
  addProv(proveedor: Proveedores){
    const proveedorRef=collection(this.firestore, 'proveedores');
    return addDoc(proveedorRef, proveedor);
  }

  getProv():Observable<Proveedores[]>{
    const proveedorRef=collection(this.firestore, 'proveedores');
    return collectionData(proveedorRef,{idField: 'id'}) as Observable<Proveedores[]>;
  }

  deleteProv(proveedor: Proveedores){
    const provDocRef=doc(this.firestore, `proveedores/${proveedor.id}`);
    return deleteDoc(provDocRef);

  }
}
