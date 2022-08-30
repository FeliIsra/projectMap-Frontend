import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import LayoutContainer from 'containers/LayoutContainer';
import FodaView from 'views/FodaView';
import { onGetOne, onGetOptions } from 'redux/actions/foda.actions';
import {
  amenazasSelectorOrdenadas,
  debilidadesSelectorOrdenadas,
  fortalezasSelectorOrdenadas,
  oportunidadesSelectorOrdenadas,
  titleSelector,
  totalResultsSelect,
  tableSelector,
  radarChartSelector,
  pieChartSelector,
} from 'redux/selectors/foda.selector';
import CustomizedTables from 'components/commons/Table';
import {
  ViewContainer,
  ChartContainer,
  Container,
} from 'views/FodaView/styles';
import RadarChartCustom from 'components/commons/RadarChart';
import PieChartCustom from 'components/commons/PieChart';
import { COLORS } from 'helpers/enums/colors';

const FodaContainer = () => {
  const { fodaId, id } = useParams();
  const disptch = useDispatch();
  const debilidades = useSelector(debilidadesSelectorOrdenadas);
  const amenazas = useSelector(amenazasSelectorOrdenadas);
  const fortalezas = useSelector(fortalezasSelectorOrdenadas);
  const oportunidades = useSelector(oportunidadesSelectorOrdenadas);
  const total = useSelector(totalResultsSelect);
  const { title } = useSelector(titleSelector);
  const items = useSelector(tableSelector);
  const dataRadarChart = useSelector(radarChartSelector);
  const dataPieChart = useSelector(pieChartSelector);

  const navigate = useNavigate();
  const onClickGoBackButton = () => navigate(`/projects/${id}/foda/${fodaId}`);

  useEffect(() => {
    disptch(onGetOptions());
    disptch(onGetOne(fodaId));
  }, []);

  return (
    <LayoutContainer>
      <Container>
        <ViewContainer>
          <FodaView
            showResults={true}
            debilidades={debilidades}
            amenazas={amenazas}
            oportunidades={oportunidades}
            fortalezas={fortalezas}
            title={title}
            onClickButton={onClickGoBackButton}
            buttonTitle="Ir Atras"
            total={total}
          />
          <CustomizedTables
            items={items}
            columns={[
              {
                label: 'Area',
                value: 'area',
              },
              {
                label: 'Porcentaje',
                value: 'porcentaje',
              },
              {
                label: 'Descripcion',
                value: 'descripcion',
              },
            ]}
          />
          <ChartContainer>
            <RadarChartCustom data={dataRadarChart} />
            <PieChartCustom
              data={dataPieChart}
              colors={[
                COLORS.GreenEmerald,
                COLORS.GreenSulu,
                COLORS.YellowGrandis,
                COLORS.RedBurntSienna,
              ]}
            />
          </ChartContainer>
        </ViewContainer>
      </Container>
    </LayoutContainer>
  );
};

export default FodaContainer;
