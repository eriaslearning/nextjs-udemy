// import styles from './index.module.css';
import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

export interface IndexProps {
  products?: any,
}

export function Index(props: IndexProps) {
  const { products } = props;
  return (
    <ul>
      {products.map((product: any) =>
        <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>
      )}
    </ul>
  );
}

export async function getStaticProps(context: any) {
  // console.log(context);
  // cwd is the root directory
  const filePath = path.join(process.cwd(), 'apps', 'ssr', 'data', 'dummy.json');
  const jsonData: any = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      }
    }
  }

  if (data.products.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 30
  };
}

export default Index;
