import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';
const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'pending tasks',
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#636363',
      bcg: '#f7f7f7',
    },
    {
      title: 'tasks in progress',
      count: defaultStats?.working || 0,
      icon: <FaCalendarCheck />,
      color: '#f59e0b',
      bcg: '#fff4e0',
    },
    {
      title: 'tasks done',
      count: defaultStats?.done || 0,
      icon: <FaBug />,
      color: '#15d345',
      bcg: '#e2ffe7',
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
