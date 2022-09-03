import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import LayoutContainer from 'containers/LayoutContainer';
import PestelView from 'views/PestelView';
import { onGetOne, onGetOptions } from 'redux/actions/pestel.actions';
import {
  titleSelector,
  totalResultsSelect,
  radarChartSelector,
  pieChartSelector,
  politicoSelectorOrdenadas,
  economicoSelectorOrdenadas,
  socialSelectorOrdenadas,
  tecnologicoSelectorOrdenadas,
  ambientalSelectorOrdenadas,
  legalSelectorOrdenadas,
} from 'redux/selectors/pestel.selector';
import {
  ViewContainer,
  ChartContainer,
  Container,
  Title,
  SectionRadar,
  SectionPie,
} from 'views/PestelView/styles';
import RadarChartCustom from 'components/commons/RadarChart';
import PieChartCustom from 'components/commons/PieChart';
import { COLORS } from 'helpers/enums/colors';

const PestelContainer = () => {
  const { pestelId, id } = useParams();
  const disptch = useDispatch();
  const politicos = useSelector(politicoSelectorOrdenadas);
  const economicos = useSelector(economicoSelectorOrdenadas);
  const sociales = useSelector(socialSelectorOrdenadas);
  const tecnologicos = useSelector(tecnologicoSelectorOrdenadas);
  const ambientales = useSelector(ambientalSelectorOrdenadas);
  const legales = useSelector(legalSelectorOrdenadas);
  const total = useSelector(totalResultsSelect);
  const { title } = useSelector(titleSelector);
  const dataRadarChart = useSelector(radarChartSelector);
  const dataPieChart = useSelector(pieChartSelector);

  const navigate = useNavigate();
  const onClickGoBackButton = () =>
    navigate(`/projects/${id}/pestel/${pestelId}`);

  useEffect(() => {
    disptch(onGetOptions());
    disptch(onGetOne(pestelId));
  }, []);

  return (
    <LayoutContainer>
      <Container>
        <ViewContainer>
          <PestelView
            showResults={true}
            politicos={politicos}
            economicos={economicos}
            sociales={sociales}
            tecnologicos={tecnologicos}
            ambientales={ambientales}
            legales={legales}
            title={title}
            onClickButton={onClickGoBackButton}
            buttonTitle="Ir Atras"
            total={total}
          />
          <ChartContainer>
            <SectionRadar>
              <Title>Grafico de Radar</Title>
              <RadarChartCustom data={dataRadarChart} />
            </SectionRadar>
            <SectionPie>
              <Title>Grafico de Torta</Title>
              <PieChartCustom
                data={dataPieChart}
                colors={[
                  COLORS.MiddleBlueGreen,
                  COLORS.Aquamarine,
                  COLORS.MagicMint,
                  COLORS.Bone,
                  COLORS.VividTangerine,
                  COLORS.BitterSweet,
                ]}
              />
            </SectionPie>
          </ChartContainer>
        </ViewContainer>
      </Container>
    </LayoutContainer>
  );
};

export default PestelContainer;
