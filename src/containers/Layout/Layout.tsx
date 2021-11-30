import { Fragment } from 'react';
import { Header } from '../../components';
    
export const Layout: React.FC = props => (
  <Fragment>
    <Header />
    {props.children}
  </Fragment>
)