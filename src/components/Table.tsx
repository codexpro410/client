import React from 'react'

const Table = () => {
  return (
    <table className='border-separate border border-slate-400  w-full text-center gap-3'>
        <tr>
            <th className="border border-slate-300">size</th>
            <th className="border border-slate-300">chest</th>
            <th className="border border-slate-300">neck</th>
            <th className="border border-slate-300">sleev</th>
        </tr>
        <tr>
            <td className="border border-slate-300 p-3">small</td>
            <td className="border border-slate-300 p-3">36-38*</td>
            <td className="border border-slate-300 p-3">14-14.5*</td>
            <td className="border border-slate-300 p-3">32.5*</td>
        </tr>
        <tr>
            <td className="border border-slate-300 p-3">medium</td>
            <td className="border border-slate-300 p-3">39-41*</td>
            <td className="border border-slate-300 p-3">15-15.5*</td>
            <td className="border border-slate-300 p-3">33.5*</td>
        </tr>
        <tr>
            <td className="border border-slate-300 p-3">large</td>
            <td className="border border-slate-300 p-3">42-44*</td>
            <td className="border border-slate-300 p-3">16-16.5*</td>
            <td className="border border-slate-300 p-3">34.5*</td>
        </tr>
    </table>
  )
}

export default Table