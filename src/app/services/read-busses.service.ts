import { Injectable } from "@angular/core";
import { provideFirebaseApp } from "@angular/fire/app";
import { getDatabase, provideDatabase } from "@angular/fire/database";
import { ref, onValue} from "firebase/database";
import { initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

@Injectable ({
    providedIn: "root"
})

export class ReadBussesService {
  constructor() {
    initializeApp(environment.firebase);
    const db = getDatabase();
    const starCountRef = ref(db, 'buses');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
  }
}