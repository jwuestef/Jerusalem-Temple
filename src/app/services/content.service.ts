import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

import { Image } from './image.model';



@Injectable()
export class ContentService {



  // The contructor function runs automatically on service load, each and every time it's called
  constructor(public afd: AngularFireDatabase, public router: Router) { }



  // Retrieves and returns content for a particular page from Firebase
  getPageContent(pageName) {
    return this.afd.database.ref('/' + pageName).once('value').then( pageContent => {
      return pageContent.val();
    }).catch( err => { console.log('Error in getPageContent function of content.service.ts'); console.log(err); alert('Error - Failed to load page. Please contact administrator.') });
  }



  // Saves a particular piece of text content for a page
  savePageContent(pageName, whichElement, newContent) {
    return this.afd.database.ref('/' + pageName).update({ [whichElement]: newContent }).catch( err => { console.log('Error in savePageContent function of content.service.ts'); console.log(err); alert('Error - Failed to save content. Please contact administrator.') });
  }



  // Uploads file to Firebase storage, and updates the database with the file's URL
  pushUpload(pageName, whichElement, upload: Image) {
    // Returns a promise, so we can use .then() when pushUpload is called
    return new Promise( (resolve, reject) => {
      // Upload the file
      const uploadTask = firebase.storage().ref().child(`${pageName}/${whichElement}/${upload.file.name}`).put(upload.file);
      // Based on how the upload is going, perform the following actions:
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // Upload in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
          upload.progress = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        },
        (error) => {
          // Upload failed, output error to the console and show alert
          console.log('Error in content.service.ts in the pushUpload function:');
          console.log(error);
          alert('Failed to upload file. Please contact administrator.');
          reject();
        },
        () => {
          // Upload succeeded, update the url in the database
          // Pull relevant information out of the returned info from storage
          upload.url = uploadTask.snapshot.downloadURL;
          // Make database call to update info
          this.afd.database.ref('/' + pageName + '/' + whichElement).update({
            description: upload.description,
            url: upload.url
          }).then( () => {
            // Successfully updated database, return the new url
            resolve(upload.url);
          }).catch( err => {
            // Error updating url in database, output error to console and show alert
            console.log('Error updating new image URL inside content.service.ts:');
            console.log(err);
            alert('Failed to upload file URL to database. Please contact administrator.');
            reject();
          });
        }
      ); // End of uploadTask.on()
    }); // End of returned promise
  } // End of pushUpload() for image



}
