// components/TableComponent.js
import React, { useEffect, useRef } from 'react';
import 'tabulator-tables/dist/css/tabulator.min.css'; // Import the Tabulator styles
import { create, extend } from 'tabulator-tables'; // Import the Tabulator library
import Tabulator from 'tabulator-tables'; // Import the entire module
import { useCart } from 'react-use-cart';

const TableComponent = ({ data }) => {
  const tableRef = useRef(null);
  const { addItem, items } = useCart();

  var Actions = function (cell, formatterParams) { //plain text value
    const productInCart = items.some((item) => item.id === cell.getRow().getData().id);
    // console.log(productInCart)
    return ` 
      <button class="group/wishlist text-0 inline-block align-middle mx-[2px]">
      ${productInCart ?
        `<svg width="18" height="18" viewBox="0 0 22 22" fill="none" class="stroke-[1.5] stroke-gray-800 stroke-violet-900 fill-violet-900 " xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0273 5.49757C9.02734 5.49752 5.52734 4.99755 4.52922 7.49756C3.59119 9.84705 3.19588 14.1642 3.02922 15.9975C2.86255 17.3309 3.32922 19.9975 6.52922 19.9975H11.0273M11 5.49757C13 5.49752 16.5 4.99755 17.4981 7.49756C18.4362 9.84705 18.8315 14.1642 18.9981 15.9975C19.1648 17.3309 18.6981 19.9975 15.4981 19.9975H11" />
            <path d="M11 1.79999C11.8477 1.79999 14 1.79999 14 5.29999" />
            <path d="M11 1.79999C10.1523 1.79999 8 1.79999 8 5.29999" />
        </svg>`
        :
        `<svg width="18" height="18" viewBox="0 0 22 22" fill="none" class="stroke-[1.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 " xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0273 5.49757C9.02734 5.49752 5.52734 4.99755 4.52922 7.49756C3.59119 9.84705 3.19588 14.1642 3.02922 15.9975C2.86255 17.3309 3.32922 19.9975 6.52922 19.9975H11.0273M11 5.49757C13 5.49752 16.5 4.99755 17.4981 7.49756C18.4362 9.84705 18.8315 14.1642 18.9981 15.9975C19.1648 17.3309 18.6981 19.9975 15.4981 19.9975H11" />
            <path d="M11 1.79999C11.8477 1.79999 14 1.79999 14 5.29999" />
            <path d="M11 1.79999C10.1523 1.79999 8 1.79999 8 5.29999" />
        </svg>`
      }  
      
    </button>
     <button class="group/wishlist text-0 inline-block align-middle mx-[2px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 22 23" fill="none" class=" stroke-[1.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 group-[.active]/wishlist:fill-violet-900 fill-none group-[.active]/wishlist:stroke-violet-900">
            <path d="M10.4697 5.59405C10.6103 5.7347 10.8011 5.81372 11 5.81372C11.1989 5.81372 11.3897 5.7347 11.5303 5.59405L11.9085 5.21592C12.8465 4.2779 14.118 3.75122 15.4447 3.75122H15.5616C18.3236 3.75122 20.5625 5.99012 20.5625 8.75216C20.5625 10.1386 19.9874 11.4622 18.9741 12.4079L11 19.8503L3.02592 12.4079C2.01262 11.4622 1.4375 10.1386 1.4375 8.75216C1.4375 5.99012 3.6764 3.75122 6.43844 3.75122H6.55531C7.88197 3.75122 9.15352 4.2779 10.0915 5.21593L10.4697 5.59405Z"
            />
        </svg>
    </button>
  </button>
    <button  class="group/wishlist text-0 inline-block align-middle mx-[2px]">
    <svg width="18" height="18" viewBox="0 0 18 19"  xmlns="http://www.w3.org/2000/svg" class=" fill-gray-900 stroke-[0.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 group-[.active]/wishlist:fill-violet-900 group-[.active]/wishlist:stroke-violet-900">
    <path d="M1.82812 9.91395C1.82961 8.60904 2.34864 7.35801 3.27135 6.4353C4.19406 5.51259 5.44509 4.99356 6.75 4.99207H14.7312L13.7644 4.02457C13.6899 3.9446 13.6493 3.83882 13.6512 3.72953C13.6531 3.62023 13.6974 3.51595 13.7747 3.43866C13.852 3.36136 13.9563 3.31709 14.0656 3.31516C14.1749 3.31323 14.2807 3.3538 14.3606 3.42832L16.0481 5.11582C16.1271 5.19492 16.1715 5.30215 16.1715 5.41395C16.1715 5.52574 16.1271 5.63297 16.0481 5.71207L14.3606 7.39957C14.2807 7.47409 14.1749 7.51466 14.0656 7.51273C13.9563 7.5108 13.852 7.46653 13.7747 7.38923C13.6974 7.31194 13.6531 7.20766 13.6512 7.09836C13.6493 6.98907 13.6899 6.88329 13.7644 6.80332L14.7312 5.83582H6.75C5.66881 5.83712 4.63228 6.2672 3.86777 7.03171C3.10325 7.79623 2.67318 8.83276 2.67188 9.91395C2.67188 10.0258 2.62743 10.1331 2.54831 10.2123C2.46919 10.2914 2.36189 10.3358 2.25 10.3358C2.13811 10.3358 2.03081 10.2914 1.95169 10.2123C1.87257 10.1331 1.82812 10.0258 1.82812 9.91395ZM15.75 9.49207C15.6381 9.49207 15.5308 9.53652 15.4517 9.61563C15.3726 9.69475 15.3281 9.80206 15.3281 9.91395C15.3268 10.9951 14.8967 12.0317 14.1322 12.7962C13.3677 13.5607 12.3312 13.9908 11.25 13.9921H3.26883L4.23563 13.0246C4.31015 12.9446 4.35071 12.8388 4.34879 12.7295C4.34686 12.6202 4.30258 12.516 4.22529 12.4387C4.14799 12.3614 4.04371 12.3171 3.93442 12.3152C3.82512 12.3132 3.71935 12.3538 3.63937 12.4283L1.95188 14.1158C1.87287 14.1949 1.8285 14.3021 1.8285 14.4139C1.8285 14.5257 1.87287 14.633 1.95188 14.7121L3.63937 16.3996C3.71935 16.4741 3.82512 16.5147 3.93442 16.5127C4.04371 16.5108 4.14799 16.4665 4.22529 16.3892C4.30258 16.3119 4.34686 16.2077 4.34879 16.0984C4.35071 15.9891 4.31015 15.8833 4.23563 15.8033L3.26883 14.8358H11.25C12.5549 14.8343 13.8059 14.3153 14.7286 13.3926C15.6514 12.4699 16.1704 11.2189 16.1719 9.91395C16.1719 9.80206 16.1274 9.69475 16.0483 9.61563C15.9692 9.53652 15.8619 9.49207 15.75 9.49207Z"  />
    </svg>
  </button>
      `;
  };

  

  const AddToCart = (data) => {
    addItem(data);
    window.location.reload()
  }

  useEffect(() => {
    const table = new Tabulator(tableRef.current, {
      data: data,
      layout: "fitColumns",
      columns: [
        {
          formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", headerHozAlign: "center", headerSort: false, width: 40, cellClick: function (e, cell) {
            cell.getRow().toggleSelect();
          }
        },
        { title: 'ACTION', formatter: Actions, hozAlign: "center", headerSort: false, resizable: false, headerHozAlign: "center", minWidth: 80, cellClick: function (e, cell) { AddToCart(cell.getRow().getData())} },
        { title: 'Company', field: 'company', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", width: 120, },
        { title: 'location', field: 'location', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 80, },
        { title: 'id', field: 'stock_id', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 50, width: 60, },
        { title: 'Shape', field: 'shape', sorter: 'number', resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 60 },
        { title: 'CT', field: 'ct', sorter: 'number', resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 50 },
        { title: 'Color', field: 'color', sorter: 'number', resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 60 },
        { title: 'Clarity', field: 'clarity', sorter: 'number', resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 80 },
        { title: 'Cut', field: 'cut', sorter: 'number', resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 50 },
        { title: 'pol', field: 'pol', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 50, width: "60" },
        { title: 'sym', field: 'sym', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 50, width: "60" },
        { title: 'flu', field: 'flu', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 50, width: "60" },
        { title: 'dep', field: 'd_number', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 60, width: "60" },
        { title: 'table', field: 't_number', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 60, width: "60" },
        { title: 'measurement', field: 'm_number', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", width: 120, },
        { title: 'Lab', field: 'Lab', sorter: 'number', resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 60 },
        { title: 'price/ct', field: 'price_ct', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 70 },
        { title: 'disc', field: 'disc', headerSort: false, resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 60 },
        { title: 'Amount', field: 'total', sorter: 'number', resizable: false, hozAlign: "center", headerHozAlign: "center", minWidth: 80 },
      ],
    });

    return () => {
      // Destroy the table when the component unmounts to avoid memory leaks
      table.destroy();
    };
  }, [data]);
  return <div ref={tableRef}></div>;
};

export default TableComponent;
