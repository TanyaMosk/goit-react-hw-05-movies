import { TbAlertOctagonFilled } from 'react-icons/tb';
// import { Box, Text, Wrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <section className="section">
      <div className="container">
        <div>
          <TbAlertOctagonFilled size={40} color="#e42727" />
          <p>Page not found</p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;