import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useAppSelector } from '../../../hooks/useTypedSelector'
import { IUser } from '../../../@types/user';
import { IService } from '../Services/ServiceTable';
import moment from 'moment';

const SalesReport: React.FC = () => {
    const { booking } = useAppSelector((state) => state.booking);
    const heading = ["#", "Booking Id", "Transaction Id", "Service Name", "Payment", "Status", "Booking Date"];
    const exportToExcel = () => {
        const data = booking.map((data, index) => ({
            "#": index + 1,
            "Booking Id": data.bookingId,
            "User Id": (data.userId as IUser)._id,
            "Worker Id": data.workerId,
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
    };

    return (
        <div className="mt-20 px-6">
            <div className="flex justify-between">
                <h1 className="font-Montserrat font-[700] text-[1.9rem] tracking-wider mb-4">
                    Sales Report
                </h1>
                <button className="px-6 bg-black  my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]" onClick={exportToExcel}>
                    Download
                </button>

            </div>
            <div className={`relative overflow-scroll hide-scrollbar sm:rounded-lg `}>
                <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {heading.map((title) => (
                                <th key={title} scope="col" className="px-3 py-3">
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {booking.map((data, index) => {

                            return (
                                <tr
                                    key={data._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <td className="px-3 py-2">{index + 1}</td>
                                    <td className="px-3 py-2">{data.bookingId}</td>
                                    <td className="px-3 py-2">{data.transactionId?.slice(-18)}</td>
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesReport
