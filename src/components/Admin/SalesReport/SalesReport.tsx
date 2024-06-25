import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa6";
import moment from 'moment';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { AiOutlineFilePdf } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";

import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector'
import { IService } from '../Services/ServiceTable';
import { nextPage, previousPage, updateFilterDate } from '../../../reducers/worker/bookingSlice';
import { salesReportDownloadAPI } from '../../../utils/api/adminAPI';
import { IBooking } from '../../../@types/booking';

const SalesReport: React.FC = () => {
    const { bookings, totalPages, currentPage, totalDocuments, filterDate } = useAppSelector((state) => state.booking);
    const [isFilterDate, setIsFilterDate] = useState({ startDate: '', endDate: '' });
    const [ isDownload, setIsDownload ] = useState(false)
    // const [ downloadBooking, setDownloadBooking ] = useState<IBooking[]>([]);
    const [error, setError] = useState('');
    const dispatch = useAppDispatch();

    const heading = ["#", "Booking Id", "Transaction Id", "Service Name", "Payment", "Status", "Booking Date"];

    const salesData = async () => {
        const response = await salesReportDownloadAPI(filterDate.startDate, filterDate.endDate);
        return response.data.bookings;
    }


    const exportToExcel = async () => {
        const downloadBooking = await salesData();
        console.log(downloadBooking)
        const data = downloadBooking.map((data: IBooking, index: number) => ({
            "#": index + 1,
            "Booking Id": data.bookingId,
            "Transaction Id": data.transactionId || '',
            "Service Name": (data.serviceId as IService).serviceName,
            "Payment": data.totalAmount,
            "Status": data.paymentStatus,
            "Booking Date": data.createdAt?.toLocaleString(),
        }));
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sales Report");

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(blob, 'SalesReport.xlsx');
        setIsDownload(false)
    };


    const exportToPDF = async () => {
        try {
            const downloadBooking = await salesData();
            console.log(downloadBooking);

            const doc = new jsPDF();
            doc.text('Sales Report', 14, 15);

            const tableColumn = ['#', 'Booking Id', 'Transaction Id', 'Service Name', 'Payment', 'Status', 'Booking Date'];
            const tableRows: Array<Array<string | number>> = [];

            downloadBooking.forEach((booking: IBooking, index: number) => {
                const rowData: Array<string | number> = [
                    (index + 1).toString() || '',
                    booking.bookingId || '',
                    booking.transactionId || '',  
                    (booking.serviceId as IService)?.serviceName || '', 
                    booking.totalAmount.toString() || '',
                    booking.paymentStatus || '',
                    moment(booking.createdAt).format('lll') || '', 
                ];

                tableRows.push(rowData);
            });


            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (doc as any).autoTable({
                head: [tableColumn],
                body: tableRows,
                startY:25
            });

            doc.save('SalesReport.pdf');
            setIsDownload(false)
        } catch (error) {
            console.error('Error exporting to PDF:', error);
        }
    };


    const handleFilterData = () => {
        setError('');
        if (isFilterDate.startDate.trim() == '' || isFilterDate.endDate.trim() == '') {
            setError('start & end date required');
            return;
        }
        if (new Date(isFilterDate.endDate) < new Date(isFilterDate.startDate)) {
            setError('end date is greater than stat date.');
            return;
        }
        dispatch(updateFilterDate(isFilterDate))
    }

    return (
        <div className="font-Montserrat mt-20 px-6">
            <div className="flex justify-between">
                <h1 className="font-[700] text-[1.9rem] tracking-wider mb-4">
                    Sales Report
                </h1>
               <div className='relative'>
                 <button className='bg-black text-white px-3 py-1 rounded-md' onClick={() => setIsDownload(true)}>Download</button>
                 <div className={`${!isDownload && 'hidden'} absolute -bottom-2 right-0 z-10 px-2 bg-gray-400 rounded-md drop-shadow-md flex gap-x-4 py-1`}>
                    <button onClick={exportToPDF}><AiOutlineFilePdf size={30}/></button>
                    <button onClick={exportToExcel}><SiMicrosoftexcel size={30}/></button>
                 </div>
               </div>
            </div>
            <div className={`relative overflow-scroll hide-scrollbar sm:rounded-sm `}>
                <div className='flex flex-col items-end mb-1'>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <div>
                                <h5 className='font-semibold text-xs mb-1'>Start Date</h5>
                                <input type="date" className='px-2 py-1 rounded-md text-sm border' placeholder='start date'
                                    onChange={(e) => setIsFilterDate({ ...isFilterDate, startDate: e.target.value })} /> -
                            </div>
                            <div>
                                <h5 className='font-semibold text-xs mb-1'>End Date</h5>
                                <input type="date" className='px-2 py-1 rounded-md text-sm border' placeholder='start date'
                                    onChange={(e) => setIsFilterDate({ ...isFilterDate, endDate: e.target.value })} />
                            </div>

                            <button className='mt-3 mx-2' onClick={handleFilterData}><FaFilter size={23} /></button>
                        </div>
                        {error && <p className='text-xs text-red-600 px-3'>*{error}</p>}
                    </div>

                </div>
                <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll">
                    <thead className="text-xs text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='uppercase'>
                            {heading.map((title) => (
                                <th key={title} scope="col" className="px-3 py-3">
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((data, index) => {

                            return (
                                <tr
                                    key={data._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <td className="px-3 py-2">{(index + 1) + ((currentPage - 1) * 4)}</td>
                                    <td className="px-3 py-2">{data.bookingId}</td>
                                    <td className="px-3 py-2">{data.transactionId}</td>
                                    <td className="px-3 py-2">{(data.serviceId as IService).serviceName}</td>
                                    <td className="px-3 py-2">{data.totalAmount}</td>
                                    <td className="px-3 py-2">
                                        <span className="bg-green-500 font-semibold text-black rounded-md px-3.5">
                                            {data.paymentStatus}
                                        </span>
                                    </td>
                                    <td className="px-3 py-2">
                                        {moment(data.createdAt).format('lll')}
                                    </td>

                                </tr>
                            );
                        })}
                        <tr>
                            {bookings.length != 0 ?
                                <td className='bg-[#e0e5eb] text-left text-[#0202029c] font-medium' colSpan={9}>
                                    <ul className='flex justify-between items-center px-4 py-2'>
                                        <li> Showing {currentPage} to {totalPages} of {totalDocuments} results</li>
                                        <li className='flex  gap-x-4 px-3'>
                                            <button className='px-2 py-1  shadow-sm border border-[#b9b5b5c2] bg-white rounded-md flex items-center gap-x-1 disabled:bg-transparent' onClick={() => dispatch(previousPage())} disabled={currentPage == 1}>
                                                <FaArrowLeft />
                                                Previous
                                            </button>
                                            <button className='px-2 py-1 shadow-sm border border-[#b9b5b5c2] bg-white rounded-md flex items-center gap-x-2 disabled:bg-transparent' onClick={() => dispatch(nextPage())} disabled={currentPage == totalPages}>
                                                Next
                                                <FaArrowRight />
                                            </button>
                                        </li>
                                    </ul>
                                </td>
                                :
                                <td colSpan={9} className='bg-gradient-to-r from-rose-400 to-red-500 font-bold text-xl text-black text-center animate-bounce'>
                                    Data Not Found
                                </td>}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesReport
