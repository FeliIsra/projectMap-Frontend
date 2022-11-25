import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import LayoutContainer from 'containers/LayoutContainer';
import FodaView from 'views/FodaView';
import { onGetOne, onGetOptions, onGetSeeds } from 'redux/actions/foda.actions';
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
  consejosSelector,
} from 'redux/selectors/foda.selector';
import CustomizedTables from 'components/commons/Table';
import {
  ViewContainer,
  ChartContainer,
  Container,
  Title,
  SectionRadar,
  SectionPie,
  SectionTable,
} from 'views/FodaView/styles';
import RadarChartCustom from 'components/commons/RadarChart';
import PieChartCustom from 'components/commons/PieChart';
import { COLORS } from 'helpers/enums/colors';
import { Box, Menu, MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';
import ToolTip from 'components/commons/ToolTip';

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
  const consejos = useSelector(consejosSelector);

  const navigate = useNavigate();
  const onClickGoBackButton = () => navigate(`/projects/${id}/foda/${fodaId}`);

  const [anchorElement, setAnchorElement] = useState(null);

  useEffect(() => {
    disptch(onGetOptions());
    disptch(onGetSeeds());
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
            onClickButtonGoBack={onClickGoBackButton}
            buttonTitle="Ir Atrás"
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
              <Comments show tool="FODA" toolId={fodaId} projectId={id} />
            </MenuItem>
          </Menu>
          <SectionTable>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Title>Tabla de Porcentajes</Title>
              <ToolTip
                text="Esta tabla representa la distribución de las distintas áreas de los factores cargados. Es importante prestar atención a la misma para tener una visión generalizada de como se encuentra su empresa"
                placement="right"
                fontSize="16px"
              />
            </Box>
            <CustomizedTables
              items={items}
              columns={[
                {
                  label: 'Área',
                  value: 'area',
                },
                {
                  label: 'Porcentaje',
                  value: 'porcentaje',
                },
                {
                  label: 'Descripción',
                  value: 'descripcion',
                },
              ]}
            />
          </SectionTable>
          {consejos?.length ? (
            <SectionTable>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Title>Tabla de Consejos</Title>
                <ToolTip
                  text="Esta tabla contiene los consejos que el análisis le arroja por cada factor precargado utilizado. Preste atención a los mismos y planifique acorde."
                  placement="right"
                  fontSize="16px"
                />
              </Box>
              <CustomizedTables
                items={consejos}
                columns={[
                  {
                    label: 'Área',
                    value: 'area',
                  },
                  {
                    label: 'Descripción',
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
              <Title>Gráfico de Radar</Title>
              <RadarChartCustom data={dataRadarChart} />
            </SectionRadar>
            <SectionPie>
              <Title>Gráfico de Torta</Title>
              <PieChartCustom
                data={dataPieChart}
                colors={[
                  COLORS.GreenEmerald,
                  COLORS.GreenSulu,
                  COLORS.YellowGrandis,
                  COLORS.RedBurntSienna,
                ]}
              />
            </SectionPie>
          </ChartContainer>
        </ViewContainer>
      </Container>
    </LayoutContainer>
  );
};

export default FodaContainer;
