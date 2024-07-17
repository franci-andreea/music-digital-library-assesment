import { useNavigate } from 'react-router-dom';
import './RecentList.scss';

export default function RecentList({ path }) {

  const navigate = useNavigate();

  return (
    <div id='recent-list'>
      <div className='list-bubble'>
        Artist Name #1
      </div>

      <div className='list-bubble'>
        Artist Name #2
      </div>

      <div className='list-bubble'>
        Artist Name #3
      </div>

      <button className='view-all-button' onClick={() => navigate(path)}>→</button>
    </div>
  )
}
