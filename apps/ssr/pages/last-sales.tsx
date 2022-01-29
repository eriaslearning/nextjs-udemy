import React from 'react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LastSalesProps {
  sales: any;
}

export function LastSales(props: LastSalesProps) {
  const { sales } = props;
  const [salesState, setSalesState] = useState(sales);
  //   const [isLoading, setIsLoading] = useState(false);

  //   const { data, error } = useSWR(
  //     'https://nextjs-course-erias-default-rtdb.europe-west1.firebasedatabase.app/sales.json'
  //   );
  const { data, error } = useSWR(
    'https://nextjs-course-erias-default-rtdb.europe-west1.firebasedatabase.app/sales.json',
    (url) => fetch(url).then((res: any) => res.json())
  );
  //   console.log(data);

  // Rerun every time data updates
  useEffect(() => {
    if (data) {
      const transformedSales = [];

      // Transform from an object into an array
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSalesState(transformedSales);
      //   console.log(transformedSales)
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(
  //       'https://nextjs-course-erias-default-rtdb.europe-west1.firebasedatabase.app/sales.json'
  //     )
  //       .then((response: any) => response.json())
  //       .then((data: any) => {
  //         const transformedSales = [];

  //         // Transform from an object into an array
  //         for (const key in data) {
  //           transformedSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }
  //         setSalesState(transformedSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!data && !salesState) {
    return <h1>No data</h1>;
  }

  if (!salesState) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {salesState.map((sale: any) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return fetch(
    'https://nextjs-course-erias-default-rtdb.europe-west1.firebasedatabase.app/sales.json'
  )
    .then((response: any) => response.json())
    .then((data: any) => {
      const transformedSales = [];

      // Transform from an object into an array
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      return {
        props: { sales: transformedSales },
        revalidate: 10,
      };
    });
}

export default LastSales;
