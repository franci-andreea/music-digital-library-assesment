import { useNavigate } from 'react-router-dom';
import './RecentList.scss';

export default function RecentList({path}) {

  const navigate = useNavigate();

  return (
    <div id='recent-list'>
      {(path === '/artists') ? <h2>View your artists</h2> : <h2>View your albums</h2>}
      <button className='view-all-button' onClick={() => navigate(path)}>→</button>
    </div>
  )
}
