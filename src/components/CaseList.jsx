import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/interface/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/interface/ui/table";

export const CaseList = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await axios.get(
          "https://reqres.in/api/users?page=2"
        );
        setUserData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const userDetails = userData.map((data) => (
    <TableRow key={data.id} className='overflow-x-auto h-12'>
      <TableCell className='border-b border-r text-center'>
        {data.id}
      </TableCell>
      <TableCell className='border-b border-r text-center'>
        {data.id}
      </TableCell>
      <TableCell className='border-b border-r text-center'>
        {data.email}
      </TableCell>
      <TableCell className='border-b border-r  text-center'>
        {data.first_name}
      </TableCell>

      <TableCell className='text-center'>
        <Button className=' py-4 text-white-600 rounded-lg border-solid border-white-600 bg-slate-100 h-2'>
          <Link to='/dashboard/editCase'>View</Link>
        </Button>
        <Button className='ml-4 py-4 text-white-600 rounded-lg border-solid border-white-600 bg-slate-100 h-2'>
          <Link to='/dashboard/editCase'>Edit</Link>
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <>
      <div className='flex justify-evenly items-center mt-20'>
        <h1 className='mr-4'>Case List</h1>
        <Button className='bg-slate-200'>Add Case</Button>
      </div>
      {loading && (
        <div className='min-h-screen flex justify-center items-center'>
          <Button
            className='bg-indigo-500 flex items-center justify-center text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed'
            disabled
          >
            <svg
              className='animate-spin h-5 w-5 mr-3 text-white'
              viewBox='0 0 24 24'
            >
              <path
                className='opacity-25'
                fill='currentColor'
                d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v7h-2z'
              />
            </svg>
            Loading in 2 secs...
          </Button>
        </div>
      )}
      <div>
        <Table className='table-auto mx-auto w-3/4 ml-48 mt-20 border overflow-x-auto'>
          <TableHeader>
            <TableRow className='h-16'>
              <TableHead className='border-r text-center'>
                ID
              </TableHead>
              <TableHead className='border-r text-center'>
                Case No
              </TableHead>
              <TableHead className=' border-r text-center'>
                Case Type
              </TableHead>
              <TableHead className=' border-r text-center'>
                Status
              </TableHead>
              <TableHead className='border-r text-center '>
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>{userDetails}</TableBody>
        </Table>
      </div>
    </>
  );
};
