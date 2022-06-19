import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Ingresos from '../interfaces/ingresos';

@Injectable({
  providedIn: 'root'
})
export class DataingreService {
  constructor(private firestore: Firestore) { }
  addingreso(ingreso: Ingresos){
    const ingresoRef=collection(this.firestore, 'ingresos');
    return addDoc(ingresoRef, ingreso);
  }

  getingresos():Observable<Ingresos[]>{
    const ingresoRef=collection(this.firestore, 'ingresos');
    return collectionData(ingresoRef,{idField: 'id'}) as Observable<Ingresos[]>;
  }

  deleteingreso(ingreso: Ingresos){
    const ingDocRef=doc(this.firestore, `ingresos/${ingreso.id}`);
    return deleteDoc(ingDocRef);

  }
}
