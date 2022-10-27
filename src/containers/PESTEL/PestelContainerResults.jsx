import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import LayoutContainer from 'containers/LayoutContainer';
import PestelView from 'views/PestelView';
import {
  onGetOne,
  onGetOptions,
  onGetSeeds,
} from 'redux/actions/pestel.actions';
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
  consejosSelector,
} from 'redux/selectors/pestel.selector';
import {
  ViewContainer,
  ChartContainer,
  Container,
  Title,
  SectionRadar,
  SectionPie,
  SectionTable,
} from 'views/PestelView/styles';
import CustomizedTables from 'components/commons/Table';
import RadarChartCustom from 'components/commons/RadarChart';
import PieChartCustom from 'components/commons/PieChart';
import { COLORS } from 'helpers/enums/colors';
import { Menu, MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';

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
  const consejos = useSelector(consejosSelector);

  const navigate = useNavigate();
  const onClickGoBackButton = () =>
    navigate(`/projects/${id}/pestel/${pestelId}`);

  const [anchorElement, setAnchorElement] = useState(null);

  useEffect(() => {
    disptch(onGetOptions());
    disptch(onGetSeeds());
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
            onClickButtonGoBack={onClickGoBackButton}
            buttonTitle="Ir Atras"
            total={total}
            openComments={(target) => setAnchorElement(target)}
          />
          <Menu
            anchorEl={anchorElement}
            onClose={() => setAnchorElement(null)}
            open={!!anchorElement}
            PaperProps={{
              style: {
                width: 500,
              },
            }}
            sx={{
              '& .MuiMenu-list': {
                background: COLORS.AthensGray,
              },
            }}
          >
            <MenuItem key={1} disableRipple>
              <Comments show tool="PESTEL" toolId={pestelId} projectId={id} />
            </MenuItem>
          </Menu>
          {consejos?.length ? (
            <SectionTable>
              <Title>Tabla de Consejos</Title>
              <CustomizedTables
                items={consejos}
                columns={[
                  {
                    label: 'Area',
                    value: 'area',
                  },
                  {
                    label: 'Descripcion',
                    value: 'descripcion',
                  },
                  {
                    label: 'Consejo',
                    value: 'consejo',
                  },
                ]}
              />
            </SectionTable>
          ) : (
            <></>
          )}
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
