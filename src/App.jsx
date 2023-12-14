import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './app.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Andre Angeloni"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nihil blanditiis placeat officiis beatae quaerat alias non. Quos exercitationem quis ipsum cumque, temporibus non, enim at consequuntur porro saepe suscipit?"
          />
          <Post author="epicks" content="ele é pro player" />
        </main>
      </div>
    </div>
  );
}

export default App;
