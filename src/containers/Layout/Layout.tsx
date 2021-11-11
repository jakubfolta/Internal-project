import { Fragment } from 'react';
import { Header } from '../Header/Header';
    
export const Layout: React.FC = props => (
  <Fragment>
    <Header />
    {props.children}
  </Fragment>
)