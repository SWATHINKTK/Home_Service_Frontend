import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import AdminMainComponent from '../../components/Admin/AdminLayout/AdminMainComponent'
import SalesReport from '../../components/Admin/SalesReport/SalesReport'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { salesReportAPI } from '../../utils/api/adminAPI'
import { addBooking } from '../../reducers/worker/bookingSlice'

const SalesReportPage:React.FC  = () => {
    const { filterDate, currentPage } = useAppSelector((state) =>  state.booking);
    const dispatch = useAppDispatch();
    useEffect(() => {
        (async () => {
            const response = await salesReportAPI(filterDate.startDate, filterDate.endDate);
            dispatch(addBooking(response.data));
        })()
    }, [currentPage, dispatch, filterDate.endDate, filterDate.startDate]);
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
