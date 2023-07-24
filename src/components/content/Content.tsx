import './style.scss';
import viteLogo from '../../../public/vite.svg';
const Content = () => {
  return (
    <main className="content">
      <section className="content__avatar">
        <ul className="avatar-list">
          <li className="avatar-item">
            <img src={viteLogo} alt="" />
          </li>
          <li className="avatar-item">
            <img src={viteLogo} alt="" />
          </li>
          <li className="avatar-item">
            <img src={viteLogo} alt="" />
          </li>
          <li className="avatar-item">
            <img src={viteLogo} alt="" />
          </li>
          <li className="avatar-item">
            <img src={viteLogo} alt="" />
          </li>
        </ul>
      </section>
    </main>
    
  )
}

export default Content