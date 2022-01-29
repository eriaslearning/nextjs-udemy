import fs from 'fs/promises';
import path from 'path';
import React, { Fragment } from 'react';

export interface ProductDetailPageProps {
  loadedProduct: any;
}

function ProductDetailPage(props: ProductDetailPageProps) {
  const { loadedProduct } = props;

  if(!loadedProduct) {
      return <h1></h1>
  }
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(
    process.cwd(),
    'apps',
    'ssr',
    'data',
    'dummy.json'
  );
  const jsonData: any = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context: any) {
  const { params } = context;

  const productId = params.pid;
  //   console.log(productId);

  const data: any = await getData();

  const product = data.products.find(
    (product: any) => product.id === productId
  );

  if (!data) {
      return <h1>Loading...</h1>
  }

  if (!product) {
      return { notFound: true }
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data: any = await getData();
  const ids: any = data.products?.map((product: any) => product.id);
  const pathsWithParams: any = ids?.map((id: any) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProductDetailPage;
