import React, { useState } from 'react';
import { validate } from 'isemail';
import styles from '../styles/contact.module.css';

const Contact = () => {
  const [contact, setContact] = useState({
    email: '',
    message: '',
    name: '',
    subject: ''
  });

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [unfilledForm, setUnfilledForm] = useState(false);

  const encodeInput = input => {
    return Object.keys(input).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(input[key])}`).join('&');
  }

  const handleChange = e => {
    setInvalidEmail(false);
    setUnfilledForm(false)
    setSubmitted(false);

    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!email || !message || !name || !subject) {
        return setUnfilledForm(true);
      }

      if (!validate(email)) {
        return setInvalidEmail(true);
      }

      await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodeInput({
          'form-name': 'contact',
          ...contact
        })
      });

      setSubmitted(true);

      setContact({
        email: '',
        message: '',
        name: '',
        subject: ''
      });
    } catch (err) {
      console.log(err);
      window.location.reload(true);
    }
  }

  const { email, message, name, subject } = contact;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>let's get in contact!</h1>
      {submitted && <p className={styles.form_submitted}>thank you! your message has been sent. i will contact you very soon!</p>}
      <form className={styles.form} data-netlify='true' data-netlify-honeypot='bot-field' name='contact' onSubmit={handleSubmit}>
        <div className={styles.form_left} data-sal='slide-up' data-sal-delay={100} data-sal-duration={750}>
          <div className={styles.form_name}>
            {unfilledForm && <p className={styles.form_error}>all fields are required</p>}
            <label className={styles.label} htmlFor='name'>
              name
              <input className={styles.input} name='name' onChange={handleChange} type='text' value={name} />
            </label>
          </div>
          <div className={styles.form_email}>
            <label className={styles.label} htmlFor='email'>
              email {invalidEmail && <p className={styles.form_error}>(invalid email address)</p>}
              <input className={styles.input} name='email' onChange={handleChange} type='text' value={email} />
            </label>
          </div>
          <div className={styles.form_subject}>
            <label className={styles.label} htmlFor='subject'>
              subject
              <input className={styles.input} name='subject' onChange={handleChange} type='text' value={subject} />
            </label>
          </div>
        </div>
        <div className={styles.form_right} data-sal='slide-up' data-sal-delay={200} data-sal-duration={750}>
          <div className={styles.form_message}>
            <label className={styles.label} htmlFor='message'>
              message
              <textarea className={styles.input} name='message' onChange={handleChange} value={message}></textarea>
            </label>
          </div>
          <input aria-label='Submit form' className={styles.form_submit} type='submit' value='send' />
        </div>
        <input type='hidden' name='form-name' value='contact' />
        <input type='hidden' name='bot-field' />
      </form>
    </section>
  );
}

export default Contact;
