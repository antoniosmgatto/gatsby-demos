import React from 'react';
import Container from '../components/container';
import Header from '../components/header'
import styles from './about-css-modules.module.css'

const User = props => {
  const { avatar, username, excerpt } = props;
  return (
    <div className={styles.user}>
      <img src={avatar} className={styles.avatar}></img>
      <div className={styles.description}>
        <h2 className={ styles.username }>{ username }</h2>
        <p className={ styles.excerpt }>{ excerpt }</p>
      </div>
    </div>
  )
}

export default () => (
  <Container>
    <Header title="About CSS Modules" />
    <p>CSS Modules are cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
)