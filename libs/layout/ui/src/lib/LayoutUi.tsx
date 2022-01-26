import { Fragment } from 'react';
import { ReactNode } from 'react';
import './LayoutUi.module.css';
import Header from '../components/header/header'

/* eslint-disable-next-line */
export interface LayoutUiProps {
  children: React.ReactNode,
}

export function LayoutUi(props: LayoutUiProps) {
  return (
    <Fragment>
      <Header />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
}

export default LayoutUi;
