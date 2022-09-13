import LayoutContainer from 'containers/LayoutContainer';
import { Container } from 'views/PorterView/styles';
import PorterView from 'views/PorterView';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetOptions, onGetQuestions } from 'redux/actions/porter.actions';

const PorterContainer = () => {
  const { porterId, id } = useParams();
  const dispatch = useDispatch();

  const example = useSelector((state) => state.porter);
  const { options, questions } = example;
  delete options.fuerza;

  console.log({ example });

  useEffect(() => {
    dispatch(onGetQuestions());
    dispatch(onGetOptions());
  }, []);

  return (
    <LayoutContainer>
      <Container>
        <PorterView
          options={options}
          questions={questions['Amenaza de nuevos competidores']}
        />
      </Container>
    </LayoutContainer>
  );
};

export default PorterContainer;
