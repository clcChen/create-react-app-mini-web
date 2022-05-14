import Buttom from './components/button';
import logo from './assets/logo.png';
import avatar from './assets/logo_avatar.png';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <img src={logo} alt="logo" className={styles.logo} />
      <Buttom text="my button" />
    </div>
  );
}

export default App;
