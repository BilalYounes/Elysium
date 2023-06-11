
import React, {useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Card from './Card'
import './home.scss'
import Pagination from '@mui/material/Pagination';
import Skeleton from '../../helper/Skeleton';
type HomeProps = {
    setErorr: (error: string | null) => void;
  };
const Home = ({setErorr}:HomeProps) => {
    const [pageNumber, setPageNumber] = useState<number>(0)
    const params = {
        locationExternalIDs: '5002,6020',
    hitsPerPage: '6',
    page: `${pageNumber}`,
  
      };
      const url ='https://bayut.p.rapidapi.com/properties/list';
    const { data, isLoading, error } = useFetch(params,url)

  useEffect(() => {
    setErorr(error);
  }, [error, setErorr]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };
   
    return (
        <div className='home'>
            {isLoading ? (

                <>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </>


            ) : error ? (
                <p>hi hi </p>
            ) : (
                data.map((item: any) => (
                    <Card key={item.id} item={item} />
                ))
            )}

            <div className='home__pagination-continer'>

                <Pagination page={pageNumber} onChange={handleChange} size="large" sx={{ fontSize: '2rem' }} className='home__pagination' count={10} />

            </div>





        </div>
    )
}

export default Home