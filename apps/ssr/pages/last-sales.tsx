import React from 'react';
import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LastSalesProps {}

export function LastSales(props: LastSalesProps) {
  const [salesState, setSalesState] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
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
        setSalesState(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
      return <h1>Loading...</h1>
  }

  if (!salesState) {
      return <h1>No data</h1>
  }
  return <ul>
      {salesState.map((sale: any) => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}
  </ul>;
}

export default LastSales;
