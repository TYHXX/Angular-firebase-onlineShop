import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { query } from '@angular/core/src/render3/query';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories', ref => (ref.orderByChild('name')))
    .snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    );
  }
}
