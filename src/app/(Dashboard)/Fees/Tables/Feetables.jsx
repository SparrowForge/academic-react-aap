import React from 'react';

const Feetables = () => {
    return (
        <div className="overflow-x-auto rounded-md border border-[#333333]/10">

            <table className="w-full border border-[#333333]/90 text-md ">
                <thead className=" ">
                    <tr className='text-[#333333]/50 text-center'>
                        <th className=" px-4 py-2 border border-[#333333]/20 ">ID</th>
                        <th className=" px-4 py-2 border border-[#333333]/20 ">Name</th>
                        <th className=" px-4 py-2 border border-[#333333]/20 ">Type</th>
                        <th className=" px-4 py-2 border border-[#333333]/20 ">Amount</th>
                        <th className=" px-4 py-2 border border-[#333333]/20 ">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-[#333333]/20 ">1</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">BSc Computer Science</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Degree</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">₹50,000</td>
                        <td className="px-4 py-2 border border-[#333333]/20">
                            <button className='bg-green-600 text-white shadow-sm  rounded-full px-4 py-1'>Active</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-[#333333]/20 ">2</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Hostel Fees</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Residence</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">₹25,000</td>
                        <td className="px-4 py-2 border border-[#333333]/20  ">
                            <button className='bg-green-600 text-white shadow-sm  rounded-full px-4 py-1'>Active</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-[#333333]/20 ">2</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Hostel Fees</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Residence</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">₹25,000</td>
                        <td className="px-4 py-2 border border-[#333333]/20  ">
                            <button className='bg-green-600 text-white shadow-sm  rounded-full px-4 py-1'>Active</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-[#333333]/20 ">2</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Hostel Fees</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Residence</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">₹25,000</td>
                        <td className="px-4 py-2 border border-[#333333]/20  ">
                            <button className='bg-green-600 text-white shadow-sm  rounded-full px-4 py-1'>Active</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-[#333333]/20 ">2</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Hostel Fees</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Residence</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">₹25,000</td>
                        <td className="px-4 py-2 border border-[#333333]/20  ">
                            <button className='bg-green-600 text-white shadow-sm  rounded-full px-4 py-1'>Active</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-[#333333]/20 ">2</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Hostel Fees</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Residence</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">₹25,000</td>
                        <td className="px-4 py-2 border border-[#333333]/20  ">
                            <button className='bg-green-600 text-white shadow-sm  rounded-full px-4 py-1'>Active</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-[#333333]/20 ">3</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Lab Fees</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">Additional</td>
                        <td className="px-4 py-2 border border-[#333333]/20 ">₹5,000</td>
                        <td className="px-4 py-2 border border-[#333333]/20  ">

                            <button className='bg-[#ffffff] shadow-sm border border-[#333333]/20 rounded-full px-4 py-1'>Draft</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Feetables;