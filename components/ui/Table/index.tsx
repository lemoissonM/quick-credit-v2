import React, { ReactNode } from "react";


type Props = {
    data: any[],
    columns: string[],
}

const Table: React.FC<Props> = (props) => {
    return (
        <table className="table-fixed w-full p-5">
        <thead className="mx-5 text-blue w-full">
          <tr className="rounded-[20px] w-full">
            {props.columns.map((header, index) => {
                let className = "text-blue text-[14px] capitalize  font-bold text-left pl-5 py-4 bg-[#14213D] bg-opacity-5";
                if(index === 0) className = `rounded-tl-[10px] ${className}`
                if(index === props.columns.length - 1) className = `rounded-tr-[10px] ${className}`
                return <th key={`${header}-${index}`} className={className}> {header} </th>
            })}
          </tr>
        </thead>
          <tbody>
            {props.data.map((row, index) => {
                return (
                    <tr
                key={row.id}
                className={`bg-[#14213D] ${index % 2 === 0 ? 'bg-opacity-[0.01]' : 'bg-opacity-[0.05]'}`}
              >
                {props.columns.map((header, index) => {
                    return (
                        <td key={`${header}-${index}-data`} className="text-black font-semibold w-full text-[13px] text-left pl-5 py-4 overflow-x-hidden">
                            {row[header]}
                        </td>
                    )
                })}
              </tr>
                )
            })}
          </tbody>
      </table>
    )
}

export default Table;