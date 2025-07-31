import styles from './Contact.module.css';
import '../assets/icomoon/style.css';
import { useState } from 'react';
import {
  Button,
  Label,
  TextInput,
} from "flowbite-react";


export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <>
    <div className={`${styles.heroSection} d-grid mx-auto col-md-6 p-4`}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2 className={`${styles.heading}`}>conatct section</h2>
          <div className='d-flex flex-row align-items-center pt-2'>
            <span className={styles.rectangle}></span>
            <i className={`${styles['icon-star-full-dark']} icon-star-full mx-3`}></i>
            <span className={styles.rectangle}></span>
          </div>
        </div>
        <form className='pt-5'>
          <div className="mb-1">
              <Label
                className={`overflow-hidden mb-2`}>
                  <div className={`${userName? '':styles.labelHide} ${styles.label} mb-2`}>
                    userName:
                  </div>
              </Label>
            <TextInput
              className={`${styles.input}`}
              type="text" 
              placeholder="userName"
              value={userName}
              onChange={(e)=> setUserName(e.target.value)}/>
          </div>
          <div className="mb-1">
              <Label
                className={`overflow-hidden mb-2`}>
                  <div className={`${userAge? styles.label : styles.labelHide} mb-2`}>
                    userAge:
                  </div>
              </Label>
            <TextInput
              className={`${styles.input}`}
              type="text" 
              placeholder="userAge"
              value={userAge}
              onChange={(e)=> setUserAge(e.target.value)}/>
          </div>
          <div className="mb-1">
              <Label
                className={`overflow-hidden mb-2`}>
                  <div className={`${userEmail? styles.label : styles.labelHide} mb-2`}>
                    userEmail:
                  </div>
              </Label>
            <TextInput
              className={`${styles.input}`}
              type="text" 
              placeholder="userEmail"
              value={userEmail}
              onChange={(e)=> setUserEmail(e.target.value)}/>
          </div>
          <div className="mb-1">
              <Label
                className={`overflow-hidden mb-2`}>
                  <div className={`${userPassword? styles.label : styles.labelHide} mb-2`}>
                    userPassword:
                  </div>
              </Label>
            <TextInput
              className={`${styles.input}`}
              type="text" 
              placeholder="userPassword"
              value={userPassword}
              onChange={(e)=> setUserPassword(e.target.value)}/>
          </div>
          <Button className={`${styles['btn-custom']} mt-3`}>send Message</Button>
        </form>
      </div>
    </>
      )
}
