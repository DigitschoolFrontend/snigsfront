import React, { useState, useEffect, memo, Fragment } from "react";
import { Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import AuthUser from '../../../components/AuthUser'

// img
import shap1 from '../../../assets/images/shapes/01.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap3 from '../../../assets/images/shapes/03.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap5 from '../../../assets/images/shapes/05.png'
import shap6 from '../../../assets/images/shapes/06.png'

const userlist = [
    {
        img: `${shap1}`,
        name: 'Anna Sthesia',
        phone: '(760) 756 7568',
        email: 'annasthesia@gmail.com',
        country: 'USA',
        status: 'Active',
        company: 'Acme Corporation',
        joindate: '2019/12/01',
        color: 'bg-primary'
    },
    {
        img: `${shap2}`,
        name: 'Brock Lee',
        phone: '+62 5689 458 658',
        email: 'brocklee@gmail.com',
        country: 'Indonesia',
        status: 'Active',
        company: 'Soylent Corp',
        joindate: '2019/12/01',
        color: 'bg-primary'
    },
    {
        img: `${shap3}`,
        name: 'Dan Druff',
        phone: '+55 6523 456 856',
        email: 'dandruff@gmail.com',
        country: 'Brazil',
        status: 'Pending',
        company: 'Acme Corporation',
        joindate: '2019/12/01',
        color: 'bg-warning'
    },
    {
        img: `${shap4}`,
        name: 'Hans Olo',
        phone: '+91 2586 253 125',
        email: 'hansolo@gmail.com',
        country: 'India',
        status: 'Inactive',
        company: 'Vehement Capital',
        joindate: '2019/12/01',
        color: 'bg-danger'
    },
    {
        img: `${shap5}`,
        name: 'Lynn Guini',
        phone: '+27 2563 456 589',
        email: 'lynnguini@gmail.com',
        country: 'Africa',
        status: 'Active',
        company: 'Massive Dynamic',
        joindate: '2019/12/01',
        color: 'bg-primary'
    },
    {
        img: `${shap6}`,
        name: 'Eric Shun',
        phone: '+55 25685 256 589',
        email: 'ericshun@gmail.com',
        country: 'Brazil',
        status: 'Pending',
        company: 'Globex Corporation',
        joindate: '2019/12/01',
        color: 'bg-warning'
    },
    {
        img: `${shap3}`,
        name: 'aaronottix',
        phone: '(760) 756 7568',
        email: 'budwiser@ymail.com',
        country: 'USA',
        status: 'Hold',
        company: 'Acme Corporation',
        joindate: '2019/12/01',
        color: 'bg-info'
    },
    {
        img: `${shap5}`,
        name: 'Marge Arita',
        phone: '+27 5625 456 589',
        email: 'margearita@gmail.com',
        country: 'Africa',
        status: 'Complite',
        company: 'Vehement Capital',
        joindate: '2019/12/01',
        color: 'bg-success'
    },
    {
        img: `${shap2}`,
        name: 'Bill Dabear',
        phone: '+55 2563 456 589',
        email: 'billdabear@gmail.com',
        country: 'Brazil',
        status: 'Active',
        company: 'Massive Dynamic',
        joindate: '2019/12/01',
        color: 'bg-primary'
    }
]

const ChoixStat = () => {



    return (
        <>
            <div>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Statistiques</h4>
                                </div>
                                
                            </Card.Header>
                            <Card.Body className="px-0">
                                <div className="table-responsive">
                                    <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                                        <thead>
                                            <tr className="ligth">
                                                <th> </th>
                                                <th> </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                                    <tr>
                                                        <td>Par Classe</td>

                                                        <td>
                                                            <div className="flex align-items-center list-user-action">

                                                                <Link className="btn btn-sm btn-icon btn-warning" data-toggle="tooltip" data-placement="top" title="Edit" data-original-title="Edit" to="/Admin/stat/classe">
                                                                    <span className="btn-inner">
                                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                </Link>{' '}
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>De l'établissement</td>

                                                        <td>
                                                            <div className="flex align-items-center list-user-action">

                                                                <Link className="btn btn-sm btn-icon btn-warning" data-toggle="tooltip" data-placement="top" title="Edit" data-original-title="Edit" to="Admin/stat/etalissement">
                                                                    <span className="btn-inner">
                                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                </Link>{' '}
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )

}

export default ChoixStat;
