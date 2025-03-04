import React, { useEffect, useState } from 'react'
import { Row, Col, Image, Form, Button } from 'react-bootstrap'
import Card from '../../../components/Card'

import { Link, useNavigate, useParams } from 'react-router-dom'

import http from '../../../http'
import AuthUser from '../../../components/AuthUser'

const Enseignant_list_Chapitre = (props) => {
    const navigate = useNavigate();
    const { user, http } = AuthUser();
    const { classe } = useParams();
    const etab = user.etablissement;
    const userid = user.id;

    const [inputs, setInputs] = useState({});
    const { matiere } = useParams();

    //listChapitres
    const [Chapitres, setChapitres] = useState([]);

    useEffect(() => {
        fetchAllChapitres()
    }, []);

    const fetchAllChapitres = () => {
        http.get('/get_chapitres_classe/' + etab + '/' + classe + '/' + matiere).then((res) => {
            setChapitres(res.data);
        });
    }

    //addLecons

    const handlechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value, etab, classe, matiere }))
    }

    const submitForm = () => {
        http.post('/chapitres', inputs).then((res) => {
            window.location.reload(false);
        })
        console.log(inputs)
    }

    const deleteChapitres = (id) => {
         if(window.confirm("Voulez-vous supprimer cet élément?")==true){
        http.delete('/chapitres/' + id).then(res => {
            fetchAllChapitres();
        })
             alert('Supprimé!');
    }
    }
    return (
        <>
            <div>
                <Row>

                    <Col xl="9" lg="8">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title mb-3">
                                    <h4 className="card-title">Fiche de suivi pédagogique - Chapitres</h4>
                                </div>
                            </Card.Header>
                            <div className="table-responsive">
                                <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                                    <thead>
                                        <tr className="ligth">
                                            <th>Intitulé</th>
                                            <th>Nombre d'heures</th>
                                            <th>Date de début</th>
                                            <th>Date de fin</th>
                                            <th>Description</th>
                                            <th min-width="100px">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Chapitres.map((item, idx) => (
                                            <tr key={idx}>
                                                <td>{item.intitule_chapitre}</td>
                                                <td>{item.nombre_heure_chapitre} h</td>
                                                <td>{item.date_debut_chapitre}</td>
                                                <td>{item.date_fin_chapitre}</td>
                                                <td>{item.description_chapitre}</td>

                                                <td>
                                                    <div className="flex align-items-center list-user-action">
                                                        <Link className="btn btn-sm btn-icon btn-warning" data-toggle="tooltip" data-placement="top" title="Edit" data-original-title="Edit" to={"/Enseignant/List/Lecons/" + item.intitule_chapitre + "/" + classe + "/" + matiere}>
                                                            <span className="btn-inner">
                                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </span>
                                                        </Link>{' '}
                                                        <Link className="btn btn-sm btn-icon btn-danger" data-toggle="tooltip" data-placement="top" title="Delete" data-original-title="Delete" onClick={() => { deleteChapitres(item.id) }}>
                                                            <span className="btn-inner">
                                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                                    <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </span>
                                                        </Link>{' '}
                                                    </div>
                                                </td>
                                            </tr>))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </Col>
                    <Col xl="3" lg="4" className="">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Ajouter une chapitre</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form>

                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="intitule_chapitre">Intitulé du chapitre *</Form.Label>
                                        <Form.Control type="text" id="intitule_chapitre" name="intitule_chapitre"
                                            value={inputs.intitule_chapitre || ''}
                                            onChange={handlechange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="nombre_heure">Nombre d'heures</Form.Label>
                                        <Form.Control type="number" id="nombre_heure_chapitre" name="nombre_heure_chapitre"
                                            value={inputs.nombre_heure_chapitre || ''}
                                            onChange={handlechange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="date_debut_chapitre"> Date de début</Form.Label>
                                        <Form.Control type="date" id="date_debut_chapitre" name="date_debut_chapitre"
                                            value={inputs.date_debut_chapitre || ''}
                                            onChange={handlechange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="date_fin_chapitre">Date prévu de fin</Form.Label>
                                        <Form.Control type="date" id="date_fin_chapitre" name="date_fin_chapitre"
                                            value={inputs.date_fin_chapitre || ''}
                                            onChange={handlechange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label >Description du chapitre</Form.Label>
                                        <Form.Control as="textarea" id="description_chapitre" name="description_chapitre" rows="5"
                                            value={inputs.description_chapitre || ''}
                                            onChange={handlechange}
                                        />
                                    </Form.Group>

                                    <Button type="button" variant="btn btn-primary" onClick={submitForm}>Ajouter</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )

}

export default Enseignant_list_Chapitre;
