import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import './statementStyle.css';

const AccountStatement = () => {
  return (
    <div className="container mt-4">
    
    <div className="row mt-5">
      <div className="col">
        <div className="card bg-default shadow">
          <div className="table-responsive">
            <table className="table align-items-center table-dark table-flush">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">DATE</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">Prev. Bal </th>
                  <th scope="col">CREDIT</th>
                  <th scope="col">DEBIT</th>
                  <th scope="col">Comm+</th>
                  <th scope="col">BALANCE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: '29 May 24',
                    description: 'Chips withdrawl from Sumitjjjjj ( C10615 ) by Abhi . B. H. E. L [Abhi . B. H. E. L]',
                    prevBal: '100000',
                    credit: '0',
                    debit: '99500',
                    commPlus: '0',
                    balance: '500',
                  },
                  {
                    date: '29 May 24',
                    description: 'Chips withdrawl from Sumitjjjjj ( C10615 ) by Abhi . B. H. E. L [Abhi . B. H. E. L]',
                    prevBal: '100000',
                    credit: '0',
                    debit: '99500',
                    commPlus: '0',
                    balance: '500',
                  },
                  {
                    date: '29 May 24',
                    description: 'Chips withdrawl from Sumitjjjjj ( C10615 ) by Abhi . B. H. E. L [Abhi . B. H. E. L]',
                    prevBal: '100000',
                    credit: '0',
                    debit: '99500',
                    commPlus: '0',
                    balance: '500',
                  },
                  {
                    date: '29 May 24',
                    description: 'Chips withdrawl from Sumitjjjjj ( C10615 ) by Abhi . B. H. E. L [Abhi . B. H. E. L]',
                    prevBal: '100000',
                    credit: '0',
                    debit: '99500',
                    commPlus: '0',
                    balance: '500',
                  },
                ].map((row, index) => (
                  <tr key={index}>
                    <th scope="row">
                      <div className="media align-items-center">
                        <div className="media-body">
                          <span className="mb-0 text-sm">{row.date}</span>
                        </div>
                      </div>
                    </th>
                    <td>{row.description}</td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-warning"></i>
                        {row.prevBal}
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <span>{row.credit}</span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">{row.debit}</span>
                      </div>
                    </td>
                    <td className="text-right">
                      <span className="mr-2">{row.commPlus}</span>
                    </td>
                    <td className="text-right">
                      <span className="mr-2">{row.balance}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="card-footer py-4">
              <nav aria-label="...">
                <ul className="pagination justify-content-end mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">
                    <GrFormPrevious />
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                    <MdNavigateNext />
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4">
        <div className="d-flex justify-content-center">
          <a href="/home" className="btn btn-primary btn-lg w-100" style={{ backgroundColor: '#ff1616', borderColor: '#ff1616' }}>Back to Main Menu</a>
        </div>
      </div>
    </div>
  
  );
};

export default AccountStatement;
