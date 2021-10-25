import '../styles/globals.css'
import  { TaskProvaider } from '../context/taskContext';

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvaider>
      <Component {...pageProps} />
    </TaskProvaider>
  );
}

export default MyApp
