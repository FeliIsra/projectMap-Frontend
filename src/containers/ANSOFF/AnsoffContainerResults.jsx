import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { onGetOne } from 'redux/actions/ansoff.actions';

import LayoutContainer from 'containers/LayoutContainer';
import { Grid } from '@mui/material';

import {
  productosSelector,
  porcentajesSelector,
} from 'redux/selectors/ansoff.selector';
import AnsoffViewResults from 'views/AnsoffViewResults';
import { Menu, MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';
import { COLORS } from 'helpers/enums/colors';

const AnsoffContainerResults = () => {
  const { ansoffId, id } = useParams();
  const disptch = useDispatch();

  const productosFiltered = useSelector(productosSelector);
  const porcentajes = useSelector(porcentajesSelector);

  const navigate = useNavigate();
  const onClickGoBackButton = () =>
    navigate(`/projects/${id}/ansoff/${ansoffId}`);

  const [anchorElement, setAnchorElement] = useState(null);

  useEffect(() => {
    disptch(onGetOne(ansoffId));
  }, []);

  return (
    <LayoutContainer>
      <Grid container>
        <Grid
          item
          sx={{
            height: '100%',
            width: '100%',
            padding: '30px',
            maxWidth: '1300px',
            margin: '0 auto',
          }}
        >
          <AnsoffViewResults
            productosFiltered={productosFiltered}
            porcentajes={porcentajes}
            onClickGoBackButton={onClickGoBackButton}
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
              <Comments show tool="ANSOFF" toolId={ansoffId} projectId={id} />
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default AnsoffContainerResults;
