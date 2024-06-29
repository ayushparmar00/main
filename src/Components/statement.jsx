import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import './statementStyle.css';

const AccountStatement = () => {
  const [activeTab, setActiveTab] = useState('statement1');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const tabNames = {
    statement1: 'All',
    statement2: 'P&L',
    statement3: 'PDC',
    statement4: 'Account'
  };

  const tableContents = {
    statement1: [
      {
        date: '29 May 24',
        description: 'Chips withdrawal from Sumitjjjjj ( C10615 ) by Abhi . B. H. E. L [Abhi . B. H. E. L]',
        prevBal: '100000',
        credit: '0',
        debit: '99500',
        commPlus: '0',
        balance: '500',
      },
      // Additional rows for statement 1
    ],
    statement2: [
      {
        date: '30 May 24',
        description: 'Deposit from XYZ Company',
        prevBal: '9500',
        credit: '5000',
        debit: '0',
        commPlus: '0',
        balance: '14500',
      },
      // Additional rows for statement 2
    ],
    statement3: [
      {
        date: '28 May 24',
        description: 'Online purchase at ABC Store',
        prevBal: '30000',
        credit: '0',
        debit: '2000',
        commPlus: '0',
        balance: '28000',
      },
      // Additional rows for statement 3
    ],
    statement4: [
      {
        date: '27 May 24',
        description: 'Salary credited by Employer',
        prevBal: '0',
        credit: '25000',
        debit: '0',
        commPlus: '0',
        balance: '25000',
      },
      // Additional rows for statement 4
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="startDate" className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="endDate" className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <ul className="nav nav-tabs">
            {Object.keys(tableContents).map((tabKey) => (
              <li className="nav-item" key={tabKey}>
                <a
                  className={`nav-link ${activeTab === tabKey ? 'active' : ''}`}
                  onClick={() => handleTabChange(tabKey)}
                  href="#!"
                >
                  {tabNames[tabKey]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <div className="tab-content">
          {Object.keys(tableContents).map((tabKey) => (
            <div className={`tab-pane fade ${activeTab === tabKey ? 'show active' : ''}`} key={tabKey}>
              <div className="row mt-5">
                <div className="col">
                  <div className="card bg-default shadow">
                    <div className="table-responsive">
                      <table className="table align-items-center table-dark table-flush">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">DATE</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">Prev. Bal</th>
                            <th scope="col">CREDIT</th>
                            <th scope="col">DEBIT</th>
                            <th scope="col">Comm+</th>
                            <th scope="col">BALANCE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableContents[tabKey].map((row, index) => (
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
                          <ul className="pagination justify-content-center mb-0">
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
            </div>
          ))}
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
