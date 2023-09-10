import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <tr key={data.id} className='overflow-x-auto'>
      <td className='px-24 py-4'>{data.id}</td>
      <td className='px-24 py-4'>{data.id}</td>
      <td className='px-24 py-4'>{data.email}</td>
      <td className='px-24 py-4'>{data.first_name}</td>

      <td className='px-10 py-4 text-white-600 rounded-lg border-solid border-white-600'>
        <button className='py-4 text-white-600 rounded-lg border-solid border-white-600'>
          <Link to='/dashboard/editCase'>View</Link>
        </button>
        <button className='ml-4 py-4 text-white-600 rounded-lg border-solid border-white-600'>
          <Link to='/dashboard/editCase'>Edit</Link>
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className='flex justify-evenly items-center mt-20'>
        <h1 className='mr-4'>Case List</h1>
        <button>Add Case</button>
      </div>
      {loading && (
        <div className='min-h-screen flex justify-center items-center'>
          <button
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
          </button>
        </div>
      )}
      <div className=' w-3/4 flex overflow-x-auto mt-20 ml-48'>
        <table className='w-full text-sm text-left text-white-500 dark:text-white-400'>
          <thead className='text-xs text-white-700 uppercase '>
            <tr className='bg-white-50 dark:bg-white-700 bg-gray-400 text-black'>
              <th scope='col' className='p-20 py-3'>
                ID
              </th>
              <th scope='col' className='p-20 py-3'>
                Case No
              </th>
              <th scope='col' className='p-20 py-3'>
                Case Type
              </th>
              <th scope='col' className='p-20 py-3'>
                Status
              </th>
              <th scope='col' className='p-20 py-3'>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>{userDetails}</tbody>
        </table>
      </div>
    </>
  );
};
