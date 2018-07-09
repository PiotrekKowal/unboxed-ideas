import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import Home from 'views/Home';
import Contradictions from 'views/Contradictions';
import Solutions from 'views/Solutions';
import Examples from 'views/Examples';
import NotFound from 'views/NotFound';

import Content from 'components/global/Layout/Content';
import Layout from 'components/global/Layout/Layout';
import Menu from 'components/containers/Menu';
import Ribon from 'components/global/Ribon';
import Grid from 'components/global/Grid/Grid';
import Cell from 'components/global/Grid/Cell';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout className='app-layout__header--fixed'>
          <Menu title='Unboxed Ideas' />
          <Ribon className='mdl-color--green-300' />
          <Content className='app-main' >
            <Grid className='app-container'>
              <Cell col={ 2 } hidePhone hideTablet />
              <Cell
                col={ 8 }
                className='app-content mdl-color--white mdl-shadow--4dp mdl-color-text--grey-800 animate_text_focus_in'
              >
                <Switch>
                  <Route exact path={ routeCodes.HOME } component={ Home } />
                  <Route path={ routeCodes.CONTRADICTIONS } component={ Contradictions } />
                  <Route path={ routeCodes.SOLUTIONS } component={ Solutions } />
                  <Route path={ `${ routeCodes.EXAMPLES }/:findPrincipal` } component={ Examples } />
                  <Route path={ routeCodes.EXAMPLES } component={ Examples } />
                  <Route path='*' component={ NotFound } />
                </Switch>
              </Cell>
            </Grid>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default hot(module)(App);
