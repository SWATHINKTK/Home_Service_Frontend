import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import AdminMainComponent from '../../components/Admin/AdminLayout/AdminMainComponent'
import SalesReport from '../../components/Admin/SalesReport/SalesReport'
import { useAppDispatch } from '../../hooks/useTypedSelector'
import { salesReportAPI } from '../../utils/api/adminAPI'
import { addBooking } from '../../reducers/worker/bookingSlice'

const SalesReportPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            const response = await salesReportAPI();
            console.log('777777777777777777777777777777')
            console.log(response.data)
            dispatch(addBooking(response.data));
        })()
    }, [dispatch]);
  return (
    <>
    <Helmet>
        <title>Sales Report</title>
      </Helmet>
      <AdminMainComponent content={ <SalesReport/>} />
    </>
  )
}

export default SalesReportPage
